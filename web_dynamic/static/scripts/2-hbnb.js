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

  // Call the function to check the API status initially
  checkApiStatus();

  // Set up an interval to check the API status every 5 seconds (adjust as needed)
  setInterval(checkApiStatus, 5000);
});
