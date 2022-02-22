import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from 'server/controllers/api/tasks.controller';
import { Task } from 'server/entities/task.entity';
import { User } from 'server/entities/user.entity';
import { TasksService } from 'server/providers/services/tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, User])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [],
})
export class TasksModule {}