import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  gridData: any[] = [];
  
  constructor(private dataSevice:DataService){ }

  ngOnInit() {
    this.gridData = this.dataSevice.getDatas();
  }
}
