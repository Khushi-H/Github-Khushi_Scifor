// Get Data using AJAX
function DataWithAjax() {
  //call to ajax
  var request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/user/2");
  // calls whenever state change
  request.onreadystatechange = function () {
    // calls whenever state change
    if (this.readyState == 4 && this.status == 200) {
      //complete and successfull
      var users = JSON.parse(request.responseText); // Parse JSON response
      console.log(this.responseText); //shows output on console

      document.getElementById("container").innerHTML =
        "User-id:2 info:" + "<br>" + this.responseText; //shows output on browser
    }
  };
  request.send();
}
