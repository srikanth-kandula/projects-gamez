import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {
  @Output() private id = 'authentication';

  constructor(public modelSrv: ModalService) { }

  ngOnInit(): void {
    this.modelSrv.register(this.id);
  }

  getId(): string {
    return this.id;
  }

  ngOnDestroy(): void { //to avoid memory leaks, delete data that isn't required from the services
    this.modelSrv.unregister(this.id);
  }

}
