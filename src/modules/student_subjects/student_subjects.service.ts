import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StudentSubjectDto } from './dto/create-student_subject.dto';
import { StudentSubject } from './entities/student_subject.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from '../subjects/entities/subject.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class StudentSubjectsService {
  constructor(@InjectRepository(StudentSubject) private studentsubjectRepostory:Repository<StudentSubject>,
  @InjectRepository(Subject) private subjectRepository:Repository<Subject>,
  @InjectRepository(User) private userRepository:Repository<User>,
  ){}
// 
  async createStudents_subject(studentSubjectDto:StudentSubjectDto){
    try {
      const studentsubject  = new StudentSubject()
      studentsubject.subject = await this.subjectRepository.findOne({where:{id:studentSubjectDto.subject}})
      studentsubject.user = await this.userRepository.findOne({where:{id:studentSubjectDto.user}})
      studentsubject.enrollment_date = studentSubjectDto.enrollment_date
      studentsubject.status = studentSubjectDto.status
      await this.studentsubjectRepostory.save(studentsubject);
      return `This is Created`
    } catch (error) {
      throw new BadRequestException('Something is wrong.')
    }
  }

  async editStudent_Subject (id:number, studentsubjectDto:StudentSubjectDto){
    try {
      const editstudent_subject = await this.studentsubjectRepostory.findOne({where:{id:id}});
      if(!editstudent_subject) throw new Error('This subject is not found.')
      if(editstudent_subject) {
        editstudent_subject.enrollment_date = studentsubjectDto.enrollment_date
        editstudent_subject.status = studentsubjectDto.status
        // editstudent_subject.save()
        await this.studentsubjectRepostory.save(editstudent_subject);

        return`This student_subject is updated .`;
      }
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:('something is worng !!!')
      },HttpStatus.INTERNAL_SERVER_ERROR) 
    }
  }

  async removeStudet_Subject(id:number){
    try {
      const removestudent_subject = await this.studentsubjectRepostory.findOne({where:{id:id}});
      if(!removestudent_subject) throw new Error('This is not found!!');
      await this.studentsubjectRepostory.delete(removestudent_subject);
      return` The subject is deleted.`;
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:('something is worng!!!')
      },HttpStatus.INTERNAL_SERVER_ERROR);
      
    }
  }
  
 
}
