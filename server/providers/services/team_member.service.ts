import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Team_Member } from "server/entities/team_member.entity";
import { Repository } from "typeorm";


@Injectable()
export class Team_Member_Service {
    constructor(
        @InjectRepository(Team_Member)
        private teamMemberRepository: Repository<Team_Member>, 
    ) {}

    findAllForUser(userId: number): Promise<Team_Member[]> {
        return this.teamMemberRepository.find({
            where: { userId },
        })
    }

    addTeamMember(team_member: Team_Member): Promise<Team_Member> {
        return this.teamMemberRepository.save(team_member);
    }

}