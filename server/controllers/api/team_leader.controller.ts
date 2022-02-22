import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Team_Leader } from 'server/entities/team_leader.entity';
import { Team_Leader_Service } from 'server/providers/services/team_leader.service';


class TeamLeaderPostBody{
    
}

@Controller()
export class Team_Leader_Controller {
    constructor(private teamLeaderService: Team_Leader_Service) {}

    @Get('team-leader') //gets the team leader for the project
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const team_leader = await this.teamLeaderService.findAllForUser(jwtBody.userId);
        return { team_leader };
    }

    // @Post('team-leader/') //adds a new tea
    // public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
    // }
}