import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/uptate-student.dto';

type Student = {
  id: number;
  name: string;
  email: string;
  age: number;
  course: string;
};

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private id = 1;

  create(data: CreateStudentDto) {
    const student: Student = {
      id: this.id++,
      ...data,
    };

    this.students.push(student);
    return student;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException('Aluno não encontrado');
    }
    return student;
  }

  update(id: number, data: Partial<UpdateStudentDto>) {
    const student = this.findOne(id);
    Object.assign(student, data);
    return student;
  }

  remove(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Aluno não encontrado');
    }
    this.students.splice(index, 1);
    return { message: 'Aluno removido com sucesso' };
  }
}
