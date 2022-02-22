import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Team_Leader {
    @PrimaryGeneratedColumn()
    team_Leader_id: number;
 
    @Column({ nullable: false })
    user_id: number;

    @Column({ nullable: false })
    Project_id: number;

    @ManyToOne(() => User, (user) => user.projects)
    user: User[];
}