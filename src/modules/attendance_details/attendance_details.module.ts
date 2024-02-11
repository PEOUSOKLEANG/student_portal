import { Module } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance_details.service';
import { AttendanceDetailsController } from './attendance_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceDetail } from './entities/attendance_detail.entity';
import { User } from '../users/entities/user.entity';
import { StudentSubject } from '../student_subjects/entities/student_subject.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,AttendanceDetail,StudentSubject])],
  controllers: [AttendanceDetailsController],
  providers: [AttendanceDetailsService],
})
export class AttendanceDetailsModule {}
