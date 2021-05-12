var myKeys = {
	SPACE:32,
	ENTER:13,
	PAGE_UP : 33,
	PAGE_DOWN : 34,
	END : 35,
	HOME : 36,
	ARROW_LEFT : 37,
	ARROW_UP : 38,
	ARROW_RIGHT : 39,
	ARROW_DOWN : 40,
	TAB : 9
	};

var SPACE		=	32;
var ENTER		=	13;
var PAGE_UP		=	33;
var PAGE_DOWN	=	34;
var END			=	35;
var HOME		=	36;
var ARROW_LEFT	=	37;
var ARROW_UP	=	38;
var ARROW_RIGHT =	39;
var ARROW_DOWN	=	40;
var TAB			=	9;
var grids = [];

function handleKeyDown(event) {
  var grid = getGrid('grid-1');
  keyCode = event.keyCode,
  evtTarget = event.target ? event.target : event.srcElement;
  if (keyCode == myKeys.ARROW_LEFT) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.col-1<0?grid.focusedCell.col=0:grid.focusedCell.col--;
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.ARROW_RIGHT) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.col+1>grid.table.rows[grid.focusedCell.row].cells.length-1?grid.focusedCell.col=grid.table.rows[grid.focusedCell.row].cells.length-1:grid.focusedCell.col++;
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.ARROW_UP) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row-1<1?grid.focusedCell.row=1:grid.focusedCell.row--;
    if (grid.focusedCell.row<grid.firstVisibleRow) {
      scrollUp(1,grid);
    }
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.ARROW_DOWN) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row+1>grid.table.rows.length-1?grid.focusedCell.row=grid.table.rows.length-1:grid.focusedCell.row++;
    if (grid.focusedCell.row>=grid.firstVisibleRow+grid.pageSize) {
      scrollDown(1,grid);
    }
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.HOME && event.ctrlKey) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row=1;
    scrollTop(grid);
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.END && event.ctrlKey) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row=grid.table.rows.length-1;
    scrollBottom(grid);
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.HOME) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.col=grid.table.col=0;
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.END) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.col=grid.table.col=grid.table.rows[grid.focusedCell.row].cells.length-1;
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.PAGE_UP) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row=grid.focusedCell.row-grid.pageSize;
    if (grid.focusedCell.row<=1) grid.focusedCell.row = 1;
    if (grid.firstVisibleRow>1) {
      scrollUp(grid.pageSize,grid);
    }
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.PAGE_DOWN) {
    blurCell(grid.focusedCell,grid);
    grid.focusedCell.row=grid.focusedCell.row+grid.pageSize;
    if (grid.focusedCell.row> grid.table.rows.length-1) grid.focusedCell.row = grid.table.rows.length-1;
    if (grid.firstVisibleRow+grid.pageSize<grid.table.rows.length-grid.pageSize) {
      scrollDown(grid.pageSize,grid);
    } else {
      scrollDown(grid.firstVisibleRow + (grid.table.rows.length-grid.pageSize) ,grid);
    }
    focusCell(grid.focusedCell,grid);
  } else if (keyCode == myKeys.SPACE) {
    if (grid.selectedRow>-1) {
      deselectRow(grid.selectedRow,grid);
    }
    if (grid.selectedRow != grid.focusedCell.row) {
      grid.selectedRow = grid.focusedCell.row;
      selectRow(grid.selectedRow,grid);
    }
  }
  if (keyCode != myKeys.TAB){
    event.cancelBubble = true;
    if (event.preventDefault)
    event.preventDefault();
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
        event.returnValue = false;
      }
    } else {
      grid.table.tabIndex = "0";
      blurCell(grid.focusedCell,grid);
    }
}


function getGrid(id) {
  if (!grids[id]) {
    var grid = {};
    grid.focusedCell = null;
    grid.selectedRow = -1;
    grid.firstVisibleRow = 1;
    grid.table = document.getElementById(id);
    grid.pageSize=4,
    grid.rows=9;
    cells = grid.table.getElementsByTagName("TD");
    for (var n=0;n<cells.length;n++) {
    if (cells[n].getAttribute("editable")=="true") 
		cells[n].tabIndex=0;
    }
    grids[id] = grid;
  }
  return grids[id]; 
}

function handleFocus(id, event) {
  var grid = getGrid(id);
  if (grid) {
    if (!grid.focusedCell) {
      grid.focusedCell = {row:1,col:0};
    } else {
      blurCell(grid.focusedCell,grid);
    }
    focusCell(grid.focusedCell,grid);
    grid.table.tabIndex = "-1";
  }
}

function handleClick(id, event) {
  var grid = getGrid(id);
  if (grid) {
    var clickedCell = event.target?event.target:event.srcElement;
    if (clickedCell.tagName=="TD") {
      if (grid.focusedCell) {
        blurCell(grid.focusedCell,grid);
      }
      if (grid.selectedRow > -1) {
        deselectRow(grid.selectedRow,grid);
      }
      grid.focusedCell = {row:clickedCell.parentNode.rowIndex,col:clickedCell.cellIndex};
      focusCell(grid.focusedCell,grid);
      grid.selectedRow = grid.focusedCell.row;
      selectRow(grid.selectedRow,grid);
    }
  }
} 

function blurCell(cell,grid) {
  var td = grid.table.rows[cell.row].cells[cell.col];
  if (td.getAttribute("editable")=="true") return
  td.tabIndex = "-1";
}

function focusCell(cell,grid) {
  var tr = grid.table.rows[cell.row];
  var td = tr.cells[cell.col];
  td.tabIndex = "0";
  td.focus();
}

function scrollTop(grid) {
  grid.firstVisibleRow = 1;
  scrollRow(grid);
}

function scrollBottom(grid) {
  grid.firstVisibleRow = grid.table.rows.length;
  scrollRow(grid);
}

function scrollDown(numberofrows,grid) {
  grid.firstVisibleRow = grid.firstVisibleRow + numberofrows;
  scrollRow(grid);
}

function scrollUp(numberofrows,grid) {
  grid.firstVisibleRow = grid.firstVisibleRow-numberofrows;
  scrollRow(grid);
} 

function scrollRow(grid) {
  if (grid.firstVisibleRow<1)grid.firstVisibleRow=1;
  if (grid.firstVisibleRow>=grid.table.rows.length)grid.firstVisibleRow=grid.table.rows.length-grid.pageSize;
    var startRow = grid.firstVisibleRow;
  for (var n=1;n<grid.table.rows.length;n++) {
    var tr = grid.table.rows[n];
    if (n >= startRow && n<startRow+grid.pageSize) {
      tr.style.display = "";
    } else {
      tr.style.display="none";
    }
  }
}

function selectRow(row,grid) {
  var tr = grid.table.rows[row];
  tr.style.backgroundColor="orange";
  for (var i=0;i<tr.cells.length;i++) {
    tr.cells[i].setAttribute("aria-selected","true");
  }
}

function deselectRow(row,grid) {
  var tr = grid.table.rows[row];
  tr.style.backgroundColor="";
  for (var i=0;i<tr.cells.length;i++) {
    tr.cells[i].setAttribute("aria-selected","false");
  }
}

