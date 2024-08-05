import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Userdata } from './Model/userdata';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private http: HttpClient) { }


  createdata(data: Userdata) {

    return this.http.post<Userdata>("http://localhost:3000/posts", data)
  }

  getdata() {

    return this.http.get("http://localhost:3000/posts")
  }

  deletedata(id: any) {

    return this.http.delete("http://localhost:3000/posts" + "/" + id)
  }

  

  editdata(data:Userdata,id:any){

    return this.http.put<Userdata>("http://localhost:3000/posts/"+id,data)
  }
 


}
