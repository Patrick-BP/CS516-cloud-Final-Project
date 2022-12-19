import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { IMessage } from './message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  saveMessage( message: IMessage){
    return this.httpClient.post("https://tu6kwe4da4.execute-api.us-east-1.amazonaws.com/v1/contact", message)
  }
}
