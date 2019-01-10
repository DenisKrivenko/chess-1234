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

