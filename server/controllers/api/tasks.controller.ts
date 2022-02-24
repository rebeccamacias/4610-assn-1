import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Task } from 'server/entities/task.entity';
import { TasksService } from 'server/providers/services/tasks.service';


class TaskPostBody{
    title: string;
    description: string;
    timeEstimation: number;
    status: boolean;
    projectId: number;
}

@Controller()
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post('tasks/:project_id') //add a new task to a specific project
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
        let task = new Task();
        task.title = body.title;
        task.description = body.description;
        // task.team_member_id = body.team_member_id;
        task.projectId = body.projectId;
        task.timeEstimation = body.timeEstimation;
        task.status = body.status;
        task = await this.tasksService.createTask(task);
        return { task };
    }
}