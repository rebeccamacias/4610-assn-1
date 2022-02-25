import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "server/entities/task.entity";
import { Repository, UpdateEvent, UpdateResult } from "typeorm";


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

    createTask(task: Task): Promise<Task> {
        return this.taskRepository.save(task);
    }

    findTaskById(id: number): Promise<Task>{
        return this.taskRepository.findOne(id)
    }

    updateTask(task: Task): Promise<UpdateResult>{
        return this.taskRepository.update(task.id,task)
    }
}