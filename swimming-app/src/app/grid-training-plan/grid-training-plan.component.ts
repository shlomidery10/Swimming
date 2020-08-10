import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Module, GridOptions,ColDef } from 'ag-grid-community';
import { TrainingCellComponent } from './Icell_Renderer_Components/training-cell/training-cell.component';
import { Exercise } from 'src/app/shared/models/exercise.model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { NoRowsOverlayComponent } from './no-rows-overlay/no-rows-overlay.component';

@Component({
  selector: 'app-grid-training-plan',
  templateUrl: './grid-training-plan.component.html',
  styleUrls: ['./grid-training-plan.component.css']
})
export class GridTrainingPlanComponent implements OnInit, OnChanges {
  
  @Input() exercises:Exercise[] = [ ];
  @Output() exercisesChange = new EventEmitter();
  
  gridOptions:GridOptions;
  overlayLoadingTemplate;
  overlayNoRowsTemplate;
  isLangugeLoaded:boolean = false;
  isRTL:boolean = false;
  
  columnDefs:ColDef[]= [
    {
      field: 'exercise',
      cellRenderer: "training_cell_component", 
      // autoHeight: true,
    },
  ];
  rowData = this.exercises.map(e=> {return { exercise:e}} );


  constructor(private translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translateLabels();
    });
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      noRowsOverlayComponent: 'NoRowsOverlayComponent',
    //   defaultColDef: {
    //     enableRowGroup: true,
    //     enablePivot: true,
    //     enableValue: true,
    //     width: 100,
    //     sortable: true,
    //     resizable: true,
    //     filter: true,
    //     flex: 1,
    //     minWidth: 100
    // },
      onGridReady: () => {
        this.translateLabels();
        this.gridOptions.columnApi.autoSizeAllColumns();
        this.gridOptions.api.sizeColumnsToFit();
      },
      onCellValueChanged:() => {
        this.gridOptions.columnApi.autoSizeAllColumns();
        this.gridOptions.api.sizeColumnsToFit();

      },
      rowHeight: 80, // recommended row height for material design data grids,
      headerHeight: 48,
      frameworkComponents: {
        training_cell_component: TrainingCellComponent,
        NoRowsOverlayComponent: NoRowsOverlayComponent,
          // progressRenderer: MatProgressSpinnerComponent
      },
      // rowModelType : 'infinite'
  };
  }
  
  translateLabels(){
    this.isLangugeLoaded =false;
    this.translate.get('direction').subscribe((res: any) => {
      this.isRTL = res == "rtl";
    });
    this.translate.get('grid-training-plan').subscribe((res: any) => {
      this.overlayNoRowsTemplate =res.NoRowsLabel;
      this.overlayLoadingTemplate =res.LoadingLabel;
      this.columnDefs = [
        {
          headerName: res.ExerciseLabel,
          field: 'exercise',
          cellRenderer: "training_cell_component", 
          // autoHeight: true,
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
      this.rowData = this.exercises.map(e=> {return { exercise:e}} );
      this.gridOptions.api.setRowData(this.rowData);
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  addNewExercise()
    {
      let newEmptyExercise:Exercise=new Exercise(null,null,null,[]);
      this.exercises.push(newEmptyExercise);
      this.updateRowData();

    }

}
