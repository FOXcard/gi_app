import { Component, OnInit } from '@angular/core';
import { ApiService, Group, Success } from '../api.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-success',
  templateUrl: './home-success.component.html',
  styleUrls: ['./home-success.component.css']
})
export class HomeSuccessComponent implements OnInit{

  corsHeaders : HttpHeaders;
  group : Group[] = [];
  success : Success[] = [];
  SuccessToDiplay: Success[] = [];
 constructor(private apiService : ApiService){
  this.corsHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
 }
  ngOnInit(): void {
    this.apiService.getGroupFromServer().subscribe( (data: any) => {
      var groupData : Group[]  = data.data;
      this.group = groupData
      for (var i = 0; i < groupData.length; i++) {
        //console.log(groupData[i])
      };
    });
    this.apiService.getAllSuccess();
  }

  displayGroup(event : string){
    this.SuccessToDiplay = this.apiService.getListSuccessFromGlobalGet(event);
    this.success = this.SuccessToDiplay;
    console.log(this.SuccessToDiplay);
  }

  getInfo(){
    this.success = this.apiService.dataSuccess;
    //this.apiService.getAllSuccess();
  }

  isEmpty(){
    return this.success.length <1
  }
}
