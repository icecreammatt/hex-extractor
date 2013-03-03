var WIDTH = 50;  //450
var HEIGHT = 27; // 247
var canvas = document.getElementById('binary');
var context = canvas.getContext('2d');

var img = new Image();
img.src = 'hammer.jpg';
img.onload = function () {
    context.drawImage(img, 0, 0, WIDTH, HEIGHT);
}

function printData() {
    var x = 0, y = 0;
    for(y = 0; y < HEIGHT; y += 1 ) {
	for(x = 0; x < WIDTH; x += 1 ) {
	    getPixelData(x,y);
	}
    }
    console.log('Done');
    updatePage();
}

function updatePage(){
    document.getElementById('binaryData').innerHTML = imageBinaryData;
    var text = document.getElementById('binaryData').innerHTML;
    text = text.replace(/,/g, " ");
    document.getElementById('binaryData').innerHTML = text;
}

var imageBinaryData = [];
function getPixelData(x,y) {
    var pix = context.getImageData(x,y,1,1);
    var base = 16;
    //    console.log(pix.data[0].toString(base) + ' ' + pix.data[1].toString(base) + ' ' + pix.data[2].toString(base) );
    //    ("00" + myBaseTenNumber.toString(16)).substring(2 - temp.length, 2);
    var r,g,b;
    r = pix.data[0].toString(base).toUpperCase(); 
    g = pix.data[1].toString(base).toUpperCase();
    b = pix.data[2].toString(base).toUpperCase();
    if( r.length < 2 ) {
	r = "00" + r.toString(base).substring( 1, 2 );
    }
    if( g.length < 2 ) {
	g = "00" + g.toString(base).substring( 1, 2 );
    }
    if( b.length < 2 ) {
	b = "00" + b.toString(base).substring( 1, 2 );
    }
    var pixelData = r + " " + g + " " + b;

    //    var pixelData = pix.data[0].toString(base) + ' ' + pix.data[1].toString(base) + ' ' + pix.data[2].toString(base);
    imageBinaryData.push(pixelData);
    //    var num = 34;
    //    console.log(num.toString(2));
}

function setPixelData(x,y) {
    var pix = context.getImageData(x,y,1,1);
    pix.data[0] = 255;
    pix.data[1] = 0;
    pix.data[2] = 0;
}