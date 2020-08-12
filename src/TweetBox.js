import React, { useState } from 'react';
import './TweetBox.css';
import { Button, Avatar } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Md Amir Gauhar',
      username: 'gauharamir',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEFSpm1vR8P_g/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=8LOWd1fTM9iLVaSroGXPfDvxP_cLi5cvkhbwe0on2Yk',
    });

    setTweetImage('');
    setTweetMessage('');
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            alt="Amir"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEFSpm1vR8P_g/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=8LOWd1fTM9iLVaSroGXPfDvxP_cLi5cvkhbwe0on2Yk"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
