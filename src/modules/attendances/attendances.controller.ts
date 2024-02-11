import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttendancesService } from './attendances.service';


@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

 
}
