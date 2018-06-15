import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .online{
      color: white;
    }
    .standard{
      font-size: 40px;
    }
  `]
})
export class AppComponent {
  title = 'app';

  allowNewServer: boolean = false;
  serverCreateionStatus: string = 'No server was created';
  serverName: string;
  serverCreated: boolean = false;

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





//serv

export class ServerComponent {

  serverId: number = 10;

}