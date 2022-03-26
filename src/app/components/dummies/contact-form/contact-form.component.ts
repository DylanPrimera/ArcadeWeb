import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public formGroup: FormGroup;
  @Output() emitForm = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    })
  }

  public submitForm(): void {
    const FORM: any = {
      subject: this.formGroup.get('subject').value,
      email: this.formGroup.get('email').value,
      phone: this.formGroup.get('phone').value,
      message: this.formGroup.get('message').value,
      terms: this.formGroup.get('terms').value
    }

    this.emitForm.emit(FORM);
    this.formGroup.reset();
  }

}
