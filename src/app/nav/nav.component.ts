import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/model.service';
import { AuthModalComponent } from '../user/auth-modal/auth-modal.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modelSrv: ModalService) { }

  ngOnInit(): void {
  }

  showLoginForm(evnt: Event): void {
    evnt.preventDefault();
    //let authComponent = new AuthModalComponent(this.modelSrv);

    this.modelSrv.toggleVisibility('authentication');
  }

}
