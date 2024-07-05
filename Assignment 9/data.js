// Get Data using AJAX
function DataWithAjax() {
  //call to ajax
  var request = new XMLHttpRequest();
  request.open("GET", "https://dummyjson.com/user/1");
  // calls whenever state change
  request.onreadystatechange = function () {
    // calls whenever state change
    if (this.readyState == 4 && this.status == 200) {
      //complete and successfull
      console.log(this.responseText); //shows output on console

      document.getElementById("dataContainer").innerHTML = this.responseText; //shows output on browser
    }
  };
  request.send();
}

// Get data using fetch api

function fetchApi() {
  fetch("https://dummyjson.com/user/1") // request the url using fetch method & it returns promise..
    // getting response of requested url
    .then((res) => {
      return res.json(); // returns javascript object
    })
    .then((data) => {
      var formattedData = JSON.stringify(data, null, 2); // returns formatted data of previous promise
      console.log(formattedData); // shows output on console
      document.getElementById("dataContainer").innerHTML = formattedData; // shows output on browser
    });
}
