import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // dynamically reading values from url
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // this is async so when component initialized, it is just subscribed and when param changes it is triggered
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  // the subscription is not bound to component rather it still leaves after component is destroyed
  // and angular destroys on it's own but we can add this to clean it
  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
