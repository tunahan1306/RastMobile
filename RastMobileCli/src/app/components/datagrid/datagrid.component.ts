import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent{
  @Input() gridData: Data[] = [];
}
