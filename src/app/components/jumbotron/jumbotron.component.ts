import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;

  constructor() { }

  ngOnInit() {
    this.jbtHeading = 'Hello World';
    this.jbtText = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';
  }

}
