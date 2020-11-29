import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent {
  @Input() public templateName: string;
  @Input() public fontSize: string;
  @Output() public nameChangeEvent: EventEmitter<string> = new EventEmitter();
  @Output() public fontSizeChangeEvent: EventEmitter<string> = new EventEmitter();

  public changeName(event) {
    this.nameChangeEvent.emit(event.target.value);
  }

  public changeFontSize(event) {
    this.fontSizeChangeEvent.emit(event.value);
  }
}
