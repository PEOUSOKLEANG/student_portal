import { Module } from '@nestjs/common';
import { UserEducatedsService } from './user_educateds.service';
import { UserEducatedsController } from './user_educateds.controller';

@Module({
  controllers: [UserEducatedsController],
  providers: [UserEducatedsService],
})
export class UserEducatedsModule {}
