import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './change-color.directive';
import { UserAgePipe } from './pipes/user-age.pipe';
import { StatusColorDirective } from './status-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    UserAgePipe,
    StatusColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
