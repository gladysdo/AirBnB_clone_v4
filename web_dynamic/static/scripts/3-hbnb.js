$(document).ready(function() {
  // Function to check the API status and update the div#api_status
  function checkApiStatus() {
    // Make a GET request to the API endpoint
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/status/',
      type: 'GET',
      success: function(data) {
        // Check if the status is "OK"
        if (data.status === 'OK') {
          // If "OK", add the class "available" to the div#api_status
          $('#api_status').addClass('available');
        } else {
          // If not "OK", remove the class "available" from the div#api_status
          $('#api_status').removeClass('available');
        }
      },
      error: function() {
        // In case of an error, remove the class "available" from the div#api_status
        $('#api_status').removeClass('available');
      }
    });
  }

  // Function to load places from the API and display them
  function loadPlaces() {
    // Make a POST request to the places_search endpoint
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: '{}',
      success: function(data) {
        // Clear existing articles in the places section
        $('.places article').remove();

        // Loop through the results and create article tags for each place
        for (let place of data) {
          let article = $('<article>');
          article.append(`<div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div>`);
          article.append(`<div class="information"><div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div><div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div><div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div></div>`);
          article.append(`<div class="description">${place.description}</div>`);
          $('.places').append(article);
        }
      },
      error: function() {
        console.error('Error loading places from the API.');
      }
    });
  }

  // Call the function to check the API status initially
  checkApiStatus();

  // Set up an interval to check the API status every 5 seconds (adjust as needed)
  setInterval(checkApiStatus, 5000);

  // Call the function to load places initially
  loadPlaces();

  // Set up an interval to reload places every 60 seconds (adjust as needed)
  setInterval(loadPlaces, 60000);
});

