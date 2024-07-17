import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{

  ngOnInit(): void {
      let savedMembers = localStorage.getItem("allMemberStore");
      this.allMember = savedMembers ? JSON.parse(savedMembers): [];
  }

  memberName : string = "";
  memberPhone: number = 0;
  memberEmail: string = "";

  allMember : Member[] = [];

  createMember(){
    let member : Member = {
      id: this.getRandomId(),
      name: this.memberName,
      phone: this.memberPhone,
      email: this.memberEmail
    }
    this.allMember.push(member);
    this.memberName = "";
    this.memberPhone = 0;
    this.memberEmail = "";

    console.log(this.allMember);
    localStorage.setItem("allMemberStore", JSON.stringify(this.allMember));

  }

  deleteMember(index: number){
    this.allMember.splice(index,1);
    localStorage.setItem("allMemberStore", JSON.stringify(this.allMember));
  }

  editMember(index: number){
    this.memberName = this.allMember[index].name;
    this.memberPhone = this.allMember[index].phone;
    this.memberEmail = this.allMember[index].email;
    this.deleteMember(index);
  }

  getRandomId(){
    let result = "";
    const characterSet = "abcdefghijklmnopqrstuvwxyz";

    for(let i=0; i<5; i++){
      result = result + characterSet.charAt(Math.floor(Math.random() + characterSet.length));
    }
    return result;
  }

}


interface Member{
  id: string;
  name: string;
  phone: number;
  email: string;

}