let cells = 1;
let color_list = [ //didn't want to add all 140 colors 
    "#000000", //black
    "#454545", //dark gray
    "#999999", //light gray
    "#FF0000", //red
    "#00FF00", //green
    "#0000FF", //blue

];

let coloring = false;

let currentColor = "gray";

//0
function createCell(className) {
    let cell = document.createElement("td");

    cell.classList.add(className);

    cell.classList.add("uncolored");

    cell.addEventListener("click", changeColor);

    cell.addEventListener("mousedown", changeColor); //two lines to make mouse over work smh

    cell.addEventListener("mouseover",changeColor);

    return cell;
}

//1
function addRow() {

    let grid = document.getElementById("grid");

    let newRow = document.createElement("tr");

    newRow.classList.add("grid-row");

    grid.appendChild(newRow);

    for (let i = 0; i < cells; i++) {
        newRow.appendChild(createCell("grid-cell"));
    }
}

//2
function addColumn() {

    cells++;

    let grid = document.getElementById("grid");

    let rows = grid.getElementsByClassName("grid-row");

    for (let i = 0; i < rows.length; i++) {
        rows[i].appendChild(createCell("grid-cell"));
    }
}

//3
function removeRows() {
    let grid = document.getElementById("grid");

    let lastRow = grid.rows.length - 1;

    for (let i = lastRow; i > 0; i--) {
        grid.deleteRow(i);
    }
}

//4
function removeColumns() {
    cells = 1;

    let grid = document.getElementById("grid");

    let lastColumn = grid.rows[0].cells.length - 1;

    for (let i = 0; i < grid.rows.length; i++) {

        for (let j = lastColumn; j > 0; j--) {
            grid.rows[i].deleteCell(j);
        }
    }
}

//5
function createColorMenu() {
    //creates dropdown for color
    let dropmenu = document.getElementById("drop");

    for (let i of color_list) {

        var newOpTag = document.createElement("option"); //[object mouseEvent] shows up with const or let

        newOpTag.style.background = i;
        
        newOpTag.nodeValue = i;

        dropmenu.appendChild(newOpTag);

        dropmenu.addEventListener("mouseover", function(i) { newOpTag.innerText = i; });
    }

}

//6
function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored");
}

//7
function fillAllUncolored()
{
    let cells = document.getElementsByClassName("grid-cell");
    let uncolored = [...cells].filter(cell => 
    {
        return cell.classList.contains("uncolored");
    });

    uncolored.forEach(cell =>
    {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    });
}

//8
function fillAllCells()
{
    let cells = document.getElementsByClassName("grid-cell");
    [...cells].forEach(cell =>
    {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    });
}

//9
function clearAllCells()
{
    let cells = document.getElementsByClassName("grid-cell");
    [...cells].forEach(cell =>
    {
        cell.style.backgroundColor = null;
        cell.classList.remove(...cell.classList);
        cell.classList.add("grid-cell");
        cell.classList.add("uncolored");
    });
}
