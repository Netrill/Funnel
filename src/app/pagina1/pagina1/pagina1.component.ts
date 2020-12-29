import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})

export class Pagina1Component implements OnInit {


  hero = { name: '',email:'',cell:'' };

  heroForm: FormGroup;
   
  constructor() {
    
   }

  ngOnInit(): void {
     this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4) 
      ]),
      email: new FormControl(this.hero.email, [
        Validators.required, 
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],  
      )
    },  {  }); //  
  }

  get name() { return this.heroForm.get('name'); }

  get email() { return this.heroForm.get('email'); }

  images = ['/assets/a.jpeg','/assets/b.jpg','/assets/c.jpg'];

}
