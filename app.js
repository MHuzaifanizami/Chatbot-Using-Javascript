var input = document.getElementById("input");
var list = document.getElementById("list");
var typing = document.getElementById("typing").innerText;


// function submit() {
//     var value = event.target.value;
//     list.innerHTML += "<li>" + value + "</li>"
//     input.value = ""
// }

function keyPress() {
    if (event.keyCode == 13) {
        var value = event.target.value;
        console.log(value)
        list.innerHTML += "<li class='user'>" + value + "</li>"


        if (['hi', 'hello', 'hey', 'salam', 'assalamualaikum', 'Hi', 'Hey', 'oye', 'hai', 'baat sun', 'sune', 'information chaie'].indexOf(value.toLowerCase()) !== -1) {

            setTimeout(function () {
                 
                list.innerHTML += "<li class='robot'>Hello !</li>"

            }, 2000)
            
            setTimeout(function () {
              
                list.innerHTML += "<li class='robot'>Me Apki Kia Madad Kr Sakta Ho ?</li>"

            }, 4000)

        }
        else if (['admission ha', 'admission chaie', 'i need addmission', 'admission open ha', 'admission milega ?', 'information chaie', 'admission lena tha', 'dakhla ha ?', 'admission kb open ha ?', 'admisssion hain', 'admission ha ?', 'admission karwana tha', 'admission ke bare me infomation lena tha', 'admission open ha ?', 'admission lena hain',].indexOf(value.toLowerCase()) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'> Okay.</li>"

            }, 2000)
            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Ap kis Course Me interested ha ?</li>"

            }, 4000)
        }

        else if (['graphic desighning', 'web development', 'web and development', 'web & development', 'vedio editing', 'animation', 'flutter', 'paython', 'techno kids', 'bike repairing', 'cctv', 'cyber secuirity'].indexOf(value.toLowerCase()) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Okay. hamare pass limited seats ha new batch me. Agr ap admission lena chahte he to admission form likh kr submit kare  , Shukriya .</li>"

            }, 2000)

        }

        else if (['form', 'admission form', 'admission',].indexOf(value.toLowerCase()) !== -1) {


            setTimeout(function () {

                list.innerHTML += "<li class='robot'>Admission form is under process , kindly proceed later , Thank You. <br> SMIT</li>"

            }, 2000)

        }

        else {

            setTimeout(function () {
                list.innerHTML += "<li class='robot'>Sorry ! Me samaj nhi saka</li>"
            }, 2000)

        }
        event.target.value = ""
    }


}

