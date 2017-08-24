var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
xhttp.open("GET", "http://169.254.1.2:8080/info", true); //true for async
xhttp.send();


//JQuery version

$.get(
    "http://169.254.1.2:8080/info", {
        paramOne: 1,
        paramX: 'abc'
    },
    function (data) {
        alert('page content: ' + data);
    }
);