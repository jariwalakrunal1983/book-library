import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BooksService } from '../../shared/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.sass']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  isEditMode: boolean = false;
  showMore: boolean = false;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  onToggleEditMode(){
    this.isEditMode = !this.isEditMode;
  }

  onToggleShowDetail(){
    this.showMore = !this.showMore;
  }

  onRemoveBook(){
    this.booksService.removeBook(this.book.id);
  }

}
