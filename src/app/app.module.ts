import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';//for forms


import {RouterModule,Routes} from '@angular/router' //for routing



//for animation toastr
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {ToastModule, Toast} from 'ng2-toastr/ng2-toastr';


//Auto generated import while ng new component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

import { ToastrService } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      
    ), // ToastrModule added

    RouterModule.forRoot([
     {path:'home',component:HomeComponent},
     {path:'',redirectTo:'home',pathMatch:'full'},
     {path:'create',component:BlogCreateComponent},
     {path:'edit/:blogId',component:BlogEditComponent},
     {path:'blog/:blogId',component:BlogViewComponent},
     {path:'about',component:AboutComponent},
     {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
