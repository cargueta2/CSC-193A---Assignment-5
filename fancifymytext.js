function getBigger(){
    document.getElementById("user_input").style.fontSize = "24px";
}

function fancify(){
    let user_input = document.getElementById("user_input");

    user_input.style.color = "blue";
    user_input.style.textDecoration = "underline";
    user_input.style.fontWeight = "bold";

}

function boringBetty(){
    let user_input = document.getElementById("user_input");

    user_input.style.color = "black";
    user_input.style.textDecoration = "none";
    user_input.style.fontWeight = "normal";
}

function moo(){
    let user_input = document.getElementById("user_input");
    let user_text = user_input.value;

    let strSplit = user_text.split(".");

    user_text = strSplit.join(" Moo. ");

    user_input.value = user_text.toUpperCase();
}
