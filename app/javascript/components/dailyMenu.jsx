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
                var post_id = post["id"].match(/[^_]*$/)
                console.log('post_id ' + post_id);
                this.setState({postId: post_id});
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

  render() {
    if (this.state.postId ) {
      var post_url = `https://www.facebook.com/bistroagi5/posts/${this.state.postId}/`
      return (
        <div className="fb-post"
          data-href={post_url}
          data-show-text="true">
        </div>
      )
    } else {
      return (
        <h2>Please wait</h2>
      )
    }
  }
}

function filterMenu(props) {
  const facebookPost = props.map((p) => {
    if (p.hasOwnProperty("message")) {
      return p
    }
  });
  return facebookPost
}
