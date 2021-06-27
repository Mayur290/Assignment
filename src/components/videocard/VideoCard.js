import React, { useEffect } from "react";
import "./VideoCard.css";
import HeartOff from "../../static/heart_off.png";
import HeartOn from "../../static/heart_on.png";

function VideoCard(props) {
  useEffect(() => {
    // console.log(props.data.title);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function pushFavfun(favtitle) {
    props.pushFav(favtitle);
  }
  return (
    <div className="videoCard" onClick={props.onClick}>
      <img src={`${props.data.thumbnailUrl}`} alt="video_card" />
      <div className="top-right">
        {props.favourites && props.favourites.includes(props.data.title) ? (
          <img
            src={HeartOn}
            onClick={() => pushFavfun(props.data.title)}
            alt="heart_icon"
          />
        ) : (
          <img
            src={HeartOff}
            onClick={() => pushFavfun(props.data.title)}
            alt="heart_icon"
          />
        )}
      </div>

      <div className="bottom-left">
        <h3>{props.data.title}</h3>
        <p className="videoCard_stats">
          {truncate(props.data.description, 82)}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
