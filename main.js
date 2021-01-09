// Page Switcher
$(document).ready(function() {
    function onHash() {
        if(!window.location.hash) {
            return;
        }
        var name = window.location.hash.substr(1),
                el = document.getElementById('page-' + name);
    
        if(el) {					
            document.getElementsByClassName('page-active')[0].className = 'page';
            el.className = 'page page-active';
        }
    };

    // Contacts slide effect
     $('.contacts').hide();

     // Contact expand
     $('.contacts-toggle').click(function() {
         $('.contacts').slideToggle(300);
         return false;
     });
   
    window.onhashchange = onHash;
    onHash();
});

// Google Map loader
let marker;

function initMap() {
    const location = { lat: -27.5262434, lng: 153.083477 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
      mapId: 'f78ce7970d5a8a5f'
    });

    marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Mt Gravatt Goodlife Health clubs",
      animation: google.maps.Animation.DROP,
    });
    marker.addListener("click", toggleBounce);
}

// Map marker bouncing effect
function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}