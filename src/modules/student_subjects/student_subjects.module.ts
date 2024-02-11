import { Module } from '@nestjs/common';
import { StudentSubjectsService } from './student_subjects.service';
import { StudentSubjectsController } from './student_subjects.controller';
import { StudentSubject } from './entities/student_subject.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '../subjects/entities/subject.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([StudentSubject , Subject,User])],
  controllers: [StudentSubjectsController],
  providers: [StudentSubjectsService],
})
export class StudentSubjectsModule {}
