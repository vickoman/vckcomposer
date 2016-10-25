window.addEventListener('load', function() {

    var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
    var login = localStorage.getItem('login');
    var token = localStorage.getItem('id_token');

    if(login && token){
        return show_profile_info();
    } else {
        lock.show();
    }

    lock.on("authenticated", function(authResult) {
        lock.getProfile(authResult.idToken, function(error, profile) {
            if (error) {
                // Handle error
                return;
            }
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('login', true);

            // Display user information
            show_profile_info(profile);

        });
    });

    //retrieve the profile:
    var retrieve_profile = function() {
        var id_token = localStorage.getItem('id_token');
        if (id_token) {
            lock.getProfile(id_token, function(err, profile) {
                if (err) {
                    return alert('There was an error getting the profile: ' + err.message);
                }
                // Display user information
                show_profile_info();
            });
        }
    };

   function show_profile_info() {
        if(document.querySelector('.auth0-lock-container')){
            document.querySelector('.auth0-lock-container').style.display = 'none';
        }
        /* Show Application */
        document.querySelector('.sg-header').style.display = 'block';
        document.querySelector('#sg-vp-wrap').style.display = 'block';
    };

    var logout = function() {
        localStorage.removeItem('id_token');
        window.location.href = "/";
    };

    retrieve_profile();
});
