import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './servers.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  // here even though relative path is used, 
  // router does not know which component it is currently on so it redirects to servers
  // to notify the relative path to it, use ActivatedRoute
  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
