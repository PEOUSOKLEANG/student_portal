import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}


  async createUser(uuid:string,createuserDto:CreateUserDto){

    try {
      const IsUser = await this.userRepository.findOne({
        where:{uuid:uuid}
      })
      if(!!IsUser) throw new Error('This user is not found.');
      const user = new  User();
      user.username = createuserDto.username
      user.password = createuserDto.password
      user.first_name = createuserDto.first_name
      user.last_name = createuserDto.last_name
      user.dob = createuserDto.dob
      user.email =  createuserDto.email
      user.current_ad =  createuserDto.current_ad
      await user.save();
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.INTERNAL_SERVER_ERROR,
        message:'This not user'
      },HttpStatus.INTERNAL_SERVER_ERROR)

      
    }
    
  }

}
