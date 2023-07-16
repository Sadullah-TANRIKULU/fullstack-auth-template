import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserCredentials } from './models/credential.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAllUsers(): Observable<UserCredentials[]> {
    return this.appService.findAllUsers();
  }

  @Post()
  create(@Body() userCredentials: UserCredentials): Observable<UserCredentials> {
    return this.appService.createUserCredentials(userCredentials);
  }

  @Put(':id')
  update(
    @Param('id') 
    id: number,
    @Body() 
    userCredentials: UserCredentials,
  ): Observable<UpdateResult> {
    return this.appService.updateUserCredentials(id, userCredentials);
  }

  @Delete(':id')
  delete(
    @Param('id')
    id: number,
  ): Observable<DeleteResult> {
    return this.appService.deleteUserCredentials(id);
  }



}
