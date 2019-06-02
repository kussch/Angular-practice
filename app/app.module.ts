import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookAlertsComponent } from './book-alerts/book-alerts.component';
import { environment } from 'src/environments/environment';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookService } from './shared/book.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BookAlertsComponent,
    BooksComponent,
    BookComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
