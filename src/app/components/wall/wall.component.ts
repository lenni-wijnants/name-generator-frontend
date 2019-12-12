import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Character} from '../../../model/Character';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  characters: Character[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(characters => this.characters = characters);
  }

}
