import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/uptate-student.dto';
import { StudentsService } from './students.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('students')
export class StudentsController {
  constructor(private readonly StudentsService: StudentsService) {}

  @Post()
  create(@Body() body: CreateStudentDto) {
    return this.StudentsService.create(body);
  }

  @Get()
  findAll() {
    return this.StudentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.StudentsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<UpdateStudentDto>) {
    return this.StudentsService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.StudentsService.remove(Number(id));
  }
}
