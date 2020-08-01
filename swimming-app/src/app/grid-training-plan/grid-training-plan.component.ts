import { Component, OnInit } from '@angular/core';
import { Module, GridOptions } from 'ag-grid-community';
import { TrainingCellComponent } from '../Icell_Renderer_Components/training-cell/training-cell.component';

@Component({
  selector: 'app-grid-training-plan',
  templateUrl: './grid-training-plan.component.html',
  styleUrls: ['./grid-training-plan.component.css']
})
export class GridTrainingPlanComponent implements OnInit {
  gridOptions:GridOptions;
 

  constructor() { 
    this.gridOptions = <GridOptions>{
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
          console.log();
          
      },
      rowHeight: 530, // recommended row height for material design data grids,
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
  columnDefs = [
    {field: 'training_cell',cellRenderer: "training_cell_component"},
];

rowData = [
    { make: 'Toyota'},
 
];




}
