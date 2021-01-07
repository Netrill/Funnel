import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})

export class Pagina1Component implements OnInit {
  images = ['/assets/a.jpg','/assets/b.jpg','/assets/c.jpg',
  '/assets/d.jpg','/assets/e.jpg','/assets/f.jpg','/assets/g.jpg',
  '/assets/h.jpg','/assets/i.jpg','/assets/l.jpg','/assets/m.jpg'
];

  hero = { name: '',email:'',cell:'' };

  heroForm: FormGroup;
   
  constructor(private http:HttpClient) {
    
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
      ),
      cell: new FormControl(this.hero.cell, [
        Validators.required, 
        Validators.pattern('[0-9 ]{10}')],  
      )
    },  {  }); //  
  }

  get name() { return this.heroForm.get('name'); }

  get email() { return this.heroForm.get('email'); }

  get cell() { return this.heroForm.get('cell'); }

  inviaEmail() {
      const email = this.email.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log(email);
      this.http.post('https://formspree.io/f/myyblzdk',
        { name: this.name.value,cell: this.cell.value,email:this.email.value, message: 'Nuovo contatto' },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
  }

}
