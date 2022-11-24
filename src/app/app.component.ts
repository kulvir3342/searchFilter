import { Component } from '@angular/core';

interface Student{
  id: number;
  name: string;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-search-filter';

  searchText: any;

  students: Student[] = [
    {
      id: 1,
      name: "kulvir",
      country: "India"
    },
    {
      id: 2,
      name: "harman",
      country: "India"
    },
    {
      id: 3,
      name: "burhan",
      country: "India"
    },
    {
      id: 4,
      name: "shamim",
      country: "India"
    },
  ]
}
