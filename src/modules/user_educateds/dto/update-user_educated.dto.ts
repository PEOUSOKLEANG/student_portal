import { PartialType } from '@nestjs/mapped-types';
import { CreateUserEducatedDto } from './create-user_educated.dto';

export class UpdateUserEducatedDto extends PartialType(CreateUserEducatedDto) {}
