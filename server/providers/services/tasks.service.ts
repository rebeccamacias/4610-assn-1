import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "server/entities/Task.entity";
import { Repository } from "typeorm";


@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>, 
    ) {}

    findAllForUser(userId: number): Promise<Task[]> {
        return this.taskRepository.find({
            where: { userId },
        })
    }

    createProject(task: Task): Promise<Task> {
        return this.taskRepository.save(task);
    }

}