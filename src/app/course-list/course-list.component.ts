import { Courses } from './courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Courses[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Introdução Typescript",
        imageUrl: "/assets/icons8-typescript-48.png",
        price: 49,
        code: "XXP-1909",
        duration: 45,
        rating: 3.8,
        releaseDate: "02 de novembro de 2022"
      },
      {
        id: 2,
        name: "Typescript intermediário",
        imageUrl: "/assets/icons8-typescript-48.png",
        price: 65,
        code: "XXP-2009",
        duration: 120,
        rating: 4.3,
        releaseDate: "15 de novembro de 2022"
      },
      {
        id: 3,
        name: "Typescript Avançado",
        imageUrl: "/assets/icons8-typescript-48.png",
        price: 99.99,
        code: "XXP-2109",
        duration: 160,
        rating: 4.2,
        releaseDate: "25 de novembro de 2022"
      }
    ]
  }

}
