import React, { Component, useState } from "react";
import { newMovies } from "./Data.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";

const ModalDiv = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: none;
  outline: 0;
`;
const VideoDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const LeftButton = styled.button`
  position: absolute;
  left: -30px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const RightButton = styled.button`
  position: absolute;
  right: -30px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const ListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

class NewTrailers extends Component {
  constructor() {
    super();
    this.state = {
      showVideo: false,
      currentIndex: 3,
      currentVid: 3,
    };
  }
  launchVideo = (vid) => {
    this.setState({ showVideo: true, currentVid: vid });
  };
  closeVideo = () => {
    this.setState({ showVideo: false });
  };
  previousVideo = () => {
    const lastIndex = newMovies.length - 1;
    if (this.state.currentIndex === 0) {
      this.setState({ currentIndex: lastIndex });
      return;
    }
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  };
  nextVideo = () => {
    const lastIndex = newMovies.length - 1;
    if (this.state.currentIndex === lastIndex) {
      this.setState({ currentIndex: 0 });
      return;
    }
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  };
  render = () => {
    const previousIdx =
      this.state.currentIndex == 0
        ? newMovies.length - 1
        : this.state.currentIndex - 1;
    const nextIdx = (this.state.currentIndex + 1) % newMovies.length;
    console.log("newMovies", newMovies);
    return (
      <div>
        <div className="component-name">New trailers</div>
        <VideoDiv>
          <ListDiv>
            <div
              onClick={() => {
                this.launchVideo(previousIdx);
              }}
              className="videobtn"
            >
              <img
                className="cover"
                src={newMovies[previousIdx].image}
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </div>
            <div
              onClick={() => {
                this.launchVideo(this.state.currentIndex);
              }}
              className="videobtn"
            >
              <img
                className="cover"
                src={newMovies[this.state.currentIndex].image}
                width="100%"
                height="100%"
                object-fit="cover"
              />
            </div>
            <div>
              <button
                onClick={() => {
                  this.launchVideo(nextIdx);
                }}
                className="videobtn"
              >
                <img
                  className="cover"
                  src={newMovies[nextIdx].image}
                  width="100%"
                  height="100%"
                  object-fit="cover"
                />
              </button>
            </div>
          </ListDiv>
          <LeftButton onClick={this.previousVideo}>
            <svg
              width="24"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              role="presentation"
            >
              <path d="M18.378 23.369c.398-.402.622-.947.622-1.516 0-.568-.224-1.113-.622-1.515l-8.249-8.34 8.25-8.34a2.16 2.16 0 0 0 .548-2.07A2.132 2.132 0 0 0 17.428.073a2.104 2.104 0 0 0-2.048.555l-9.758 9.866A2.153 2.153 0 0 0 5 12.009c0 .568.224 1.114.622 1.515l9.758 9.866c.808.817 2.17.817 2.998-.021z"></path>
            </svg>
          </LeftButton>
          <RightButton onClick={this.nextVideo}>
            <svg
              width="24"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              role="presentation"
            >
              <path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path>
            </svg>
          </RightButton>
        </VideoDiv>
        {/* <button onClick={this.launchVideo} className="videobtn">
            <img
              src={newMovies[0].image}
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
              width="1250"
              height="650"
              src={newMovies[this.state.currentVid].video} //from the state
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalDiv>
        </Modal>
      </div>
    );
  };
}

export default NewTrailers;
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
<iframe
  width="974"
  height="557"
  src="https://www.youtube.com/embed/XEMwSdne6UE"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="1519"
  height="586"
  src="https://www.youtube.com/embed/R228yPrwqTo"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="1519"
  height="586"
  src="https://www.youtube.com/embed/tlwzuZ9kOQU"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
<iframe
  width="1519"
  height="586"
  src="https://www.youtube.com/embed/tGpTpVyI_OQ"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;
