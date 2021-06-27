import React, { useEffect, useState } from "react";
import VideoCard from "../videocard/VideoCard.js";
import Modal from "../modals/Modal";
import "./GridDashboard.css";
import axios from "axios";

function GridDashboard(props) {
  const [gridDashboard, setGridDashboard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    tags: "",
    videolink: "",
  });

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    console.log("tag is " + props.selectedTag);
  });

  const getAllData = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    };
    const response = await axios.post(
      "https://videoapi-dot-virtualeventdemo.el.r.appspot.com/",
      { headers }
    );
    console.log(response.data.result);
    setGridDashboard(response.data.result);
  };

  const pushFav = (pushfav) => {
    props.pushFav(pushfav);
  };

  const openModal = (d) => {
    setShowModal((prev) => !prev);
    setData({
      videolink: d.videolink,
      title: d.title,
      description: d.description,
      tags: d.tags,
    });
  };

  return (
    <div className="results">
      {gridDashboard.length > 0 &&
        props.selectedTag.length === 0 &&
        gridDashboard.map((item, index) => {
          return (
            <VideoCard
              onClick={() => openModal(item)}
              data={item}
              key={index}
              pushFav={pushFav}
            />
          );
        })}

      {gridDashboard.length > 0 &&
        props.selectedTag.length > 0 &&
        gridDashboard.map((item, index) => {
          if (item.tags.includes(props.selectedTag)) {
            return (
              <VideoCard
                onClick={() => openModal(item)}
                data={item}
                key={index}
                pushFav={pushFav}
                favourites={props.favourites}
              />
            );
          }
        })}

      {gridDashboard.length > 0 &&
        props.selectedTag == "fav" &&
        gridDashboard.map((item, index) => {
          if (props.favourites.includes(item.title)) {
            return (
              <VideoCard
                onClick={() => openModal(item)}
                data={item}
                key={index}
                pushFav={pushFav}
                favourites={props.favourites}
              />
            );
          }
        })}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        dataModal={data}
      />
    </div>
  );
}

export default GridDashboard;
