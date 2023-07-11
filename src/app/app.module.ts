import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsDemoComponent } from './demo/tabs-demo/tabs-demo.component';
import { RascunhosListComponent } from './pages/rascunhos/rascunhos-list/rascunhos-list.component';
import { RascunhosAddComponent } from './pages/rascunhos/rascunhos-add/rascunhos-add.component';
import { RascunhosEditComponent } from './pages/rascunhos/rascunhos-edit/rascunhos-edit.component';
import { RascunhosDeleteComponent } from './pages/rascunhos/rascunhos-delete/rascunhos-delete.component';
import { RascunhosDetailComponent } from './pages/rascunhos/rascunhos-detail/rascunhos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    TabsDemoComponent,
    RascunhosListComponent,
    RascunhosAddComponent,
    RascunhosEditComponent,
    RascunhosDeleteComponent,
    RascunhosDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
