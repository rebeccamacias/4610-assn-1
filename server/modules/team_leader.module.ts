import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team_Leader_Controller } from 'server/controllers/api/team_leader.controller';
import { Team_Leader } from 'server/entities/team_leader.entity';
import { User } from 'server/entities/user.entity';
import { Team_Leader_Service } from 'server/providers/services/team_leader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team_Leader, User])],
  controllers: [Team_Leader_Controller],
  providers: [Team_Leader_Service],
  exports: [],
})
export class Team_Leader_Module {}