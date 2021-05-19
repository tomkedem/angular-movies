import { genreCreationDTO } from './../genre.model';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUpparcase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit(): void {
   
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    console.log(genreCreationDTO)
    this.router.navigate(['/genres']);
  }

  
}
