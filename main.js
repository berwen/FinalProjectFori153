// Constants
var FREEBASE_KEY = 'AIzaSyCZq59tSWV_B9DhI7T4k-Tn5PZDJLtkdfc';
// http://api.jquery.com/ready/
$(function() {
  $('#search-freebase').suggest({ 'key': FREEBASE_KEY })
    .bind('fb-select', onFbSelect);
});