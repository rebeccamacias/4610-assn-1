import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Team_Leader } from "server/entities/team_leader.entity";
import { Repository } from "typeorm";


@Injectable()
export class Team_Leader_Service {
    constructor(
        @InjectRepository(Team_Leader)
        private teamLeaderRepository: Repository<Team_Leader>, 
    ) {}

    findAllForUser(userId: number): Promise<Team_Leader[]> {
        return this.teamLeaderRepository.find({
            where: { userId },
        })
    }

    // addTeamMember(team_leader: Team_Leader): Promise<Team_Leader> {
    //     return this.teamLeaderRepository.save(team_leader);
    // }

}