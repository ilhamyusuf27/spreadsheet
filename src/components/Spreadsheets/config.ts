export const contextMenu = ({ spreadsheet, x, y }: any) => [
  {
    title: 'Insert Column',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.insertColumn(1, parseInt(x));
      }
    }
  },
  {
    title: 'Delete Column',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.deleteColumn(parseInt(x));
      }
    }
  },
  {
    type: 'line' // Garis pemisah
  },
  {
    title: 'Insert Row',
    submenu: [
      {
        title: 'Insert Row Above',
        onclick: function () {
          if (spreadsheet) {
            spreadsheet.insertRow(1, parseInt(y));
          }
        }
      },
      {
        title: 'Insert Row Below',
        onclick: function () {
          if (spreadsheet) {
            spreadsheet.insertRow(1, parseInt(y) + 1);
          }
        }
      }
    ]
  },
  {
    title: 'Delete Row',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.deleteRow(parseInt(y));
      }
    }
  },
  {
    type: 'line'
  },
  {
    title: 'Copy',
    shortcut: 'Ctrl + C',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.copy(true);
      }
    }
  },
  {
    title: 'Paste',
    shortcut: 'Ctrl + V',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.paste(true);
      }
    }
  },
  {
    type: 'line'
  },
  {
    title: 'Save As...',
    onclick: function () {
      if (spreadsheet) {
        spreadsheet.download();
      }
    }
  }
];

export const spreadsheetOptions = (spreadsheet: any) => ({
  data: Array(10).fill([]).map(() => Array(10).fill('')),
  minDimensions: [10, 10],
  tableHeight: '400px',
  tableWidth: '100%',
  contextMenu: (obj: any, x: any, y: any, e: any) => contextMenu({ spreadsheet, x, y }),
  oninsertrow: function (instance) {
    console.log('Row has been inserted');
  },
  ondeleterow: function (instance) {
    console.log('Row has been deleted');
  },
  oninsertcolumn: function (instance) {
    console.log('Column has been inserted');
  },
  ondeletecolumn: function (instance) {
    console.log('Column has been deleted');
  }
})