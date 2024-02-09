import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance_details.service';
import { CreateAttendanceDetailDto } from './dto/create-attendance_detail.dto';
import { UpdateAttendanceDetailDto } from './dto/update-attendance_detail.dto';

@Controller('attendance-details')
export class AttendanceDetailsController {
  constructor(private readonly attendanceDetailsService: AttendanceDetailsService) {}

  @Post()
  create(@Body() createAttendanceDetailDto: CreateAttendanceDetailDto) {
    return this.attendanceDetailsService.create(createAttendanceDetailDto);
  }

  @Get()
  findAll() {
    return this.attendanceDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttendanceDetailDto: UpdateAttendanceDetailDto) {
    return this.attendanceDetailsService.update(+id, updateAttendanceDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceDetailsService.remove(+id);
  }
}
