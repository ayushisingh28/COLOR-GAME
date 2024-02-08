var numSquares = 6;

var colors = generateRandomColors(numSquares);
//square pe kam
var squares = document.querySelectorAll(".square");
//right colour
var pickedColor = pickColor();
//output the right colour code
var colorDisplay = document.querySelector("#colorDisplay");
//sahi ya galat
var messageDisplay = document.querySelector("#message");
//yaha ham game ke nam ka bg colour right color kar denge
var h1 = document.querySelector("h1");
//reset pe kam
var resetBtn = document.querySelector("#reset");
//mode select karo 
var mode = document.querySelectorAll(".mode");

for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetBtn.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function () {
    //generate all new colors
    //select a new color
    //change colour squares on page

    //banaya aur uthaya
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    //new colour displayed
    colorDisplay.textContent = pickedColor;
    //naya squares ka colors
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!!";
            //jitne ke baad reset ko play again karo
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);            
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#080808";
            messageDisplay.textContent = "Try Again";           
        }
    });
}

function changeColors(color) {
    //agar sahi huaa toh sabka eek colour
    for (var i = 0; i < squares.length; i++)
        squares[i].style.backgroundColor = color;
}

function pickColor() {
    //eek random colour ko answer banane ke liye
    var random = Math.floor(Math.random() * colors.length);
    //floor decimal ko hatata hai
    return (colors[random]);
}

function generateRandomColors(num) {
    //make array 
    var arr = [];
    //add random colors to array
    for (var i = 0; i < num; i++) {
        //array me random colour dalo
        arr.push(randomColors());
    }
    //return that array
    return arr;
}

function randomColors() {
    //random colour banao
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256); 
    // "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
    //spaces must hai...kyuki ham log jab click karke colour uthayenge
    //toh usme space hota hai rgb(r, g, b)!!!!!!!!!!!!!!!!!!!!!!
        //             A
        //             |
        //             |
        //             |
}