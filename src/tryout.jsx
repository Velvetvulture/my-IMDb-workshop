import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

const ModalDiv = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;
// add a property index to each object to know which object is being selected
const data = [
  {
    image:
      "https://townsquare.media/site/442/files/2018/12/sonic-movie-poster-high-res.png?w=2400&h=3556&q=75",
    video: "https://www.youtube.com/embed/szby7ZHLnkA?autoplay=1"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZThkZTVkMTktZGQ0Ny00ZDkyLWJmYzctZjJhYWIyMjhjMDUzXkEyXkFqcGdeQXVyODc5MDgxNzE@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
    video: "https://www.youtube.com/embed/_qyw6LC5pnE?autoplay=1"
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZWI1ZmJkMTItMzYyOC00YjRlLTkxNjktMjhiOGQzNDgxYmI2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    video: "https://www.youtube.com/embed/BIhNsAtPbPI?autoplay=1"
  }
];
class Sources extends Component {
  constructor() {
    super();
    this.state = {
      showVideo: false,
      currentVideo: 0
    };
  }
  launchVideo = vid => {
    this.setState({ showVideo: true });
  };
  closeVideo = () => {
    this.setState({ showVideo: false });
  };
  render = () => {
    console.log("data", data);
    return (
      <div>
        <div>
          {data.map(item => {
            console.log("item", item);
            return (
              <button onClick={this.launchVideo} className="videobtn">
                <img
                  src={item.image}
                  width="100%"
                  height="100%"
                  object-fit="cover"
                />
              </button>
            );
          })}
        </div>
        <div>
          {/* <button onClick={this.launchVideo} className="videobtn">
            <img
              src={data[0].image}
              width="100%"
              height="100%"
              object-fit="cover"
            />
          </button> */}
          <Modal
            open={this.state.showVideo}
            onClose={this.closeVideo}
            onBackdropClick={this.closeVideo}
            onEscapeKeyDown={this.closeVideo}
          >
            <ModalDiv>
              <iframe
                width="1400"
                height="650"
                src={data[this.state.currentVideo].video} //from the state
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </ModalDiv>
          </Modal>
        </div>
      </div>
    );
  };
}

export default Sources;
<iframe
  width="1519"
  height="586"
  src="https://www.youtube.com/embed/_qyw6LC5pnE"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;

<iframe
  width="1519"
  height="586"
  src="https://www.youtube.com/embed/BIhNsAtPbPI"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
