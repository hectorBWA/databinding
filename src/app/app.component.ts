import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  allowNewServer: boolean = false;
  serverCreateionStatus: string = '';

  constructor(){

  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreateionStatus = "hvhj";
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
