    import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { ProjectsService } from 'server/providers/services/projects.service';


class ProjectPostBody {
    team_leader_id: number;
    name: string;
    description: string;
}

@Controller()
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get('projects/:user_id') //get all of the projects for a user
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const projects = await this.projectsService.findAllForUser(jwtBody.userId);
        return { projects };
    }

    @Post('projects') //add a new project to projects, assign user to project
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectPostBody) {
        let project = new Project();
        project.team_leader_id = body.team_leader_id;
        project.name = body.name;
        project.description = body.description;
        project = await this.projectsService.createProject(project);
        return { project };
    }
}