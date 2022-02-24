import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { User } from 'server/entities/user.entity';
import { ProjectsService } from 'server/providers/services/projects.service';
import * as crypto from 'crypto';


class ProjectPostBody {
    name: string;
    description: string;
}

@Controller()
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    // @Get('projects') //get ALL projects, for testing purposes
    // public async getAllProjects(@JwtBody() jwtBody: JwtBodyDto) {
    //     const projects = await this.projectsService.getProjects();
    //     return { projects };
    // }

    @Get('/projects') //get all of the projects for a user
    public async getMyProjects(@JwtBody() jwtBody: JwtBodyDto) {
        const projects = await this.projectsService.findAllForUser(jwtBody.userId);
        return { projects };
    }

    @Get('/project/:id') //get project by id
    public async getProjectById(@JwtBody() jwtBody: JwtBodyDto, @Param('id') id: string) {
        const project = await this.projectsService.getProjectById(parseInt(id));
        return { project };
    }

    @Post('/projects') //add a new project to projects, assign user to project
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectPostBody) {
        let project = new Project();
        project.teamLeaderId = jwtBody.userId; //tells us who the current user is
        project.name = body.name;
        project.description = body.description;
        project.contextId = crypto.randomBytes(16).toString('hex');
        const user = new User();
        user.id = jwtBody.userId;
        project.users = [user];
        project = await this.projectsService.createProject(project);
        return { project };
    }
}