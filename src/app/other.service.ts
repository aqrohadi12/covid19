import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  loadingPage() {  		
		swal.fire({
			title: 'Loading...',
			text: 'Please Wait...',
			showConfirmButton: false,
			allowOutsideClick: false,
			onOpen: () => {
			  swal.showLoading()
			}
		})
	}

  /* alert */
  alertErrorService(message) {
		swal.fire({
			title: 'Error!',
			text: message,
			icon: 'error',
			showConfirmButton: true
		})  		
	}

}
