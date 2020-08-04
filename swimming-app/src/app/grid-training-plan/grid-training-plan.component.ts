import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Module, GridOptions } from 'ag-grid-community';
import { TrainingCellComponent } from './Icell_Renderer_Components/training-cell/training-cell.component';
import { Exercise } from 'src/app/shared/models/exercise.model';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

@Component({
  selector: 'app-grid-training-plan',
  templateUrl: './grid-training-plan.component.html',
  styleUrls: ['./grid-training-plan.component.css']
})
export class GridTrainingPlanComponent implements OnInit, OnChanges {
  gridOptions:GridOptions;
  @Input() exercises:Exercise[] = [ ];
  @Output() exercisesChange = new EventEmitter();
  columnDefs = [
    {
      field: 'exercise',
      cellRenderer: "training_cell_component", 
      // autoHeight: true,
  },
  ];
  rowData = this.exercises.map(e=> {return { exercise:e}} );

  constructor() { 
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
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
        // toggleHeaderRenderer: MatButtonToggleHeaderComponent,
          // progressRenderer: MatProgressSpinnerComponent
      },
      // rowModelType : 'infinite'
  };
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
