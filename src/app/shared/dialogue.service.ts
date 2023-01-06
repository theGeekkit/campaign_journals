import { Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';


@Injectable({
  providedIn: 'root'
})
export class DialogueService {
  showModal = false;


  constructor(public dialogueService: DialogueService) { }

  LoginService(): void {
    const dialogRef = this.dialogueService.open(ModalComponent, {
      width: '250px',
      data: { },
    });
  }

}
