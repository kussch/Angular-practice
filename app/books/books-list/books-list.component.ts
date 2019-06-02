import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { Book } from 'src/app/shared/book.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  list: Book[];
  constructor(private service: BookService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getBooks().subscribe(actionArray =>{
this.list = actionArray.map(item => {
  return {
    id: item.payload.doc.id,
    ...item.payload.doc.data() 
  } as Book;
})
    });
  }

  onEdit(book: Book){
    this.service.bookData = Object.assign({}, book);
  }

  onDelete(id: string){
    if (confirm('Delete this product?')){
      this.firestore.doc('books/'+id).delete();
      this.toastr.warning('Deleted succesfully!');
    }
  }

}
