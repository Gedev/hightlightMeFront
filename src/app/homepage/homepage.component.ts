import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Highlight Me';
  text: string | undefined;
  protected readonly onsubmit = onsubmit;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    console.log("Submit!")
    this.http.post('http://localhost:8000/api/', { text: this.text }).subscribe(response => {
      console.log(response);
    });
  }
}
