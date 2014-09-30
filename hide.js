// Javascript to hide divs

  function hide()
  {

    var size = document.getElementsByName("size");
    var msg = "";
    msg = "Current Price: $";
    if (size[0].checked === true) {
       price = 12.99;
       msg = msg + price.toString();
       document.getElementById("div5").style.display = "block";
       document.getElementById("div5").innerHTML = msg;
       document.getElementById("div1").style.display = "none";
       document.getElementById("div2").style.display = "block";
    }
    else if (size[1].checked === true) {
       price = 14.99;
       msg = msg + price.toString();
       document.getElementById("div5").style.display = "block";
       document.getElementById("div5").innerHTML = msg;
       document.getElementById("div1").style.display = "none";
       document.getElementById("div2").style.display = "block";
    }
    else if (size[2].checked === true) {
       price = 16.99;
       msg = msg + price.toString();
       document.getElementById("div5").style.display = "block";
       document.getElementById("div5").innerHTML = msg;
       document.getElementById("div1").style.display = "none";
       document.getElementById("div2").style.display = "block";
    }
    else {
       msg = "YO, choose a size biotch!";
       document.getElementById("div5").style.display = "block";
       document.getElementById("div5").innerHTML = "<h1 class='error-message'>" + msg + "</h1>";
    }


  };
  
    function hide2()
  {
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
  };

    function hide3()
  {
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
  };


// Javascript to add pizza name

function addName() {
    document.getElementById("name?").style.display = "none";

}

