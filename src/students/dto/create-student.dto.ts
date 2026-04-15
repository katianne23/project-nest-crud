/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsInt, IsString } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  name!: string;
  @IsEmail()
  email!: string;
  @IsInt()
  age!: number;
  @IsString()
  course!: string;
}
