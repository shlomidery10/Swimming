import { Component, OnInit } from '@angular/core';
import { Module, GridOptions } from 'ag-grid-community';
import { TrainingCellComponent } from './Icell_Renderer_Components/training-cell/training-cell.component';
import { Exercise } from 'src/app/shared/models/exercise.model';

@Component({
  selector: 'app-grid-training-plan',
  templateUrl: './grid-training-plan.component.html',
  styleUrls: ['./grid-training-plan.component.css']
})
export class GridTrainingPlanComponent implements OnInit {
  gridOptions:GridOptions;

  columnDefs = [
    {field: 'exercise',cellRenderer: "training_cell_component"},
  ];
  rowData = [
    { exercise: new Exercise(null,null,null,[])},
  ];

  constructor() { 
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
          console.log();
          
      },
      rowHeight: 50, // recommended row height for material design data grids,
      headerHeight: 48,
      frameworkComponents: {
        training_cell_component: TrainingCellComponent,
        // toggleHeaderRenderer: MatButtonToggleHeaderComponent,
          // progressRenderer: MatProgressSpinnerComponent
      }
  };
  }
  
  ngOnInit(): void {
  }

  addNewExercise()
    {
      let exercise:Exercise=new Exercise(null,null,null,[]);
      this.rowData.push({exercise: exercise});
      console.log(this.rowData);
      this.gridOptions.api.setRowData(this.rowData);
    }






}
