import { Observable } from "rxjs"

export interface AddTodos{
    name:string
    description:string
    image:string
    dueDate:string
}


export interface Todos{
    id:number
    name:string
    description:string
    image:string
    dueDate:string
}

export interface CanDeactivateComponent{
    canDeactive:()=> Promise<boolean> | Observable<boolean> | boolean 
}