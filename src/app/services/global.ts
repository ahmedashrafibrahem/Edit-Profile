import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
  // http : HttpClient

  constructor(private http : HttpClient){

  }

  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    // return this.http.get("https://jsonplaceholder.ty")
  }

  getSinglePost(id : any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

//   all products ==> https://dummyjson.com/products
//  single product ==>  https://dummyjson.com/products/6

login(body:any):Observable<any>{
  return this.http.post('https://full.faedg.com/public/api/client/customer_login' , body )
}

  updateProfile(id: number, body: any): Observable<any> {
    return this.http.put(`https://full.faedg.com/public/api/client/profile/${id}`, body);
  }

  
}



// all products with search input
// single product ==> images , name , out/in stock , category , price , reviews(name , comment) , sku