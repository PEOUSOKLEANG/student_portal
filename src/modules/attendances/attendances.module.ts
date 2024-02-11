import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AttendanceDetail } from '../attendance_details/entities/attendance_detail.entity';
import { Attendance } from './entities/attendance.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,AttendanceDetail,Attendance])],
  controllers: [AttendancesController],
  providers: [AttendancesService],
})
export class AttendancesModule {}
