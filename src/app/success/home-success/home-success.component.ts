import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-success',
  templateUrl: './home-success.component.html',
  styleUrls: ['./home-success.component.css']
})
export class HomeSuccessComponent {

  corsHeaders : HttpHeaders;
 constructor(private apiService : ApiService){
  this.corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
 }

  getInfo(){
    this.apiService.getInformation().subscribe(data =>{
      console.log(data)
    })
  }
}
