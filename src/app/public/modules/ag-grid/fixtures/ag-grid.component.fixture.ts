import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {
  GridOptions
} from 'ag-grid-community';

import {
  SkyCellType
} from '../types/cell-type';

import {
  SkyAgGridService
} from '../ag-grid.service';

import {
  SKY_AG_GRID_DATA
} from './ag-grid-data.fixture';

@Component({
  selector: 'sky-ag-grid-component-fixture',
  templateUrl: './ag-grid.component.fixture.html',
  styleUrls: ['../../../styles/ag-grid-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkyAgGridFixtureComponent implements OnInit {
  public gridData = SKY_AG_GRID_DATA;
  public columnDefs = [
    {
      field: 'selected',
      headerName: '',
      maxWidth: 50,
      sortable: false,
      type: SkyCellType.RowSelector
    },
    {
      field: 'name',
      headerName: 'First Name'
    },
    {
      field: 'nickname',
      headerName: 'Nickname',
      editable: true,
      type: SkyCellType.Text
    },
    {
      field: 'value',
      headerName: 'Current Value',
      editable: true,
      type: SkyCellType.Number
    },
    {
      field: 'target',
      headerName: 'Goal',
      type: SkyCellType.Number
    },
    {
      field: 'date',
      headerName: 'Completed Date',
      editable: true,
      type: SkyCellType.Date
    },
    {
      field: 'currency',
      headerName: 'Currency amount',
      editable: true,
      type: SkyCellType.Currency
    },
    {
      field: 'validNumber',
      headerName: 'Valid number',
      editable: true,
      type: SkyCellType.NumberValidator
    },
    {
      field: 'validCurrency',
      headerName: 'Valid currency',
      editable: true,
      type: SkyCellType.Currency
    },
    {
      field: 'validDate',
      headerName: 'Valid date',
      editable: true,
      type: [SkyCellType.Date, SkyCellType.Validator],
      cellRendererParams: {
        skyComponentProperties: {
          validator: (value: Date) => {
            const dt = new Date(1985, 10, 5, 12);
            return !!value && value > dt;
          },
          validatorMessage: 'Please enter a future date'
        }
      }
    }
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefs
  };

  constructor(private gridService: SkyAgGridService) { }

  public ngOnInit(): void {
    this.gridOptions = this.gridService.getEditableGridOptions({ gridOptions: this.gridOptions });
  }
}
