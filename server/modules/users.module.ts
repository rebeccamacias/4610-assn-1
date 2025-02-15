import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'server/entities/user.entity';
import { SessionsController } from '../controllers/sessions.controller';
import { UsersController } from 'server/controllers/users.controller';
import { UsersService } from '../providers/services/users.service';
import { RefreshTokensService } from '../providers/services/refresh_tokens.service';
import { RefreshToken } from 'server/entities/refresh_token.entity';
import { JwtService } from 'server/providers/services/jwt.service';
import { RefreshTokensController } from 'server/controllers/refresh_tokens.controller';
import { Role } from 'server/entities/role.entity';
import { RolesService } from 'server/providers/services/roles.service';
import { UserRole } from 'server/entities/user_role.entity';
import { Project } from 'server/entities/project.entity';
import { Task } from 'server/entities/task.entity';
// import { Team_Member } from 'server/entities/team_member.entity';
// import { Team_Leader } from 'server/entities/team_leader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, RefreshToken, Role, UserRole, Project, Task])],
  controllers: [SessionsController, UsersController, RefreshTokensController],
  providers: [UsersService, RolesService, RefreshTokensService, JwtService],
  exports: [TypeOrmModule],
})
export class UsersModule {}
