import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { CreateMajorDto, MajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Major } from './entities/major.entity';

@Controller('majors')
export class MajorsController {
  constructor(private readonly majorsService: MajorsService) {}

  @Post()
  async createMajor(@Body() createMajorDto:CreateMajorDto):Promise<Major>{
    return await this.majorsService.createMajor(createMajorDto)
  }

  @Patch()
  async editMajor(@Body() majoDto:MajorDto , @Param('id') id:number){
    return await this.majorsService.editMajor(+id,majoDto);
  }

 @Delete()
 async removeMajor(@Body() school:number,@Param('id') id:number){
  return this.majorsService.removeMajor(id,school);

 } 


}
