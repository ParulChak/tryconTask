import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms'
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tryconTest';
  name:any;
  ageGroup:any;
  age:any;
  hours:any;
  movies:any;

  constructor(private _service:DataServiceService){

  }
  //surveyForm:FormGroup | undefined;

  ngOnInit(){
    // this.surveyForm=new FormGroup({
    //   'name':new FormControl(null,),
    //   'ageGroup':new FormControl(null,),
    //   'age': new FormControl(null,),
    //   'hours':new FormControl(null,),
    //   'movies':new FormControl(null,)
    // })

  }
  submit(){
    let moviList= this.movies.split(',')
    let data={name: this.name,
    age:this.age,
 ageGrp: this.ageGroup,
movies:moviList,
hours:this.hours}
console.log(data);
this._service.sendData(data).subscribe(res =>{console.log(res)});
  }

}
