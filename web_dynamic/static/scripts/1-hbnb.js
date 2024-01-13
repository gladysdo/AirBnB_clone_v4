$(document).ready(function() {
  // Variable to store Amenity IDs
  var selectedAmenities = {};

  // Function to update the h4 tag with the list of Amenities checked
  function updateAmenitiesList() {
    var selectedAmenitiesList = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(selectedAmenitiesList);
  }

  // Listen for changes on each input checkbox tag
  $('.amenities input[type="checkbox"]').change(function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    // If the checkbox is checked, store the Amenity ID in the variable
    if ($(this).prop('checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      // If the checkbox is unchecked, remove the Amenity ID from the variable
      delete selectedAmenities[amenityId];
    }

    // Update the h4 tag with the list of Amenities checked
    updateAmenitiesList();
  });
});
