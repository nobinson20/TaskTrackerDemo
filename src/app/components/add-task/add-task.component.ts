import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text!: string;
  day!: string;
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){
    if (!this.text){
      alert("Please type in task text");
      return;
    }

    const task = {
     text: this.text,
     day: this.day,
     reminder: this.reminder
    }

    // @todo: emit event
    this.onAddTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
