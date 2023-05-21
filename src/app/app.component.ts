import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wl_report_code: string | undefined;
  protected readonly onsubmit = onsubmit;

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('http://localhost:8000/api/', { wl_report_code: this.wl_report_code }).subscribe(response => {
      console.log(response);
    });
  }
}
