import React from 'react';

export default class DailyMenu extends React.Component {

  constructor() {
    super();
    this.facebook_post_id = null;
    this.accessToken = null;
    this.postInfo = null;
  }

  componentDidMount() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: '',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
      });

      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          this.accessToken = response.authResponse.accessToken;
          console.log(this.accessToken)
          FB.api(
            "/me/feed",
            "GET",
            function (response) { console.log(JSON.stringify(response)); }
          );
        } else {
          console.log('not_authorized');
        }
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <h3>{this.postInfo}</h3>
    )
  }
}