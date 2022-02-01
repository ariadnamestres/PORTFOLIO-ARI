function myFunction() {
  //   alert("ari");
  let divStyle = document.getElementById("myTopnavresponsive").style.display;
  if (divStyle == "flex") {
    document.getElementById("myTopnavresponsive").style.display = "none";
  } else {
    document.getElementById("myTopnavresponsive").style.display = "flex";
  }
}
