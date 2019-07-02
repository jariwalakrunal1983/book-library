import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Book } from './book.model';

const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
const options = new RequestOptions({ headers: headers });

@Injectable()
export class BooksService{
    
    private books: Book[] = [];

    constructor(private http: Http) {}

    getBooks(){
        this.books.push(
            new Book(
                1,
                'Learning React: Functional Web Development with React and Redux', 
                'If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, youíll learn how to work with functional programming and the latest ECMAScript features. Developed by Facebook and used by companies including Netflix, Walmart and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, youíll fully understand how useful React can be in your organization.',
                5,
                'Alex Banks & Eve Porcello'
            ),
            new Book(
                2, 
                'React.js Book: Learning React JavaScript Library From Scratch', 
                'My fourth web development book is simply called React.js Book. It will walk you step by step through the process of setting up a development environment and learning Reactive programming from start to finish. React is a library unlike any other I have worked with. Unlike jQuery where you had to learn a number of methods that do very specific things, it is largely inspired by a programming methodology for creating fast web applications.',
                2,
                'Greg Sidelnikov'
            )
        )
        return this.books;
    }

    getBooksViaAPI(){
        return this.http.get('api/data').pipe(map((res: any) => {
            this.books = <Book[]>res.json();
            return this.books;
        }));
    }

    saveBooks(){
        return this.http.post('api/save',this.books,options).pipe(map((res: any) => {
            return res.json();
        }));
    }

    addBook(name: string, description: string, count: number, author: string){
        this.books.push(new Book(this.books.length+1, name,description,count,author));
    }

    removeBook(id:number){
        for (let index = 0; index < this.books.length; index++) {
            if(this.books[index].id === id){
                this.books.splice(index,1);
                break;
            }
        }
    }

}