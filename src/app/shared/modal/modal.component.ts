import { Component, OnInit } from '@angular/core';
import { DialogueService } from '../dialogue.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

constructor() {
  const modal = document.getElementById('id01');
  // Get the modal

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  // if (event.target == modal) {
  //   modal.style.display = "none";
  // }}
}
ngOnInit(): void {
}

  }



