import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceDetailDto } from './create-attendance_detail.dto';

export class UpdateAttendanceDetailDto extends PartialType(CreateAttendanceDetailDto) {}
