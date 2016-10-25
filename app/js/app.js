window.mapLibLoaded = false;

window.App = {
    Models: {},
    Collections: {},
    Views: {},
    map: null,

    start: function () {
        router = new App.Router();

        router.on('route:main', function () {
            console.log('App started.')
        });

        Backbone.history.start();
    },

    loadGoogleMapsLib: function (lat, lng) {
        var self = this;
        var apiKey = '';
        var url = 'https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&libraries=places,drawing,geometry,visualization';

        if (!window.mapLibLoaded) {
            $.ajax({
                url: url,
                dataType: "script",
                async: false,
                success: function() {
                    console.log('Google Maps V3 Library with Google Places loaded...');
                    window.mapLibLoaded = true;
                    if (window.mapInit) {
                        window.mapInit(lat, lng);
                    }
                }
            });
        } else {
            console.log('Google Maps V3 Library with Google Places already loaded...');
            if (window.mapInit) {
                window.mapInit(lat, lng);
            }
        }
    },
};

window.App.eventHandler = _.extend({}, Backbone.Events);