import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css'],
})
export class SimpleFormComponent implements OnInit {
  signUpForm = this.fb.group({
    email: ['', Validators.email],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  ngOnInit(): void {}
}
