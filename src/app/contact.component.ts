import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from './message.service';
import {IMessage} from './message.interface'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  template: `
   <article class="contact" data-page="contact">

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>



<section class="contact-form">

  <h3 class="h3 form-title">Contact Form</h3>

  <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form" >

    <div class="input-wrapper">
      <input type="text"  formControlName="GuestName" class="form-input" placeholder="Full name" >

      <input type="email"  class="form-input"  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" formControlName="Email" placeholder="Email address" >
    </div>
    <input type="text"  class="form-input" formControlName="MessageTitle" placeholder="Subject" ><br>
    <textarea  class="form-input" formControlName="Message" placeholder="Your Message" ></textarea>

    <button class="form-btn" type="submit" [disabled]="!form.valid">
    <div class="spinner-border text-warning" role="status" *ngIf="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
      <ion-icon name="paper-plane"  *ngIf="!loading"></ion-icon>
      <span  *ngIf="!loading">Send Message</span>
    </button>

  </form>

</section>

</article>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {
loading:boolean = false;
message!:IMessage;
form = inject(FormBuilder).nonNullable.group({
    MessageTitle:['',Validators.required],
    Email:['',Validators.required],
    Message:['',Validators.required],
    GuestName:['',Validators.required]
})


  constructor(private messageService: MessageService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
 onSubmit(){
  this.loading = true
    this.message = {...this.form.value} as IMessage;
    this.messageService.saveMessage(this.message).subscribe((response)=>{
      if(response === "Success"){
        this.toaster.success('Message sent successfuly');
        
        this.form.reset()
        this.loading = false
      }
    })

 }
}
