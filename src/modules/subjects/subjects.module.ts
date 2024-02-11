import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Major } from '../majors/entities/major.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subject,Major])],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {}
