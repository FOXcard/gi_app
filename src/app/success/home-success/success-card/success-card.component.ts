import { Component, Input } from '@angular/core';
import { Goal, Success } from '../../api.service';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-success-card',
  templateUrl: './success-card.component.html',
  styleUrls: ['./success-card.component.css']
})


export class SuccessCardComponent {
  @Input() success = new Success('test','','','',0,0,'',[],new Goal(''));


  getInfo(){
    console.log(this.success)
  }

  toggleSelection(checkbox : MatCheckboxChange){
    this.success.check = !this.success.check ;
    console.log("A")
  }

  change(){
    this.success.check = !this.success.check ;
    console.log("B")
  }

  test(){
    this.success.tags.forEach((tag) => {
      console.log(tag)
      console.log(tag.tags_id.name)
    })
  }


}
