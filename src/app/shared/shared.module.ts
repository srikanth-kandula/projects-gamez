import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModalComponent } from './modal/modal.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { TabComponent } from './tab/tab.component';
//import { ModalService } from '../services/model.service';



@NgModule({
  declarations: [
    SharedModalComponent,
    TabContainerComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedModalComponent,
    TabContainerComponent,
    TabComponent
  ]
  // providers: [
  //   ModalService
  // ]
})
export class SharedModule { }
