window.onload = function f() {
    document.getElementById("biggerBtn").onclick = handleBiggerBtn;
    document.getElementById("blingBox").onclick = handleBlingBox;
    document.getElementById("malkovitchBtn").onclick = handlerMalkcheck;
    document.getElementById("igpayBtn").onclick = handleIgpayBtn;

}

function handleBiggerBtn() {
    // alert("Hello, world!");
    setInterval(makeTextBigger, 500)

    function makeTextBigger() {
        var prevFont = parseInt(document.getElementById("txtArea").style.fontSize);
        if (!prevFont) {
            prevFont = 12;
        }
        document.getElementById("txtArea").style.fontSize = prevFont + 2 + "pt";
    }
}

function handleBlingBox() {
    let checked = document.getElementById("blingBox").checked;
    console.log(checked);
    if (checked) {
        document.getElementById("txtArea").style.fontWeight = "bold";
        document.getElementById("txtArea").style.color = "green";
        document.getElementById("txtArea").style.textDecoration = "underline";
        document.body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        document.getElementById("txtArea").style.fontWeight = "normal";
        document.getElementById("txtArea").style.color = "black";
        document.getElementById("txtArea").style.textDecoration = "none";
        document.body.style.background = "none"

    }
}
function handlerMalkcheck() {
    var txtArea = document.getElementById("txtArea");
    var str = txtArea.value.split(" ");
    var txtValue = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = "Malkovich";
            txtValue = str.join(" ");
        }
    }
    document.getElementById("txtArea").value = txtValue;
}

function handleIgpayBtn() {
    var str = txtArea.value.split(" ");
    for (var j = 0; j < str.length; j++) {
        var currentStr= str[j];
        var firstChar= str[j].charAt(0);
        if ("aeiouAEIOU".indexOf(firstChar) != -1) {
           currentStr= currentStr.substr(1,currentStr.length-1)+currentStr.charAt(0);
        }
        str[j]=currentStr+"-ay";
    }
    document.getElementById('txtArea').value = str.join(" ");
}
