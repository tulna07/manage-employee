// Show/hide password onClick of button using Javascript only

// https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

//   font-family: 'Vibur', cursive;
//   font-family: 'Abel', sans-serif;
// font-family: 'Pacifico', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Alegreya', serif;
// font-family: 'Abril Fatface', cursive;
// font-family: 'Playball', cursive;
// font-family: 'Unica One', cursive;
// font-family: 'Oleo Script', cursive;
// font-family: 'Share', cursive;
// font-family: 'Overlock', cursive;
// font-family: 'Arima Madurai', cursive;
// font-family: 'Playfair Display', serif;
// font-family: 'Merriweather', serif;
// font-family: 'PT Serif', serif;
// font-family: 'Dosis', sans-serif;