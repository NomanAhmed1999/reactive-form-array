import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {}
  formChild: any = [];
  form: any = this.fb.group({
    lessons: this.fb.array([])
  })

  get lessons(){
      return this.form.controls["lessons"] as FormArray;
  }


  addNew(){
    const lessonForm: any = this.fb.group({
      title: ['', Validators.required],
      level: ['a', Validators.required],
      color_id: [Number(1), Validators.required]
    });
    this.lessons.push(lessonForm);
    this.formChild = this.lessons.controls;
  }

  deleteItem(i: number){
    this.lessons.removeAt(i)
  }

  save(){
    console.log("form", this.form.value);
    let arr = this.form.value.lessons;
    let colorArr: any = [];
    arr.map((e: any, i: number) => {
      colorArr.push(Number(e.color_id));
    })
    console.log("colorArr", colorArr);

  }


}
