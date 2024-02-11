import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentSubjectsService } from './student_subjects.service';
import { UpdateStudentSubjectDto } from './dto/update-student_subject.dto';

@Controller('student-subjects')
export class StudentSubjectsController {
  constructor(private readonly studentSubjectsService: StudentSubjectsService) {}

}
