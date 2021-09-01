//Globals
let heads = 0, tails = 0;

//MAIN
document.addEventListener('DOMContentLoaded', function () {
    //Locals
    let headsImg = 'assets/images/penny-heads.jpg';
    let tailsImg = 'assets/images/penny-tails.jpg';
    let img = document.getElementById('penny-image');

    // Event Listeners for buttons
    document.getElementById('flip').addEventListener('click', func => {
        let rand = Math.round(Math.random());
        if(rand) { //Heads = 1
            img.setAttribute('src',headsImg);
            ++heads;
            document.getElementById('heads').textContent = heads;
            document.getElementById('heads-percent').textContent = `${Math.round(100*(heads/(heads+tails)),2)}%`;
            document.getElementById('tails-percent').textContent = `${Math.round(100*(tails/(heads+tails)),2)}%`;
            document.getElementById('message').textContent = "You Flipped Heads!";
        } else { //Tails = 0
            img.setAttribute('src',tailsImg);
            ++tails;
            document.getElementById('tails').textContent = tails;
            document.getElementById('tails-percent').textContent = `${Math.round(100*(tails/(heads+tails)),2)}%`;
            document.getElementById('heads-percent').textContent = `${Math.round(100*(heads/(heads+tails)),2)}%`;
            document.getElementById('message').textContent = "You Flipped Tails!";
        }
    });
    document.getElementById('clear').addEventListener('click', func => {
        heads = 0; tails = 0;
        img.setAttribute('src',headsImg);
        document.getElementById('heads').textContent = "0";
        document.getElementById('heads-percent').textContent = "0%";
        document.getElementById('tails').textContent = "0";
        document.getElementById('tails-percent').textContent = "0%";
        document.getElementById('message').textContent = "Let's Get Rolling!";
    });

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})