import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../interfaces/todos';
import { TasksService } from '../Services/tasks/tasks.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit{
   todos:Todos[]=[]

   constructor(private todoService:TasksService , private router:Router, 
    private route:ActivatedRoute){}

    ngOnInit(): void {
      this.todos= this.todoService.getTodos()
       console.log('====================================');
       console.log(this.todos);
       console.log('====================================');  
    }
    LoadAdd(){
      this.router.navigate(['2'], {relativeTo:this.route})
    }
  
    showProducts(){
      this.router.navigate([''],{relativeTo:this.route})
        // queryParams:{category:c}})
    }
}
