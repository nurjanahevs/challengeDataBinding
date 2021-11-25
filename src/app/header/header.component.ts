import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  serverStatus = 'Write here!';
  getName(): any {
    return this.serverStatus;
  }
  allowNewServer = false;
  serverCreationStatus = 'No name of visitor was created!';
  serverName = '';

  onUpdateServerName(event: any): any {
    console.log(event); 
    this.serverName = (<HTMLInputElement>event.target).value;
   
  }
  onCreateServer(): any {
    this.serverCreationStatus = `Name visitor was created! Name is ${this.serverName}` ;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
