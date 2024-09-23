import { Component, inject, Input } from '@angular/core';
import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input('theme') theme!: string
  // emailForm: FormGroup
  private _snackBar = inject(MatSnackBar);
  // constructor(private fb: FormBuilder) {
  //   this.emailForm = this.fb.group({
  //     name: ['', Validators.required],
  //     mail: ['', [Validators.required, Validators.email]],
  //     inputMessage: ['', Validators.required],
  //   });
  // }

  sendEmail(e: Event) {
    debugger
    e.preventDefault();

    // if (this.emailForm.valid) {
    emailjs.sendForm('service_s35qag3', 'template_mcpn5hf', e.target as HTMLFormElement, '5PE-u9MQTWvErBPc7')
      .then((result) => {
        console.log(result.text);
        this.openSnackBar("Thanks to Reach me")
      }, (error) => {
        console.error(error.text);
        this.openSnackBar("OOPS! try after some time")
      });
    // }
    // else {
    //   this.emailForm.markAllAsTouched();
    // }

  }


  openSnackBar(message: string) {
    this._snackBar.open(message, 'X');
  }
}
