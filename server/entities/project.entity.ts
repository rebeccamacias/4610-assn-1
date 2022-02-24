import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  teamLeaderId: number

  @Column({ nullable: false })
  name: string
  
  @Column({ nullable: false })
  description: string

  @Column({ unique: true, nullable: false })
  contextId: string

  @ManyToMany (() => User, (user) => user.projects, { cascade: true })
  users: User[];

  @OneToMany(()=> Task, (task) => task.project)
  tasks: Task[];
}