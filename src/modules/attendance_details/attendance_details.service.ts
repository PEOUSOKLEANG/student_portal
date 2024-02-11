import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { In, Repository } from 'typeorm';
import { StudentSubject } from '../student_subjects/entities/student_subject.entity';
import { School } from '../schools/entities/school.entity';
import { AttendanceDetailDto } from './dto/create-attendance_detail.dto';
import { AttendanceDetail } from './entities/attendance_detail.entity';

@Injectable()
export class AttendanceDetailsService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>,
  @InjectRepository(StudentSubject) private studentsubjectRepository:Repository<StudentSubject>,
  @InjectRepository(AttendanceDetail) private attendancedeatiilRepository:Repository<AttendanceDetail>,
  // @InjectRepository(StudentSubject) private student_subjectRepository:<StudentSubject>,
  ){}

  async  createsAttendanceDetail(attendanceDetailDto:AttendanceDetailDto){
    try {
      const attendance_detail = new AttendanceDetail()
      // need to check role for teacher
      attendance_detail.user = await this.userRepository.findOne({where:{id:attendanceDetailDto.user}});
      attendance_detail.studentsubject= await this.studentsubjectRepository.findOne({where:{id:attendanceDetailDto.studentsubject}})
      attendance_detail.classname = attendanceDetailDto.classname
      attendance_detail.session = attendanceDetailDto.session
      attendance_detail.time_start = attendanceDetailDto.time_start
      attendance_detail.time_end  = attendanceDetailDto.time_end

      await this.attendancedeatiilRepository.save(attendance_detail);
      return`This is the attendance_detail:${[
        // attendance_detail.user,// checker
        attendance_detail.user]}`
     } catch (error) {
      throw new BadRequestException('something is worng !!!');
    }
  }
  async editAttendanceDetail(atte_de_id:number , attendanceDetailDto:AttendanceDetailDto){
    try {
      const attendance_detail = await this.attendancedeatiilRepository.findOne({where:{id:atte_de_id}});
      if(!attendance_detail) throw new Error('Attendance_detail is not found!!!');
      if(attendance_detail){
        attendance_detail.user = await this.userRepository.findOne({where:{id:attendanceDetailDto.user}})
        attendance_detail.studentsubject = await this.studentsubjectRepository.findOne({where:{id:attendanceDetailDto.studentsubject}})
        attendance_detail.classname = attendanceDetailDto.classname
        attendance_detail.session = attendanceDetailDto.session
        attendance_detail.time_start = attendanceDetailDto.time_start
        attendance_detail.time_end  = attendanceDetailDto.time_end

        await this.attendancedeatiilRepository.save(attendance_detail);

        return `Attendance_detail: ${[
          attendance_detail.user.username,
          attendance_detail.studentsubject.id,
          attendance_detail.session,
          attendance_detail.time_start,
          attendance_detail.time_end
        ]}`
          
      }
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.BAD_REQUEST,
        message:('Something is worng')
      },HttpStatus.BAD_REQUEST)
    }

  }
  async removeAttendanceDetail(id:number){
    try {
      const removeAttendance = await this.attendancedeatiilRepository.findOne({where:{id:id}})
      if(!removeAttendance) throw new Error('This attendance_detail is not found ')
      await this.attendancedeatiilRepository.remove(removeAttendance);
      return`This attendance_detail: ${removeAttendance.id} is removed`;
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.BAD_REQUEST,
        message:('Something is worng')
      },HttpStatus.BAD_REQUEST)
      
    }
  }

  
}
