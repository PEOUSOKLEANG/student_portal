import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchoolsService } from './schools.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { NumericType } from 'typeorm';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}
  @Post()
  async createSchool(@Body() createSchoolDto:CreateSchoolDto){
    return await this.schoolsService.createSchool(createSchoolDto.name,createSchoolDto.address);
  }
  @Patch()
  async editInfo(@Body() id:number ,updateSchoolDto:UpdateSchoolDto ){
    return await this.schoolsService.editInfoSchool(id, updateSchoolDto.name,updateSchoolDto.address);
  }

 
}
