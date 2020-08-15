import { Component, OnInit } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams } from 'ag-grid-community';


@Component({
  selector: 'app-no-rows-overlay',
  templateUrl: './no-rows-overlay.component.html',
  styleUrls: ['./no-rows-overlay.component.css']
})

export class NoRowsOverlayComponent implements OnInit, INoRowsOverlayAngularComp  {

  agInit(params: INoRowsOverlayParams): void {
  }

  ngOnInit(): void {
  }

}
