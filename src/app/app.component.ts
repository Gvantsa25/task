import { Component, OnInit} from '@angular/core';
import { DataService } from './data.service';

export enum Status {
  Active = 'Active',
  Deleted = 'Deleted',
  Inactive = 'Inactive',
}

export interface User {
  firstName: string,
  lastName: string,
  about: string,
  birthDate: string,
  status: Status,
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService],
})
export class AppComponent implements OnInit{
  allComments!: User[];
  displayUsers:boolean = false;
  constructor(private dataService: DataService) { }
  displayFunc(){
    if(!this.displayUsers)
      this.displayUsers = !this.displayUsers;
  }
  hideFunc(){
    if (this.displayUsers)
      this.displayUsers = !this.displayUsers;
  }
  
  

  async load(): Promise<void> {
    this.allComments = await this.dataService.getUsers();
  };

  public async ngOnInit(): Promise<void> {
    await this.load()
  }



//task2


  amount: number | undefined;
  styleContainer: {
    'grid-template-columns': string,
  } | undefined;
  onSearchChange(){
    this.styleContainer = {
      'grid-template-columns': `repeat(${this.amount}, auto)`,
    }
  }
  

  
}
