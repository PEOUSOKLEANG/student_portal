import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { Major } from '../majors/entities/major.entity';
import { SubjectDto } from './dto/create-subject.dto';

@Injectable()
export class SubjectsService {
  constructor(@InjectRepository(Subject) private subjectRepository:Repository<Subject>,
    @InjectRepository(Major) private majorRepository:Repository<Major>
  ){}

  async createSubject(subjectDto:SubjectDto){
    try {
      const subject = new Subject();
      subject.major = await this.majorRepository.findOne({where:{id:subjectDto.major}})
      subject.name = subjectDto.name
      subject.description = subjectDto.description
      await this.subjectRepository.save(subject);
      return`${subject.name} is add to the major`;

    } catch (error) {
      throw new BadRequestException(error.message);      
    }
  }

  async editSubject(id:number , subjectDto:SubjectDto){
    try {
      const subject = await this.subjectRepository.findOne({where:{id:id}});
      if(!subject) throw new Error(`This subject(${subjectDto.name} is not found)`)
      if(subject){
        subject.name = subjectDto.name
        subject.description =subjectDto.description

        await this.subjectRepository.save(subject);

        return `This subject: ${subject.name} is edited .`
      }
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:('check Input again.')
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  async removeSubject(id:number,major:any){
    try {
      const Ismajor = await this.majorRepository.findOne({where:{id:major}})
      if(!Ismajor) throw new Error(`Input major: ${major} is not found`)
      if(Ismajor){
        const isSubject = await this.subjectRepository.find({where:{id:id,major:Ismajor}});
        if(!isSubject) throw new Error('Input is not Corrected');
        else{
          await this.subjectRepository.delete(id);
          return `This ${id} is deleted from the databsae . `
        }
      } 
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:('The input value is not corrected')
      }, HttpStatus.INTERNAL_SERVER_ERROR)
      
    }

  }

}
