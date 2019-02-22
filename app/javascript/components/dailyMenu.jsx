import React from 'react';

export default class DailyMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      postId: null,
      postName: null,
      postIsNote: null
    }
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
          FB.api(
            "/bistroagi5/feed?limit=5",
            "GET",
            function (response) {
              var post = filterMenu(response["data"])[0];
              if (post != null) {
                this.setState({postId: post["id"]});
                this.setState({postName: encodeURIComponent(post["message"])});
              } else {
                console.log('No suitable posts found')
              }
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

  generateURL() {
    // If post is a note should use different url for rendering notes
    console.log('generateURL' + this.state.postName + this.state.postId);
    return `https://www.facebook.com/notes/agi-agi/posts/${this.state.postId}/`
  }

  render() {
    return (
      <div className="fb-post"
        data-href={this.generateURL}
        data-show-text="true">
      </div>
    )
  }
}

function filterMenu(props) {
  const facebookPost = props.map((p) => {
    if (p.hasOwnProperty("message") && p["message"].includes("МЕМЮ")) {
      return p
    }
  });
  return facebookPost
}

// function generateURL(postName, postID) {
//   console.log('generateURL' + postName + postID);
//   return `https://www.facebook.com/notes/agi-agi/${postName}/${postID}/`
// }
