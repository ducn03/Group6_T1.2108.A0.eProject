// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;
     
    alert("Successful login!");
    location.reload();
     
    return false;
    }