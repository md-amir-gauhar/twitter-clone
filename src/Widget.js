import React from 'react';
import './Widget.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon className="widget__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widget_widgetContainer">
        <h2>Whats's happening</h2>

        <TwitterTweetEmbed tweetId={"858551177860055040"}/>

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName="cleverQazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "reactjs is awesome", via: 'cleverqazi'}}
        />
      </div>
    </div>
  );
}

export default Widget;
