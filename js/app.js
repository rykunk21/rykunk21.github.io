

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


const occupations = [
    'a Web Developer','an Engineer', 'a Problem Solver', 'a Drone Pilot'
]

async function occupationAnimation()   {
    var typer = document.getElementById("typer");
    var display = document.getElementById("occupation");

    while (true){
        for (let i=0; i < occupations.length; i++){
            display.innerHTML = occupations.at(i);
            // delete the existing number
            for (let j = display.innerHTML.length; j >= 0; j--){
                display.innerHTML = display.innerHTML.substring(0,j);
                await delay(100);
            }
            // write the new number
            await delay(500);
            next = (i == (occupations.length) - 1) ? occupations.at(0) : occupations.at(i + 1);
            for (let j=0 ; j <= next.length; j++){
                display.innerHTML = next.substring(0,j);
                await delay(100);
            }
            await delay(500);
            typer.classList.add("vanish");
            // flicker the cursor
            await delay(500);
            typer.classList.remove("vanish");


        }
    }
}

occupationAnimation()
