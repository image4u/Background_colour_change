const colors=['red','green','blue','voilet','pink','yellow'];

function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length);

    document.body.style.background=colors[colorIndex];

}