import { Body, Controller, Delete, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/note.entity';
import { ProjectsService } from 'server/providers/services/projects.service';


class Project{

}

@Controller()
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Get('projects') //get all of the projects for a user
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const projects = await this.projectsService.findAllForUser(jwtBody.userId);
        return {projects};
    }

    @Post('projects') //add a new project to projects, assign user to project
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectBody) {
        let project = new Project();
        project.userId = jwtBody.userId;
        project = await this.projectsService.createProject(project);
        return { project };
    }
}