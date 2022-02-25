import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  userId: number;

  @Column({ unique: true })
  projectId: number;
  
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  timeEstimation: number;

  @Column({ nullable: false })
  status: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @ManyToOne(() => Project, (project) => project.tasks)
  project: Project;
}