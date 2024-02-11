import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance_details.service';

@Controller('attendance-details')
export class AttendanceDetailsController {
  constructor(private readonly attendanceDetailsService: AttendanceDetailsService) {}

}
