import {Component, OnInit} from '@angular/core';
import {Candidate} from '../../../model/Candidate';
import {WebcamImage} from 'ngx-webcam';
import {Observable, Subject} from 'rxjs';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Character} from '../../../model/Character';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  candidate: Candidate;
  webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.candidate = new Candidate('', '', '', '', '', '');
  }

  snapshot() {
    this.trigger.next();
  }

  handleImage(image: WebcamImage) {
    this.webcamImage = image;
  }

  getTriggerObservable() {
    return this.trigger.asObservable();
  }

  submitInfo(event, myForm) {
    event.preventDefault();
    this.candidate.firstName = myForm.form.value.firstname;
    this.candidate.lastName = myForm.form.value.lastname;
    this.candidate.email = myForm.form.value.email;
    this.candidate.phoneNumber = myForm.form.value.phone;
    this.candidate.skills = myForm.form.value.skills;

    this.snapshot();

    this.candidate.image = this.webcamImage.imageAsBase64;

    this.apiService.create(this.candidate).subscribe(createdCharacter => {
      const navExtras: NavigationExtras = { state: { email: this.candidate.email, char: createdCharacter }};
      this.router.navigateByUrl('/confirmation', navExtras);
    });

  }

}
