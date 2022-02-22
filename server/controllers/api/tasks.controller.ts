import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Task } from 'server/entities/tasks.entity';
import { TasksService } from 'server/providers/services/tasks.service';


class Task{
    contents: string;
}

@Controller()
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('tasks')
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const tasks = await this.tasksService.findAllForUser(jwtBody.userId);
        return { tasks };
    }

    @Post('tasks/') //add a new task
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskBody) {
        let task = new Task();
        task.contents = body.contents;
        task.userId = null;
        task = await this.tasksService.createTask(task);
        return { task };
    }
}