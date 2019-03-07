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


onload = function tableCreate () {
    var body = document.body;

    var tbl = document.createElement("table");
    tbl.id = "idTable";
    var tblBody = document.createElement("tbody");


    for (var x = 0; x <= 7; x++) {
        var row = document.createElement('tr');
        for (var y = 0; y <= 7; y++) {
            var cell = document.createElement('td');

            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);

    drawFigures();


};

function brown(){

        document.getElementById('idTable').className = 'brown'

}

function black(){
    document.getElementById('idTable').className='black';
}

function drawFigures() {
   var figures = [
       {
           source: 'bP.png',
           row: 2,
           col: 1,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 2,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 3,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 4,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 5,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 6,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 7,
       },
       {
           source: 'bP.png',
           row: 2,
           col: 8,
       },
       {
           source:'bK.png',
           row:1,
           col:4,
       },
       {
           source:'bQ.png',
           row:1,
           col:5,
       },
       {
           source:'bB.png',
           row:1,
           col:3,
       },
       {
           source:'bB.png',
           row:1,
           col:6,
       },
       {
           source:'bN.png',
           row:1,
           col:7,
       },{
           source:'bN.png',
           row:1,
           col:2,
       },
       {
           source:'bR.png',
           row:1,
           col:1,
       },
       {
           source:'bR.png',
           row:1,
           col:8,
       },
       {
           source: 'WP.png',
           row: 7,
           col: 1,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 2,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 3,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 4,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 5,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 6,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 7,
       },
       {
           source: 'wP.png',
           row: 7,
           col: 8,
       },
       {
           source:'wK.png',
           row:8,
           col:4,
       },
       {
           source:'wQ.png',
           row:8,
           col:5,
       },
       {
           source:'wB.png',
           row:8,
           col:3,
       },
       {
           source:'wB.png',
           row:8,
           col:6,
       },
       {
           source:'wN.png',
           row:8,
           col:7,
       },{
           source:'wN.png',
           row:8,
           col:2,
       },
       {
           source:'wR.png',
           row:8,
           col:1,
       },
       {
           source:'wR.png',
           row:8,
           col:8,
       }
   ];

   var table = document.getElementById('idTable');
   for (var i = 0; i < figures.length; i++) {
       var img = document.createElement("img");
       img.style.width = '65px';
       img.style.height = '45px';
       img.src = 'images/'+figures[i].source;
       var cell = table.children[0].children[figures[i].row-1].children[figures[i].col-1];
       cell.appendChild(img);

   }
}


