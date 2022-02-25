import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "server/entities/project.entity";
import { User } from "server/entities/user.entity";
import { Repository, UpdateResult } from "typeorm";


@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>, 
        @InjectRepository(User)
        private userRepository: Repository<User>, 
    ) {}

    getProjectById(id: number): Promise<Project> {
        return this.projectRepository.findOne(id, {
            relations: ['users', 'tasks'],
        })
    }

    async findAllForUser(userId: number): Promise<Project[]> {
        return (await this.userRepository.findOne(userId, {
            relations: ['projects'],
        })).projects
    }

    createProject(project: Project): Promise<Project> {
        return this.projectRepository.save(project);
    }

    updateProject(project: Project): Promise<UpdateResult> {
        return this.projectRepository.update(project.id, project);
    }
}