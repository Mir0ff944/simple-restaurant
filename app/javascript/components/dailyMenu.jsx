import React from 'react';

export default class DailyMenu extends React.Component {

  constructor() {
    super();
    this.postId = null;
    this.accessToken = null;
    this.postInfo = null;
    this.postName = null;
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
          FB.api(
            "/me/feed?limit=10",
            "GET",
            function (response) {
              var post = filterMenu(response["data"])[0];
              this.postId = post["id"];
              this.postName = encodeURIComponent(post["message"]);
            }
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
      <div className="fb-post"
        data-href={generateURL(this.postName, this.postId)}
        data-show-text="true">
      </div>
    )
  }
}

function filterMenu(props) {
  const facebookPost = props.map((p) => {
    if (p.hasOwnProperty("message") && p["message"].includes("Menu") && p["story"].includes("published a note")) {
      return p
    }
  });
  return facebookPost
}

function generateURL(postName, postID) {
  return `https://www.facebook.com/notes/agi-agi/${postName}/${postID}/`
}
