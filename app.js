var input = document.getElementById("input");
var list = document.getElementById("list");

// function submit() {
//     var value = event.target.value;
//     list.innerHTML += "<li>" + value + "</li>"
//     input.value = ""
// }

function keyPress() {
    if (event.keyCode == 13) {
        var elim = event.target;
        list.innerHTML += "<li class='user'>" + elim.value + "</li>"


        if (['hi', 'hello', 'hey', 'salam', 'assalamualaikum', 'Hi', 'Hey', 'oye', 'hai', 'baat sun', 'sune', 'information chaie'].indexOf(elim.value) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Hello !</li>"

            }, 2000)
            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Me Apki Kia Madad Kr Sakta Ho ?</li>"

            }, 4000)

        }
        else if (['admission ha', 'admission chaie', 'i need addmission', 'admission open ha', 'admission milega ?', 'information chaie', 'admission lena tha', 'dakhla ha ?', 'admission kb open ha ?'].indexOf(elim.value) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Yes.</li>"

            }, 2000)
            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Ap kis Course Me interested ha ?</li>"

            }, 4000)
        }
     
        else if (['graphic desighning' , 'web development', 'web and development', 'web & development' , 'vedio editing' , 'animation' , 'flutter' , 'paython' , 'techno kids' , 'bike repairing' , 'cctv' , 'cyber secuirity'].indexOf(elim.value) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Okay. hamare pass limited seats ha new batch me .</li>"

            }, 2000)
            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Apna name bataye ?</li>"

            }, 4000)
        }
     
        else {
            setTimeout(function () {
                list.innerHTML += "<li class='robot'>Sorry ! Me samaj nhi saka</li>"
            }, 2000)

        }
        event.target.value = ""
    }

}
