import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root' //makes service injectable at root or global level
})
export class ModalService implements CanActivate {
  private visible = false;

  private modals: IModal[] = [];

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('route: ' + route);
    console.log(`state: ${state}`)
    return true;
  } 

  register(id: string): void {
    this.modals.push({
      id: id,
      visible: false
    })
  }

  unregister(id: string): void {
    this.modals = this.modals.filter(
      (element) => { element.id !== id }
    );
  }

  isModalVisible(id: string): boolean {
    return !!this.modals.find(element => element.id === id)?.visible;
  }

  toggleVisibility(id: string): void {
    const result = this.modals.find(element => element.id === id);
    if (result) {
      result.visible = !result.visible;
    }

    console.log(`result - ${result?.id}, visible- ${result?.visible}`);
  }
}
