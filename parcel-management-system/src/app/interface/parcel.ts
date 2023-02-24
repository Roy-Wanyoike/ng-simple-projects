import { Observable } from "rxjs"

export interface AddParcel{
    name:string
    destination:string
    email:string
}

export interface Parcel{
    name:string
    destination:string
    email:string
}

export interface ParcelList{
name: any
email: any
    parcel:Parcel
}

export interface updateParcel{
    name:string
    destination:string
    email:string
}



export interface CanDeactivateComponent{
    canDeactive:()=> Promise<boolean> | Observable<boolean> | boolean 
}