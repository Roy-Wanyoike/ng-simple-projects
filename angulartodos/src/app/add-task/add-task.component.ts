import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TasksService } from '../Services/tasks/tasks.service';
import { Todos } from '../interfaces/todos';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor( private fb: FormBuilder, private todosService:TasksService) {
        
  }
  addTodoForm!:FormGroup
  ngOnInit(): void {
    this.addTodoForm= this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
      image:[null, Validators.required],
      dueDate:[null, Validators.required]
    })
  }

  addTodos(){
    let todo :Todos= {...this.addTodoForm.value, id:Math.floor(Math.random() *10000)};
    this.todosService.addTodos(todo)
  }
}
