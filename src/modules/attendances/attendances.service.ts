import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Attendance } from './entities/attendance.entity';
import { AttendanceDetail } from '../attendance_details/entities/attendance_detail.entity';


@Injectable()
export class AttendancesService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,
  @InjectRepository(Attendance) private attendanceRepository:Repository<Attendance>,
  @InjectRepository(AttendanceDetail) private attendancedetailRepository:Repository<AttendanceDetail>,
  ){}
  
}
