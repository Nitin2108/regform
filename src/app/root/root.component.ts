import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

userForm;
  constructor(private formBuilder: FormBuilder, private http:HttpClient) {
   }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      alert('User form is valid!!');
      this.http.post('/api/users', this.userForm.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      })
    } else {
      alert('User form is not valid!!');
    }
  }

}
