window.filterFunction = () => {
    var input, filter, a, b, i;
    input = document.getElementById("mySearchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdownContent");
    a = div.getElementsByTagName("a");
    b = document.getElementById("noMatchFound");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].getAttribute('keywords');
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
} 