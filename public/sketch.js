let canvas;
let URL='https://catfact.ninja/fact'
let URL1= 'https://dog.ceo/api/breeds/image/random'
let URL2= 'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
let URL3= 'https://api.coindesk.com/v1/bpi/currentprice.json'
let URL4='https://randomuser.me/api/'
let catFact= null
let imgDog= null
let usa= null
let bitcoin= null
let user= null
let link 
let position=0

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
//API GATOS
    console.log(fetch(URL).then(response => response.json()));
    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact=data
    console.log(catFact.fact)})

//API PERROS
    console.log(fetch(URL1).then(response => response.json()));
    fetch(URL1)
    .then(response => response.json())
    .then(data => {imgDog =data
    console.log(imgDog.message)
link=loadImage(imgDog.message)})

//API USA
console.log(fetch(URL2).then(response => response.json()));
fetch(URL2)
.then(response => response.json())
.then(data => {usa=data
console.log(usa)})

//API BITCOIN
console.log(fetch(URL3).then(response => response.json()));
fetch(URL3)
.then(response => response.json())
.then(data => {bitcoin=data
console.log(bitcoin)})

//API RANDOM USER
console.log(fetch(URL4).then(response => response.json()));
fetch(URL4)
.then(response => response.json())
.then(data => {user=data
console.log(user)})


}



function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    if (catFact != null){
        stroke(10)
        text('Use the up arrow for the next sentence',50,50,500)
        noStroke()
        textSize(20)
        textWrap(WORD)
        text(catFact.fact,50,100,300)
    }
    if (imgDog != null){
        textSize(20)
        text('Use the down arrow for the next photo',50,800,500)
        image(link,50,400,350,350)
    }
    if (usa != null){
        textSize(20)
        textWrap(WORD)
        text('Use the right arrow for the next population',450,50,500)
        text(usa.data[position]["ID Nation"],450,100,300)
        text(usa.data[position]["ID Year"],450,125,300)
        text(usa.data[position].Nation,450,150,300)
        text(usa.data[position].Population,450,175,300)
        
    }

    if (bitcoin != null){
        textSize(20)
        textWrap(WORD)
        //EURO
        text(bitcoin.bpi.EUR.code,450,250,300)
        text(bitcoin.bpi.EUR.description,450,275,300)
        text(bitcoin.bpi.EUR.rate,450,300,300)
      //LIBRA
      text(bitcoin.bpi.GBP.code,450,350,300)
      text(bitcoin.bpi.GBP.description,450,375,300)
      text(bitcoin.bpi.GBP.rate,450,400,300)
      //DOLAR
      text(bitcoin.bpi.USD.code,450,450,300)
      text(bitcoin.bpi.USD.description,450,475,300)
      text(bitcoin.bpi.USD.rate,450,500,300)
        
    }

    if(user != null){
        text('Use the left arrow for the next user',450,800,500)
        text('Usuario',450,600,400)
        text('Name:'+' '+user.results[0].name.first,450,650,300)
        text('Last Name:'+' '+user.results[0].name.last,450,675,300)
        text('Email:'+' '+user.results[0].email,450,700,300)
        text('Phone:'+' '+user.results[0].phone,450,755,300)


    }

    //console.log("X: " + parseInt(mouseX) + " Y: " + parseInt(mouseY));
}

function keyPressed(){
    if (keyCode === UP_ARROW){
    console.log('hola')
    fetch(URL)
    .then(response => response.json())
    .then(data => {catFact=data})}

    if (keyCode === DOWN_ARROW){
    console.log('HIII')
    fetch(URL1)
    .then(response => response.json())
    .then((data) => {imgDog =data;
        link=loadImage(imgDog.message); 
        console.log(imgDog)})}

    if (keyCode ===RIGHT_ARROW){
        if(position <=7){
            position++
        }
        if(position===7){
            position=0
        }
    console.log('funciona')
    fetch(URL2)
    .then(response => response.json())
    .then(data => {usa=data})}

    if (keyCode === LEFT_ARROW){
        console.log('hola')
        fetch(URL3)
        .then(response => response.json())
        .then(data => {user=data})}
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
