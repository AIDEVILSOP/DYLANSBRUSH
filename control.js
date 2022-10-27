
document.getElementById("cf_controls").addEventListener("click", function (event) {
    if (document.getElementById('1.1').checked==false) {
        document.getElementById("i1").classList.remove("opaque")
        document.getElementById("i1").classList.add("transparent")
    }
    if (document.getElementById('1.2').checked==false) {
        document.getElementById("i2").classList.remove("opaque")
        document.getElementById("i2").classList.add("transparent")
    }
    if (document.getElementById('1.3').checked==false) {
        document.getElementById("i3").classList.remove("opaque")
        document.getElementById("i3").classList.add("transparent")
    }
    if (document.getElementById('1.4').checked==false) {
        document.getElementById("i4").classList.remove("opaque")
        document.getElementById("i4").classList.add("transparent")
    }
})
document.getElementById("cf_controls").addEventListener("click", function (event) {
    if (document.getElementById('1.1').checked) {
    document.getElementById("i1").classList.add("opaque")
    document.getElementById("i1").classList.remove("transparent")
    }
    if (document.getElementById('1.2').checked) {
    document.getElementById("i2").classList.add("opaque")
    document.getElementById("i2").classList.remove("transparent")
    }
    if (document.getElementById('1.3').checked) {
    document.getElementById("i3").classList.add("opaque")
    document.getElementById("i3").classList.remove("transparent")
    }
    if (document.getElementById('1.4').checked) {
    document.getElementById("i4").classList.add("opaque")
    document.getElementById("i4").classList.remove("transparent")
    }
})

