import React from 'react';

export default class DailyMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      postId: null
    }
    this.accessToken = null;
    this.postInfo = null;
  }

  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2'
      });

      FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
          this.accessToken = response.authResponse.accessToken;
          FB.api(
            "/bistroagi5/feed?limit=5",
            "GET", (response) => {
              var post = filterMenu(response["data"])[0];
              console.log('1 ' + JSON.stringify(post['id']));
              if (post != null) {
                this.setState({postId: post["id"]});
              } else {
                console.log('No suitable posts found');
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

  // generateURL() {
  //   return `https://www.facebook.com/agi-agi/posts/${this.state.postId}`
  // }

  render() {
    if (this.state && this.state.postId ) {
      return (
        `poop ${this.state.postId}`
      )
    } else {
      return (
        'Poop'
      )
    }
  }
}

function filterMenu(props) {
  const facebookPost = props.map((p) => {
    console.log('filterMenu' + JSON.stringify(p));
    if (p.hasOwnProperty("message")) {
      return p
    }
  });
  return facebookPost
}

// function generateURL(postName, postID) {
//   console.log('generateURL' + postName + postID);
//   return `https://www.facebook.com/notes/agi-agi/${postName}/${postID}/`
// }
