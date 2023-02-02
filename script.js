
function verifyEmail() {
    var email=document.getElementById("txtEmail").value;
    var msg=document.querySelector("h2");
    var atPos=email.indexOf("@");

    if(atPos<3) {
        msg.innerText="Invalid email";
    }
    else {
        msg.innerText="Email verified";
    }
    if(msg.innerText=="Email verified")
    document.getElementsByTagName("h1")[0].style.color='red';
    document.getElementsByTagName("h1")[0].innerText="You go forward";
}

function verifyPassword() {
    var pwd=document.getElementById("txtPwd").value;
    var regexp=/(?=.*[A-Z])\w{4,15}/;
    var msg=document.getElementById("msg");
    var grade=document.getElementById("grade");

    function showGrade(min,max,value,low,high) {
        grade.min=min;
        grade.max=max;
        grade.value=value;
        grade.low=low;
        grade.high=high;
    }


    if(pwd=="") {
        msg.innerHTML="Password Required";
        msg.className="text-danger";
    }
    else {
        if(pwd.match(regexp)) {
            msg.innerHTML="Strong Password";
            msg.className="text-success";
            showGrade(1,100,100,0,0);
        } else {
        if (pwd.length<4) {
            msg.innerHTML="Poor password"
            msg.className="text-danger";
            showGrade(1,100,20,60,80);
        }
        else {
            msg.innerHTML="Weak password"
            msg.className="text-warning";
            showGrade(1,100,70,40,80);
        }
    }
  }
}

function verifyMobile() {
    var mobile=document.getElementById("txtMobile").value;
    var mobExp=/\+91-\d{10}/;
    var mobError=document.getElementById("mobile-error");

    if(mobile.match(mobExp)) {
        mobError.innerText= "This is telephone number";
    }
    else {
        mobError.innerHTML="Invalid mobile number";
    }
}



// function verifyCard() {
//     var cdno=document.getElementById("txtCard").value;
//     var cdimg=document.getElementById("cardImg");

//     if(cdno.startsWith("1111")) {
//         cdimg.style.src="./mc.jpeg"
//     }
//     else if(cdno.startsWith("2222")) {
//         cdimg.src="./visa.png";
//     } else {
//         cdimg.alt="Not available"
//     }

    
 // }