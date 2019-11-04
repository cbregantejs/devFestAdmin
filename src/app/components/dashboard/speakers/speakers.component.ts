import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../../../services/speaker/speaker.service';
import { Observable } from 'rxjs';
import { Speaker } from 'src/app/models/speaker.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-users',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  // speakers = [];
  speakers;

  constructor(
      private _speakerService: SpeakerService
  ) {

  }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers = () =>
      this._speakerService
      .getSpeakers()
      // .subscribe(res => (this.speakers = res))
      .subscribe((res) => {
          console.log(res);
          this.speakers = res;
      })

  deleteSpeaker (speaker) {
    Swal.fire({
      title: '¿Deseas eliminar este speaker?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR'
    }).then((result) => {
      if (result.value) {
        this._speakerService.deleteSpeakers(speaker)
          .then(res => {
            Swal.fire(
              'SPEAKER ELIMINADO',
              '',
              'success'
            );
          }, err => {
              console.log(err);
          });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your imaginary file is safe :)',
        //   'error'
        // )
      }
    });
  }

}
