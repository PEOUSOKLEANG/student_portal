import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { School } from './entities/school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor(@InjectRepository(School) private schoolRepository:Repository<School>){}
  
  async createSchool(name:string, address:string){
    try {
      const school = new School();
      school.name = name
      school.address = address
      await this.schoolRepository.save(school);

      return`${name} is created`;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async editInfoSchool(id:number,name:string,address:string){
    try {
      const isSchool = await this.schoolRepository.findOne({where:{id:id}});
      if(!isSchool) throw new Error('This is not found');
      else{
        isSchool.name = name
        isSchool.address = address
        await this.schoolRepository.save(isSchool);
      }
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:'This is not found ' 
      },HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // async remove(){}



}
