import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Character} from '../../../model/Character';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  characters: SanitizedCharacter[] = [];

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(characters => {
      characters.forEach( char => {
        this.characters.push(new SanitizedCharacter(
          char,
          this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + char.characterImg)

        ));
        this.characters.reverse();
      });
    });
  }

}

export class SanitizedCharacter {
  char: Character;
  sanitizedImage: SafeResourceUrl;

  constructor(char: Character, sanitizedImage: SafeResourceUrl) {
    this.char = char;
    this.sanitizedImage = sanitizedImage;
  }
}
