import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona: string = "Alice Alisson";

  credits: string[] = [
    "Alice Alisson",
    "Bob Bobson",
    "Carla Carlson"
  ];


}
