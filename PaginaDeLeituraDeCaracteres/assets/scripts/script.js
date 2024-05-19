setInterval(function() {
    document.getElementById("char-total").innerText = document.getElementById("char-text").value.length;
}, 100)

function deleteText() {
    document.getElementById("char-text").value = "";
}