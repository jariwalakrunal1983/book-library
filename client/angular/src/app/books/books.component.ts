import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { BooksService } from '../shared/books.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  appMessage: string = '';
  searchValue: string = '';

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    if(!environment.production){
      this.books = this.booksService.getBooks();
    } else {
      this.booksService.getBooksViaAPI().subscribe( data => {
        this.books = data;
      });
    }
  }

  showMessage(message:string){
    const $app = this;
    $app.appMessage = message;
    setTimeout( function(){ $app.appMessage = '' },2000);
  }

  filterByValue = (obj) =>{
    if (this.searchValue.trim() === '') return true;
    return Object.keys(obj).some(k => obj[k].toString().toLowerCase().includes(this.searchValue.toLowerCase()));
  }

}
