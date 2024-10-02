import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrl: './lecture.component.css'
})
export class LectureComponent {


  /// day3

  // string interPolation 
  name: string = "mohammad"
  num: number = 10

  // Ptoperty binding
  urlImg: string = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"


  // event binding
  onchange() {
    this.name = "Hadeel"
  }


  // tow way binding
  // on html ==>


  // day4

  display = true;

  nameArray = ["ff", "gg", "hh"];

  color = "ed"


  //day5
  userObj = {

    name: "mohammad Doe",
    age: 30,
    color: "blue"
  }

  usersArray = [{
    name: "mohammad Doe",
    grade: 30,
    food: "blue"
  },
    {
      name: "Ahmad",
      grade: 25,
      food: "red"
    },
    {
      name: "Hadeel",
      grade: 28,
      food: "yellow"
    }]

}
