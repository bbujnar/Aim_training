let wynik;
let s;
let a;
let wyniki= [];

document.getElementById("start").onclick = play;

document.getElementById("reset").onclick = reset;

let time= document.getElementById("choose");


function play(){
    wynik=0;
    s=0;
    document.getElementById("score").innerHTML= `Score: ${wynik}`;
    document.getElementById("start").style.display= 'none';
    document.getElementById("reset").style.display= 'none';
    document.getElementById("settings").style.display= 'none';
    document.getElementById("hint").style.display= 'none';
    document.getElementById("dot").style.display = 'inline';

    let x=coordx();
    let y= coordy();

    document.getElementById("dot").style.left= `${x}px`;
    document.getElementById("dot").style.top= `${y}px`;

    document.getElementById("timer").innerHTML= `Time left: ${time.value}`;
    function count(){
        
        s++;
        refresh();
        if(s===Number(time.value)){
            window.clearInterval(a); 
            document.getElementById("timer").innerHTML= `Time left: ${time.value}`;
            document.getElementById("dot").style.display = 'none';
            document.getElementById("reset").style.display= 'inline';
            document.getElementById("settings").style.display= 'inline';
            document.getElementById("hint").style.display= 'inline';
            let find= wyniki.find(element => element == wynik);
            if(find !== wynik){
                wyniki.push(wynik);
                wyniki.sort();
                wyniki.reverse();
                document.getElementById("best").innerHTML= `Best score: ${wyniki[0]}`;
            }
            

        }
    }

    function refresh(){
        document.getElementById("timer").innerHTML = `Time left: ${Number(time.value)-s}`;
    }

    function startcount(){
        a= setInterval(count,1000);
    }
    
    document.getElementById("start").onclick = startcount();
}

function game(){
    
    let x=coordx();
    let y= coordy();

    document.getElementById("dot").style.left = `${x}px`;
    document.getElementById("dot").style.top= `${y}px`;

}
function coordx(){
    let x= parseInt(Math.random()*(window.innerWidth*0.95));
    return x;
}
function coordy(){
    let y= parseInt(Math.random()*(window.innerHeight*0.9));
    return y;
}

function update(){
    wynik++;
    document.getElementById("score").innerHTML= `Score: ${wynik}`;
}

function reset(){
    document.getElementById("reset").style.display = 'none';
    document.getElementById("score").innerHTML= `Score: 0`;
    document.getElementById("timer").innerHTML = `Time left: 0`;
    play();
}


document.getElementById("hint").onclick = hint;
let test=0;
function hint(){
    if(test===0){
        document.getElementById("hint").innerHTML = "<br>The game consists in clicking a dot<br> that appears in a random place on the screen";
        test=1;
    }
    else{
        document.getElementById("hint").innerHTML = "<br>^<br>Click me for hint";
        test=0;
    }
}