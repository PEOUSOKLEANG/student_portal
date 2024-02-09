import { Module } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance_details.service';
import { AttendanceDetailsController } from './attendance_details.controller';

@Module({
  controllers: [AttendanceDetailsController],
  providers: [AttendanceDetailsService],
})
export class AttendanceDetailsModule {}
