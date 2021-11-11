import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public myTableHeader: any[] = [
    {
      label: 'First Name',
      value: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name',
      value: 'lastName',
      type: 'text',
    },
    {
      label: 'Email',
      value: 'emailId',
      type: 'email',
    },
    {
      label: 'Profile',
      value: 'profilePic',
      type: 'image',
    },
  ];

  public myTableBody: any[] = [
    {
      firstName: 'Syed',
      lastName: 'Mubarak',
      emailId: 'mubarak@yopmail.com',
      profilePic: '1.jpg',
    },
    {
      firstName: 'Rama',
      lastName: 'Krishnan',
      emailId: 'ramk@yopmail.com',
      profilePic: '2.jpg',
    },
    {
      firstName: 'Mahendran',
      lastName: '-',
      emailId: 'mahe@yopmail.com',
      profilePic: '3.jpg',
    },
  ];

  // 

  public myTableHeader1: any[] = [
    {
      label: 'First Name',
      value: 'firstName',
      type: 'text',
    },
    {
      label: 'Last Name',
      value: 'lastName',
      type: 'text',
    },
    {
      label: 'Email',
      value: 'emailId',
      type: 'email',
    },
    {
      label: 'Profile',
      value: 'profilePic',
      type: 'image',
    },
  ];

  public myTableBody1: any[] = [
    {
      firstName: 'Mohammed',
      lastName: 'Abzal',
      emailId: 'mdabzal@yopmail.com',
      profilePic: '1.jpg',
    },
    {
      firstName: 'Javid',
      lastName: 'Chintu',
      emailId: 'chintuj@yopmail.com',
      profilePic: '2.jpg',
    },
    {
      firstName: 'Riyas',
      lastName: 'Ranger',
      emailId: 'rranger@yopmail.com',
      profilePic: '3.jpg',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
