// ---------AC Buttton---------
function allclear(){
    document.getElementById('box').value = '';
}

// ---------Backspace Buttton---------
function backspace(){
    var back = document.getElementById('box').value;
    document.getElementById('box').value= back.substring(0,back.length -1);
}


// -----------Cal Button----------
function button(sign){
        // console.log(sign);
        document.getElementById('box').value += sign;
}

// ----------Calculation Equal Button----------
function equal(){
    document.getElementById('box').value = eval(cal.box.value);
}