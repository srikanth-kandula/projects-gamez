import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/model.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
  //providers: [ModalService]
})
export class SharedModalComponent implements OnInit {
  @Input() modalId = '';

  constructor(public modelSrv: ModalService, public el: ElementRef) {  
  }

  ngOnInit(): void {
    //document.body.appendChild(this.el.nativeElement);
  }

  closeModal(id: string): void {
    this.modelSrv.toggleVisibility(id);
  }

}
