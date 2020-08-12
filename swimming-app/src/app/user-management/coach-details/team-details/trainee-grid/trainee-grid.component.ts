import { Component, OnInit, SimpleChanges, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { GridOptions, ColDef } from 'ag-grid-community';
import { Trainee } from 'src/app/shared/models/trainee.model';
import { NoRowsOverlayComponent } from './no-rows-overlay/no-rows-overlay.component';

@Component({
  selector: 'trainee-grid',
  templateUrl: './trainee-grid.component.html',
  styleUrls: ['./trainee-grid.component.css']
})
export class TraineeGridComponent  implements OnInit, OnChanges {
  
  @Input() trainees:Trainee[] = [ ];
  @Output() traineesChange = new EventEmitter();
  
  gridOptions:GridOptions;
  overlayLoadingTemplate;
  overlayNoRowsTemplate;
  isLangugeLoaded:boolean = false;
  isRTL:boolean = false;
  
  columnDefs:ColDef[]= [
    {
      headerName:  'firstName',
      field: 'firstName',
    },
    {
      headerName: 'LastNameLabel',
      field: 'lastName',
    },
    {
      headerName: 'EmailLabel',
      field: 'email',
    },
  ];

  rowData = [];


  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateLabels();
    });
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      noRowsOverlayComponent: 'NoRowsOverlayComponent',
      defaultColDef: {
        // enableRowGroup: true,
        // enablePivot: true,
        // enableValue: true,
        // width: 100,
        sortable: true,
        resizable: true,
        filter: true,
        editable: true,
        flex: 1,
        // minWidth: 100
    },
      onGridReady: () => {
        this.translateLabels();
        this.gridOptions.columnApi.autoSizeAllColumns();
        this.gridOptions.api.sizeColumnsToFit();
      },
      onCellValueChanged:() => {
        this.gridOptions.columnApi.autoSizeAllColumns();
        this.gridOptions.api.sizeColumnsToFit();

      },
      rowHeight: 50, // recommended row height for material design data grids,
      headerHeight: 48,
      frameworkComponents: {
        NoRowsOverlayComponent: NoRowsOverlayComponent,
      },
      // rowModelType : 'infinite'
  };
  }
  
  translateLabels(){
    this.isLangugeLoaded =false;
    this.translate.get('direction').subscribe((res: any) => {
      this.isRTL = res == "rtl";
    });
    this.translate.get('trainee-grid').subscribe((res: any) => {
      this.overlayNoRowsTemplate =res.NoRowsLabel;
      this.overlayLoadingTemplate =res.LoadingLabel;
      this.columnDefs = [
        {
          headerName: res.FirstNameLabel,
          field: 'firstName',
        },
        {
          headerName: res.LastNameLabel,
          field: 'lastName',
        },
        {
          headerName: res.EmailLabel,
          field: 'email',
        },
      ];
      
      if( this.gridOptions &&  this.gridOptions.api){
        this.gridOptions.api.setColumnDefs(this.columnDefs)
        this.gridOptions.api.setRowData(this.rowData);
      }
      this.isLangugeLoaded =true;
    });
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.updateRowData();
  }

  updateRowData(){
    if(this.gridOptions.api){
      this.rowData = this.trainees;
      this.gridOptions.api.setRowData(this.rowData);
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  addNewExercise()
    {
      let newEmptyTrainee:Trainee={firstName:"",lastName:"",email:""};
      this.trainees.push(newEmptyTrainee);
      this.updateRowData();

    }
}
