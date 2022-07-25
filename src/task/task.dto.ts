import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  due_date: string;
}

export class UpdateTaskDTO {
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    title: string;
  
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    due_date: string;
  }