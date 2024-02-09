import { Injectable } from '@nestjs/common';
import { CreateAttendanceDetailDto } from './dto/create-attendance_detail.dto';
import { UpdateAttendanceDetailDto } from './dto/update-attendance_detail.dto';

@Injectable()
export class AttendanceDetailsService {
  create(createAttendanceDetailDto: CreateAttendanceDetailDto) {
    return 'This action adds a new attendanceDetail';
  }

  findAll() {
    return `This action returns all attendanceDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceDetail`;
  }

  update(id: number, updateAttendanceDetailDto: UpdateAttendanceDetailDto) {
    return `This action updates a #${id} attendanceDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceDetail`;
  }
}
