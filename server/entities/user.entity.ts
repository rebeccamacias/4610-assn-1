import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinTable, ManyToMany } from 'typeorm';
import { Project } from './project.entity';
import { RefreshToken } from './refresh_token.entity';
import { Task } from './task.entity';
// import { Team_Member } from './team_member.entity';
// import { Team_Leader } from './team_leader.entity';
import { UserRole } from './user_role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  passwordHash: string;

  @OneToMany(() => RefreshToken, (token) => token.user)
  refreshTokens: RefreshToken[];

  @OneToMany(() => UserRole, (userRole) => userRole.user, { cascade: true })
  userRoles: UserRole[];

  @ManyToMany(() => Project, (project) => project.users)
  @JoinTable({ name: 'user_project'})
  projects: Project[];

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
