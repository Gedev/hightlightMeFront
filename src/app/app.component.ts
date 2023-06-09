import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string | undefined;
  protected readonly onsubmit = onsubmit;

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('http://localhost:8000/api/', { text: this.text }).subscribe(response => {
      console.log(response);
    });
  }
}
