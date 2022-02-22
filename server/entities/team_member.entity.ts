import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Team_Member {
    @PrimaryGeneratedColumn()
    team_member_id: number;

    @Column({ nullable: false })
    user_id: number;

    @ManyToOne(() => User, (user) => user.projects)
    user: User[];
}