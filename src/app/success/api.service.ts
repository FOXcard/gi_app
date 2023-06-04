import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 
  }

  getInformationFromServer(){
      return this.http.get<any>("https://gifr-success.alola.kazokukoneko.com/items/success?fields[]=*&fields[]=tags.name&fields[]=steps.*&fields[]=steps.goals.*&fields[]=goals.*",{
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      })
  }

  getGroupFromServer(){
    return this.http.get<any>("https://gifr-success.alola.kazokukoneko.com/items/groups?fields[]=*",{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
  }

  getSuccessData(){
    this.getInformationFromServer().subscribe( (data: any) => {
      var successData : Success[]  = data.data;
      for (var i = 0; i < successData.length; i++) {
        console.log(successData[i])
      };
    });
  }
}

export class Success {
   id: String;
   group_id : String;
   name : String;
   description : String;
   primogems : Number;
   version : Number;
   guide :  String;
   tags : Tags[]
   goal : Goal;

  constructor(id : String, group_id : String, name : String, description : String, primogems : Number, version : Number,
        guide : String, tags : Tags[], goal : Goal){
    this.id = id;
    this.group_id = group_id;
    this.name = name;
    this.description = description;
    this.primogems = primogems;
    this.version = version;
    this.guide = guide;
    this.tags = tags
    this.goal = goal
  }


}

export class Group {
   id: String;
   name: String;

  constructor(id : String, name : String){
    this.id = id;
    this.name = name;
  }
}

export class Goal {
  private id: String;

  constructor(id : String){
    this.id = id;
  }
}

export class Tags {
  private id: String;
  private name : String;

  constructor(id : String, name : String){
    this.id = id;
    this.name = name;
  }
}
