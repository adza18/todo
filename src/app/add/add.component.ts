import { Component, OnInit, ViewChild } from '@angular/core';

export interface list 
{
  id:number,
  name:string
  isCompleted:boolean
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor() { }

  @ViewChild('name') inputName:any;
  type:any;
  toDoList:list[]= []
  no : number = 0;
  displayList:list[] = []
  isComplete:boolean=false
  click:boolean = false;
  strikeThrough: boolean = false;
  inputVal:any;
  addToDo(name:any)
  {
    // this.inputName.nativeElement.value = '';
    this.inputVal = ''
    console.log(name)
    this.toDoList.push({name:name,id:this.no++,isCompleted:(this.isComplete)})
    console.log(this.toDoList)
  }

  onSelected(option:any) : any
  {
    this.type= option.target.value;   

    if(this.type=='Completed')
    {
        this.displayList = this.toDoList.filter((x) => {
        return x.isCompleted == true;
        })
    }
    else if(this.type=="Uncompleted")
    { 
        this.displayList = this.toDoList.filter((x) => {
        return x.isCompleted == false;
    })
    }
    else{
       return this.displayList=this.toDoList;
    }

  }

  done(i:list)
  {
      i.isCompleted = true;
      return this.displayList;
  }
 
  delete(i:any)
  {
    this.toDoList = this.toDoList.filter((x) => x.id != i.id);
    this.displayList = this.displayList.filter((x)=>x.id!=i.id)

      console.log(this.displayList);

  }

  ngOnInit(): void {
  }



}
