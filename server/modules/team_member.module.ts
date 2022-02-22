import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team_Member_Controller } from 'server/controllers/api/team_member.controller';
import { Team_Member } from 'server/entities/team_member.entity';
import { User } from 'server/entities/user.entity';
import { Team_Member_Service } from 'server/providers/services/team_member.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team_Member, User])],
  controllers: [Team_Member_Controller],
  providers: [Team_Member_Service],
  exports: [],
})
export class Team_Member_Module {}