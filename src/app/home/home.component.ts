import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { log } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs =[];//added
  

  constructor(public blogHttpService:BlogHttpService) {
    console.log("Home component constructor called")
   }

  ngOnInit() {
    console.log("Home component OnInit called")
    //this.allBlogs = this.blogHttpService.getAllBlogs();
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs=data["data"];
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
          console.log(this.allBlogs);
  //  console.log("Home component OnInit called")
  //  this.allBlogs = this.blogService.getAllBlogs();
   // console.log(this.allBlogs);
  }
  ngOnDestroy() {
    console.log("Home component OnDestroy called")
  }
}
