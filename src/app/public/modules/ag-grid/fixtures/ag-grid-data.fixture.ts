export class SkyAgGridRow {
  public id: string;
  public name: string;
  public nickname?: string;
  public value?: number;
  public target: number;
  public date?: Date;
  public selected: boolean;
  public validNumber?: number;
  public validCurrency?: string;
  public validDate?: Date;
}

export const SKY_AG_GRID_DATA: SkyAgGridRow[] = [
  {
    id: '0',
    name: 'Mark',
    value: 7,
    target: 10,
    date: new Date('1/1/19'),
    selected: true,
    validNumber: 23,
    validCurrency: '$1.23',
    validDate: new Date(1955, 10, 5)
  },
  {
    id: '1',
    name: 'Jill',
    target: 12,
    selected: false,
    validNumber: 45,
    validCurrency: '$4.56',
    validDate: new Date(2015, 10, 5)
  },
  {
    id: '2',
    name: 'Marcus',
    nickname: 'John',
    value: 13,
    target: 9,
    date: new Date('3/1/19'),
    selected: false,
    validNumber: 67,
    validCurrency: '$7.89',
    validDate: new Date()
  },
  {
    id: '3',
    name: 'Mary',
    target: 8,
    selected: true
  }
];

export const SKY_AG_GRID_LONG_DATA: SkyAgGridRow[] = [
  {
    id: '0',
    name: 'Mark',
    value: 7,
    target: 10,
    date: new Date('1/1/19'),
    selected: true
  },
  {
    id: '1',
    name: 'Jill',
    target: 12,
    selected: false
  },
  {
    id: '2',
    name: 'Jonathan',
    nickname: 'John',
    value: 13,
    target: 9,
    date: new Date('3/1/19'),
    selected: false
  },
  {
    id: '3',
    name: 'Mary',
    target: 8,
    selected: true
  },
  {
    id: '4',
    name: 'John',
    target: 5,
    selected: false
  },
  {
    id: '5',
    name: 'Jack',
    target: 7,
    selected: false
  }
];
