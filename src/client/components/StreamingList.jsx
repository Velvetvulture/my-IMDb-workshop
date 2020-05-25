import { connect } from "react-redux";
import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { listOfStreaming } from "../../Data.jsx";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Wrapper = styled.div`
  position: relative;
`;
const WrapperContentDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 5px;
  position: relative;
`;
const ImageDiv = styled.div`
  /* transition: transform 0.2s ease-in-out 0s; */
  font-family: Roboto, Helvetica, Arial, sans-serif;
  background-color: whitesmoke;
`;
const VideoDiv = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
const MovieButton = styled.button`
  padding: 0;
  border: none;
  display: flex;
  :hover > img {
    /* transform: scale(1.08); */
    filter: brightness(0.8);
  }
  :focus {
    outline: none;
  }
  & > img {
    width: 100%;
    height: 440px;
    /* transition: transform 0.2s ease-in-out 0s; */
  }
  /* & > img:hover {
    transform: scale(1.1); 
  } */
`;
const BlackCloud = styled.div`
  background: black;
  position: absolute;
  height: 15%;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -15px 35px 20px black;
`;
const DivWithTheCircle = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 50px;
  z-index: 1;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;
const PlayCircleImg = styled.img`
  width: 100px;
  color: black;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  margin-left: 25px;
`;
const TitleShowDiv = styled.div`
  color: white;
  font-size: 35px;
  margin-left: 145px;
  margin-top: 25px;
`;
const ModalVideoDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: none;
  outline: 0;
`;
const PreviousButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  z-index: 1;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;

class StreamingList extends Component {
  constructor() {
    super();
    this.state = { showVideo: false, currentShow: 0 };
  }

  previousShow = () => {
    if (!listOfStreaming[this.state.currentShow - 1]) return;
    this.setState({ currentShow: this.state.currentShow - 1 });
  };
  nextPicture = () => {
    if (!listOfStreaming[this.state.currentShow + 1]) return;
    this.setState({ currentShow: this.state.currentShow + 1 });
  };
  launchVideo = () => {
    this.setState({ showVideo: true });
  };
  closeVideo = () => {
    this.setState({ showVideo: false });
  };
  render = () => {
    return (
      <Wrapper>
        <div className="component-name">What to stream</div>
        {this.state.currentShow !== 0 && (
          <PreviousButton onClick={this.previousShow}>
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
          </PreviousButton>
        )}
        <WrapperContentDiv>
          <ImageDiv>
            <MovieButton
              onClick={() =>
                this.props.history.push(
                  "/movie/" + listOfStreaming[this.state.currentShow].id
                )
              }
            >
              <img src={listOfStreaming[this.state.currentShow].poster}></img>
            </MovieButton>
          </ImageDiv>
          <VideoDiv>
            <BlackCloud></BlackCloud>
            <DivWithTheCircle>
              <div>
                <PlayCircleImg src="/whitePLayButton.png" />
              </div>
              <TitleShowDiv>
                {listOfStreaming[this.state.currentShow].title}
              </TitleShowDiv>
            </DivWithTheCircle>
            <img
              src={listOfStreaming[this.state.currentShow].videoPoster}
              className="image-video"
              onClick={this.launchVideo}
            />
            <Modal
              open={this.state.showVideo}
              onClose={this.closeVideo}
              onBackdropClick={this.closeVideo}
              onEscapeKeyDown={this.closeVideo}
            >
              <ModalVideoDiv>
                <iframe
                  width="1150"
                  height="560"
                  src={listOfStreaming[this.state.currentShow].video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </ModalVideoDiv>
            </Modal>
          </VideoDiv>
        </WrapperContentDiv>
        {this.state.currentShow !== listOfStreaming.length - 1 && (
          <NextButton onClick={this.nextPicture}>
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
          </NextButton>
        )}
      </Wrapper>
    );
  };
}
export default withRouter(StreamingList);
