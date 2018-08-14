import { Component, OnInit, OnDestroy } from '@angular/core';
//import route related code
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit,OnDestroy {

  public currentBlog;

 
  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService,
    private toastr:ToastrService,private location:Location) {
    console.log("blog-view constructor is called");
  }

  ngOnInit() {
    console.log("ngOnitcalled");
   
   
      //getting the blog id from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId)
    
    
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog=data["data"]
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    ) 
    //calling the function to get the blog with this blogId out of the overall array
    //this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);
  }


  public deleteThisBlog(): any{
    
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        console.log(data)
        this.toastr.success('Blog deleted Successfully ','Success')
        setTimeout(() =>{
          this.router.navigate(['/home']);
        },1000)
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
        this.toastr.error('some error occured','Error')
      }
      
    )
    
  }  // end delete blog
  

  public goBackToPreviousPage(): any{
    this.location.back();
  }

  ngOnDestroy() {
    console.log("blog-view destroy called")
  
  }
  

}
