var button = document.getElementById('btn1');
// when user clicks on button, we want to call function start search
button.addEventListener('click', startSearch);

function startSearch(event) {
  // when we are starting the search, we want to pick up the value
  // input field from user
  var userInputValue = document.getElementById('mySearch').value;
  // this is base API url on which we can add what user wanted
  var urlBase = 'http://service.tib.eu/ts4tib/api/ontologies'
  // if user did not provide name in input, we want to stop executing
  if (userInputValue === null || userInputValue === '') return;
  // if we are still in this function, append what user typed onto urlBase
  var searchUrl = urlBase + userInputValue;
  // call function which actually executes the remote call 
  performSearch(searchUrl);
}

function performSearch(searchUrl) {
  // this could be jQuery getJSON if you so prefer
  // here it is vanila JS solution of how to get data via AJAX call
  var requestData = new XMLHttpRequest();
  // because AJAX is always async, we need to wait until file is loaded
  // once it is loaded we want to call function handleResults
  requestData.addEventListener('load', handleResults);
  requestData.open('GET', searchUrl);
  requestData.send();
}

function handleResults() {
  // once we get response, because we used vanilla JS, we got response
  // available in this context as "this.response", however it is type string
  // we need to take that string and parse it into JSON
  var responseJSON = JSON.parse(this.response);
  // if there is error, we didn't find any character
  if (responseJSON.error) console.log('Character not found');
  else {
    var html = '';
    responseJSON.results.forEach(function (result)  {
      html += '<h2>' + result.name + '</h2>';
      // html += "<h2>" + demo.biography.alter-egos + "</h2>";
      html += '<h2>Power Stats ' + result.powerstats.combat + '</h2>';
      html += '<p>Connections ' + result.connections.relatives + '</p>';
      html += '<p>Appearance ' + result.appearance.gender + '</p>';
      html += '<p>Work ' + result.work.base + '</p>';
      // html += ' Profile <img src ' + result.image.url + '>';
    })
    // this is bad thing to do, injecting html like that into DOM
    // but let's leave this lesson for later stage
    // so, let's take this html and drop it onto the page
    document.getElementById('demo').innerHTML = html;
  }
}