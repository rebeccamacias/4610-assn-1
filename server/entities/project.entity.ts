import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './tasks.entity';
import { User } from './user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({ unique: true, nullable: false })
  team_leader_id: number

  @Column({ nullable: false })
  name: string
  
  @Column({ nullable: false })
  description: string

  @Column({ nullable: false })
  context_id: number

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  // @OneToMany(()=> Task, (task), => Task.project)
  // task: Task

}