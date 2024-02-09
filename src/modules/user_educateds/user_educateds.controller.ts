import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEducatedsService } from './user_educateds.service';
import { CreateUserEducatedDto } from './dto/create-user_educated.dto';
import { UpdateUserEducatedDto } from './dto/update-user_educated.dto';

@Controller('user-educateds')
export class UserEducatedsController {
  constructor(private readonly userEducatedsService: UserEducatedsService) {}

  @Post()
  create(@Body() createUserEducatedDto: CreateUserEducatedDto) {
    return this.userEducatedsService.create(createUserEducatedDto);
  }

  @Get()
  findAll() {
    return this.userEducatedsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEducatedsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEducatedDto: UpdateUserEducatedDto) {
    return this.userEducatedsService.update(+id, updateUserEducatedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEducatedsService.remove(+id);
  }
}
