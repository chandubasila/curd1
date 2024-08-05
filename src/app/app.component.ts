import { Component, OnInit, ViewChild } from '@angular/core';
import { CurdService } from './curd.service';
import { NgForm } from '@angular/forms';
import { Userdata } from './Model/userdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'curd1';

  @ViewChild("frm")
  frm!: NgForm;
  gdata: any;
  formdata = false;
  id: any

  userdata: Userdata = new Userdata;

  constructor(private cs: CurdService) {
    this.get();
  }



  create(data: any) {
    this.cs.createdata(data).subscribe((data) => {
      console.log(data);
      this.get();
      this.frm.reset();
    })

  }

  get() {
    this.cs.getdata().subscribe((data) => {
      this.gdata = data
      console.log(data);
    })
  }

  ngOnInit() {




  }




  delete(id: any) {
    this.cs.deletedata(id).subscribe((_res) => {
      this.get();
    })
  }

  openfrm(data: any) {
    this.formdata = true;
    if (data) {
      this.userdata.name = data.name;
      this.userdata.age = data.age;
      this.userdata.education = data.education;
      this.id = data.id;
    }
  }


  savedata() {
    this.formdata = false;
    this.cs.editdata(this.userdata, this.id).subscribe((res) => {
      console.log(res)
      this.get();
    })
  }



  closeForm() {
    this.formdata = false;
    this.clearfrm();
  }



  clearfrm() {
    this.userdata.name = "";
    this.userdata.age = "";
    this.userdata.education = "";
  }


}
