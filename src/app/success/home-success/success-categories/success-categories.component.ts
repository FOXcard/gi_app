import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Group } from '../../api.service';

@Component({
  selector: 'app-success-categories',
  templateUrl: './success-categories.component.html',
  styleUrls: ['./success-categories.component.css']
})
export class SuccessCategoriesComponent {
  @Input() group = new Group('','')
  @Output() displayGroup = new EventEmitter<string>();

  selectGroup(){
    this.displayGroup.emit(this.group.id.toString())
  }
}
