import { Injectable } from '@angular/core';
//importing http client to make requests
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import observable related code
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable({
  providedIn: 'root'
})

export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'NjNmN2U4ZmJkZDE5ZDczZmRlNTM2YTg4NTNjNGNhN2IzYjhiNmQzNmUyODA2OGEzMmE4ODNlNDBjYTQ2ODQ2ZmJjMjY3MzNlYmZlNDZlMTJlZjAwYzdlNDAxMDg2OTliZGU4YjY5NGRiMDcwMzJlYWZiZjFmYjg3NGMwYmYxNmFhYQ==';


  constructor(private _http: HttpClient) {
    console.log("blog http service was called");
  }

  //exception handler

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error http calls")
    console.log(err.message)
    return Observable.throw(err.message)
  }

  //method to get all blogs;
  public getAllBlogs(): any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=' + this.authToken);
    console.log(myResponse);
    return myResponse;
  }


  //method to get particular blog
  public getSingleBlogInformation(currentBlogId): any {

    let myResponse = this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + '?authToken=' + this.authToken)
    return myResponse;

  }  //end get blog info function


  public createBlog(blogData): any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authToken, blogData)
    return myResponse

  }   //end create blog


  public deleteBlog(blogId): any {

    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authToken, data)
    return myResponse

  }   //end delete blog function


  public editBlog(blogId, blogData): any {

    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authToken, blogData)
    return myResponse

  } //end edit blog 
}

