import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from '../../api.service';
import { SelectControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-success-categories',
  templateUrl: './success-categories.component.html',
  styleUrls: ['./success-categories.component.css']
})
export class SuccessCategoriesComponent {
  @Input() group = new Group('','')
  @Output() displayGroup = new EventEmitter<string>();

  selectGroup(){
    console.log(this.group)
    this.displayGroup.emit(this.group.id.toString())
    
  }
}
