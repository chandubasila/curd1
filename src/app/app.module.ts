import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { CurdService } from './curd.service';
import { ChanduComponent } from './chandu/chandu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChanduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
