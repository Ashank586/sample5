function enterplayer2name(){
    window.location="login_page_2.html";
    player1_name=document.getElementById("player1_name_input").value;
    localStorage.setItem("player_1_name",player1_name);
}
function storing(){
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player_2_name",player2_name);
}