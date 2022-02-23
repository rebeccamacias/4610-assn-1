import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Task } from 'server/entities/task.entity';
import { TasksService } from 'server/providers/services/tasks.service';


class TaskPostBody{
    title: string;
    description: string;
    time_estimation: number;
    status: boolean;
    project_id: number;
    team_member_id: number;
}

@Controller()
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('tasks/:project_id') //get all of the tasks in a certain project (used on project page)
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const tasks = await this.tasksService.findAllForUser(jwtBody.userId);
        return { tasks };
    }

    @Post('tasks/:project_id') //add a new task to a specific project
    public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
        let task = new Task();
        task.title = body.title;
        task.description = body.description;
        task.team_member_id = body.team_member_id;
        task.project_id = body.project_id;
        task.time_estimation = body.time_estimation;
        task.status = body.status;
        task = await this.tasksService.createTask(task);
        return { task };
    }
}