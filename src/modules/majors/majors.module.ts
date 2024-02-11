import { Module } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { MajorsController } from './majors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Major } from './entities/major.entity';
import { School } from '../schools/entities/school.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Major,School])],
  controllers: [MajorsController],
  providers: [MajorsService],
})
export class MajorsModule {}
