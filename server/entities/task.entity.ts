import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  task_id: number;

  @Column({ unique: true })
  team_member_id: number;

  @Column({ unique: true })
  project_id: number;
  
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  time_estimation: number;

  @Column({ nullable: false })
  status: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User[];
}