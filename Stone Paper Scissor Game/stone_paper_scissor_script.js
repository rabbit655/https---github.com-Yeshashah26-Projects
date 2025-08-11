let player1_choice = "";
let player2_choice = "";
let counter = document.getElementById('round_counter');
let rcounter = Number.parseInt(counter=0)

function player1_choice1(choice){
    player1_choice = choice;
    console.log(player1_choice)
}
function toggleHighlight(button) {
    // let btn = document.getElementById(id);
    // btn.classList.toggle("selected"); // Add if not present, remove if present
    console.log(button)
    document.querySelectorAll('.player button').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add highlight to clicked button
    button.classList.add('selected');
}
function player2_choice2(){
    let choices = ["stone","paper","scissor"]
    let index = Math.floor(Math.random() * choices.length)
    player2_choice = choices[index]
    console.log(player2_choice)
}
function play(){  
    console.log("player1:",player1_choice);
    console.log("Player2:",player2_choice)
    let result = document.getElementById('result')
    if(player1_choice ===  player2_choice)
    {
        result.textContent = "It's a Draw";
    }
    else if((player1_choice == "stone" && player2_choice == "scissor") || (player1_choice == "scissor" && player2_choice == "paper") || (player1_choice == "paper" && player2_choice == "stone"))    {
        result.textContent = "Player 1 Wins";
    }
    else{
        result.textContent = "Player 2 Wins";
    }
    counter = ++counter;
    console.log("counter",counter)
    round_counter.textContent = "Round: "+ counter;
} 
function reset(){
    player1_choice = "";
    player2_choice = "";
    counter = 0;
    document.getElementById("result").textContent = "";
    console.clear();
    document.getElementById("choose").checked = false;
    document.querySelectorAll('.player button').forEach(btn => {
        btn.classList.remove('selected');
    });
    round_counter.textContent = "Round: "+ counter;
    result.textContent="Game reset. Choose again!";
}  