import { Injectable } from '@nestjs/common';
import { CreateUserEducatedDto } from './dto/create-user_educated.dto';
import { UpdateUserEducatedDto } from './dto/update-user_educated.dto';

@Injectable()
export class UserEducatedsService {
  create(createUserEducatedDto: CreateUserEducatedDto) {
    return 'This action adds a new userEducated';
  }

  findAll() {
    return `This action returns all userEducateds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEducated`;
  }

  update(id: number, updateUserEducatedDto: UpdateUserEducatedDto) {
    return `This action updates a #${id} userEducated`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEducated`;
  }
}
