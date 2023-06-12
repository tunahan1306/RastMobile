import { Injectable } from '@angular/core';
import { Data } from '../models/Data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  gridData: Data[] = [
    {id:1 , name:"instagram" , link:"instagram.com/mobilerast/" , description:"We'll help you to finish your development project successfully."},
    {id:1 , name:"linkedin" , link:"tr.linkedin.com/company/rastmobile" , description:"Hire vetted developers from Rast Mobile to scale up your tech projects."},
    {id:1 , name:"behance" , link:"behance.net/rastmobile" , description:"Software Development Agency Rast Mobile Information Technology Ltd."},
    {id:1 , name:"twitter " , link:"twitter.com/rastmobile" , description:"Software Development Agency Rast Mobile Information Technology Ltd."},
   
  ];

  getDatas():Data[]{
    return this.gridData;
  }
}
