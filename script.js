document.querySelector(".spinBtn").onclick = function() {
    document.querySelector(".wheel").style.transform = "rotate(" + Math.ceil(Math.random() * 3600) + "deg)";
};
