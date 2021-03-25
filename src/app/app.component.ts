import { Component,OnInit } from '@angular/core';
import { FormArray,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-test';
  sample!:FormGroup;

constructor(public fb:FormBuilder)
{
  this.sample=this.fb.group({
    add:this.fb.array([
    ])
  });

}

ngOnInit():any{
  
}

sample1():FormArray
{
  return this.sample.get('add') as FormArray
}


fields():FormGroup{
  return this.fb.group({
    name:[''],
    place:[''],
    email:['']
  });
}


add()
{
  this.sample1().push(this.fields());
}

delete(index:number)
{
  this.sample1().removeAt(index);

}

display=():any =>{
  console.log(this.sample.value);
}





}
