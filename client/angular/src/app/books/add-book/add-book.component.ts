import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @Output() saveDataMessage: EventEmitter<string> = new EventEmitter<string>();

  name: string = "";
  description: string = "";
  count: number = null;
  author: string = "";
  isDisabled: boolean = true;
  
  constructor(private bookService: BooksService) { }

  ngOnInit() { }

  resetAddBookForm(){
    this.name = "";
    this.description = "";
    this.count = null;
    this.author = "";
    this.isDisabled = true;
    this.nameInputRef.nativeElement.focus();
  }

  onAddBook(){
    this.bookService.addBook(this.name,this.description,this.count,this.author);
    this.resetAddBookForm();
  }

  onSaveBook(){
    if(!environment.production){
      this.saveDataMessage.emit('You are running development environment so you can not save data!');
    } else {
      this.bookService.saveBooks().subscribe(data => {
        this.saveDataMessage.emit(data.message);
      });
    }
  }

  onChange(){
    const app = this;
    setTimeout( function(){
      if(
        app.name.trim() !== "" &&
        app.description.trim() !== "" &&
        app.count > 0 &&
        app.author.trim() !== ""
      ) {
        app.isDisabled = false;
      } else {
        app.isDisabled = true;
      }
    },100);
  }

}