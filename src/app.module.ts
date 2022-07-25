import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ormconfig from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}