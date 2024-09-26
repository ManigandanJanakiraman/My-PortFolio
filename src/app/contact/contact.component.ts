import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input('theme') theme!: string
  private _snackBar = inject(MatSnackBar);

  private formBuilder = inject(FormBuilder)
  feedbackForm = this.formBuilder.group({
    name: ['', Validators.required],
    mail: ['', Validators.required, Validators.email],
    feedbackMessage: ''
  })


  sendEmail() {
    debugger
    const mailData = {
      name: this.feedbackForm.value.name,
      mail_ID: this.feedbackForm.value.mail,
      Message: this.feedbackForm.value.feedbackMessage
    }
    console.warn(mailData)
    if (this.feedbackForm.valid) {
      emailjs.send('service_s35qag3', 'template_mcpn5hf', mailData, '5PE-u9MQTWvErBPc7')
        .then((result) => {
          console.log(result.text);
          this.openSnackBar("Thanks to Reach me")
        }, (error) => {
          console.error(error.text);
          this.openSnackBar("OOPS! try after some time")
          this.feedbackForm.reset()
        });
    }
    else {
      this.feedbackForm.markAllAsTouched();
    }

  }


  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      horizontalPosition: 'center', verticalPosition: 'top',
    });
  }
}
