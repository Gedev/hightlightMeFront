import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {PlayerData} from "../models/playerData";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  title = 'Highlight Me';
  text: string | undefined;
  protected readonly onsubmit = onsubmit;
  response: any;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    console.log("Submit!")
    this.http.post(environment.apiUrl + "/api/", form.value).subscribe(data=> {
      this.response = data;
    });
  }

  protected readonly Object = Object;
}
