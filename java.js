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

function brown(){
    {document.getElementById('table').className='brown'};
    }

function black(){
    {document.getElementById('table').className='black'};
}

