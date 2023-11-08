import { Controller, Get, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'

import { UserEntity } from './user.entity'
import { UserService } from './user.service'

import { JwtGuard } from '@/auth/auth.jwt'
import { GetUser } from '@/auth/decorator'

@ApiBearerAuth()
@ApiTags('user')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: UserEntity) {
    return user
  }
}