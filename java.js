function schet() {
    var klick = 1;

    return function() {
        return klick++;

    };

}

var r = schet();

function klick() {
    alert( r() );

}


onload = function() {
    var body = document.getElementsByTagName("body")[0];

    var tbl = document.createElement("table");
    tbl.id = "idTable";
    var tblBody = document.createElement("tbody");
    for (var j = 0; j <= 7; j++) {
        var row = document.createElement("tr");
        for (var i = 0; i <= 7; i++) {
            var cell = document.createElement("td");
            cell.innerHTML = 'Paha Privet';
            row.appendChild(cell);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);




}

function brown(){
    {document.getElementById('idTable').className='brown'};
}

function black(){
    {document.getElementById('idTable').className='black'};
}


