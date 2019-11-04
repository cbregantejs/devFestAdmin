import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Speaker } from '../../models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(
      private _firestore: AngularFirestore
  ) {

  }

  getSpeakers() {
    return this._firestore.collection('generatedSpeakers').snapshotChanges();
  }

  deleteSpeakers(speaker) {
    return this._firestore.collection('generatedSpeakers').doc(speaker.payload.doc.id).delete();
  }

}
