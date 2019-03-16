function myFunction() {
    var itm = document.getElementById("myList2").lastChild;
    var cln = itm.cloneNode(true);
    document.getElementById("myList1").appendChild(cln);