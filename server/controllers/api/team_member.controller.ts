import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Team_Member } from 'server/entities/team_member.entity';
import { Team_Member_Service } from 'server/providers/services/team_member.service';


class TeamMemberPostBody{
    
}

@Controller()
export class Team_Member_Controller {
    constructor(private teamMemberService: Team_Member_Service) {}

    @Get('team-member') //gets all the team members for the project
    public async index(@JwtBody() jwtBody: JwtBodyDto) {
        const team_member = await this.teamMemberService.findAllForUser(jwtBody.userId);
        return { team_member };
    }

    // @Post('team-leader/') //adds a new tea
    // public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
    // }
}