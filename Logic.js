function checkus(Name) {
    if (Name.length > 5) {
        document.getElementById("un").classList.add("success")
        document.getElementById("un").classList.replace("error", "success")
        document.getElementById("error1").innerHTML = ""
    } else {
        document.getElementById("error1").innerHTML = "Error Fount... Username Must be 6 Characters"
        document.getElementById("un").classList.add("error")
    }
}

function checkEm(Name) {
    if (Name.includes("@gmail")) {
        document.getElementById("em").classList.add("success")
        document.getElementById("em").classList.replace("error", "success")
        document.getElementById("error2").innerHTML = ""
    } else {
        document.getElementById("error2").innerHTML = "Error Fount... Invalid Email"
        document.getElementById("em").classList.add("error")
    }
}

function checkpw(Name) {
    if (Name.includes("#") && Name.length > 5) {
        document.getElementById("pw").classList.add("success")
        document.getElementById("pw").classList.replace("error", "success")
        document.getElementById("error3").innerHTML = ""
    } else {
        document.getElementById("error3").innerHTML = " Cant't Except..."
        document.getElementById("pw").classList.add("error")
    }
}

function recheck(n,m) {
    if (n === m && m.length > 5) {
        document.getElementById("cpw").classList.add("success")
        document.getElementById("cpw").classList.replace("error", "success")
        document.getElementById("error4").innerHTML = ""
    } else {
        document.getElementById("error4").innerHTML = " Cant't Except... Password Not Match"
        document.getElementById("cpw").classList.add("error")
    }
}
function Done() {
    let a = document.getElementById("un").value
    var Email = document.getElementById("em").value
    var PassWord = document.getElementById("pw").value
    var PW = document.getElementById("cpw").value

    checkus(a)
    checkEm(Email)
    checkpw(PassWord)
    recheck(PassWord,PW)
}