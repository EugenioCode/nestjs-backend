import { Controller, Get, Logger, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from '../enum/config.enum';
@Controller('user')
export class UserController {
  private logger = new Logger(UserController.name);
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    this.logger.log('UserController init');
  }

  @Get()
  findAll() {
    const db = this.configService.get<string>(ConfigEnum.DB);
    const dbHost = this.configService.get<string>(ConfigEnum.DB_HOST);
    const dbURL = this.configService.get('DB_URL');
    this.logger.log('UserController init');
    console.log(db, dbHost, dbURL);
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
