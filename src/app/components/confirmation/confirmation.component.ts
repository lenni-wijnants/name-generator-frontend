import {AfterContentInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Character} from '../../../model/Character';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  character: Character;
  imagePath: string;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.apiService.find(window.history.state.email).subscribe(char => {
      this.character = char;
      this.initImage();
    });
  }

  goBack() {
    this.router.navigateByUrl('/form');
  }

  initImage() {
    this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.character.characterImg);
  }
}
