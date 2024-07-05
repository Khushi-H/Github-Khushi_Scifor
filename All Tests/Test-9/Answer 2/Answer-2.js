// Get data using fetch api

function fetchApi() {
  fetch("https://dummyjson.com/user/3") // request the url using fetch method & it returns promise..
    // getting response of requested url
    .then((res) => {
      return res.json(); // returns javascript object
    })
    .then((data) => {
      var formattedData = JSON.stringify(data, null, 2); // returns formatted data of previous promise
      console.log(formattedData); // shows output on console
      document.getElementById("container").innerHTML =
        "User-id:3 info:-" + "<br>" + formattedData; // shows output on browser
    });
}
