import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserCredentialEntity } from './models/credential.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentials } from './models/credential.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(UserCredentialEntity)
    private readonly userCredentialsRepository: Repository<UserCredentialEntity>
  ) {}
  
  findAllUsers(): Observable<UserCredentials[]> {
    return from(this.userCredentialsRepository.find())
  }

  createUserCredentials(userCredentials: UserCredentials): Observable<UserCredentials> {
    return from(this.userCredentialsRepository.save(userCredentials));
  }

  updateUserCredentials(id: number, userCredentials: UserCredentials): Observable<UpdateResult> {
    return from(this.userCredentialsRepository.update(id, userCredentials));
  }

  deleteUserCredentials(id: number): Observable<DeleteResult> {
    return from(this.userCredentialsRepository.delete(id))
  }

}
