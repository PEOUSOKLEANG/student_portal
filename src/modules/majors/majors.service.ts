import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMajorDto, MajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Major } from './entities/major.entity';
import { Repository } from 'typeorm';
import { School } from '../schools/entities/school.entity';
import { User } from '../users/entities/user.entity';


@Injectable()
export class MajorsService {
  constructor(@InjectRepository(Major) private majorRepository:Repository<Major>,
  @InjectRepository(School) private schoolRepository:Repository<School>,
  @InjectRepository(User) private userRepository:Repository<User>){}
  

  async createMajor(createMajorDtO:CreateMajorDto){
    try {
      const newMajor = new Major();
      newMajor.school = await this.schoolRepository.findOne({where:{id:createMajorDtO.school}});
      newMajor.name = createMajorDtO.name
      newMajor.description = createMajorDtO.description

      return await this.majorRepository.save(newMajor);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async editMajor(id:number,majorDto:MajorDto){
     try {
      const editMajors = await this.majorRepository.findOne({where:{id:id}});
      // if school need to asign wrong
      editMajors.school = await this.schoolRepository.findOne({where:{id:majorDto.school}});
      editMajors.name = majorDto.name
      editMajors.description = majorDto.description
    
     } catch (error) {
      throw new BadRequestException(error.message);
     }
  }
  //remove major
  async removeMajor(id:number , school:any){
    try {
      const isSchool = await this.schoolRepository.findOne({where:{id:school}});
      if(!isSchool) throw new Error(`The school is not found.`);
      if(isSchool){
        const isMajor = await this.majorRepository.find({where:{id:id,school:isSchool}})
        if(!isMajor) throw new Error(`The input is not corrected`);
        else{
          await this.majorRepository.delete(id);
          return `${isMajor} is delete for${school.name}`;
        }
      }
      else throw new Error('This school is not found');
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:('This is error')
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

}
