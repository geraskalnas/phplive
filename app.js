function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  //var code = document.getElementById("code").contentWindow.document;
  var code = document.getElementById("code");

  
  document.body.onkeyup = function() {
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "tr.php?data="+JSON.stringify({"html": html.value, "js": js.value, "css": css.value}), true);
  xhttp.send();
    //console.log();
    console.log(html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>");
    code.contentWindow.location.reload(true);
    /*code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();*/
  };
}

compile();
