function addUser(){
    player_1name=document.getElementById("player1_name_input").value;
    player_2name=document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name",player_1name);
    localStorage.setItem("player2_name",player_2name);
}