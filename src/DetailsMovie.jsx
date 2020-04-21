import React, { Component, useState } from "react";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import RibbonButton from "./Components/RibbonButton.jsx";
import StreamingButton from "./Components/StreamingButton.jsx";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url('${(props) => props.poster}');
`;
const SideBar = styled.div`
  opacity: 0.5;
`;
const Main = styled.div`
  display: grid;
  grid-template-rows: 120px 340px 300px;
  background-color: white;
`;
const TitleWrapper = styled.div`
  background-color: #333;
  padding: 20px 0 14px 0;
  position: relative;
`;
// const RibbonButton = styled.button`
//   position: absolute;
//   color: black;
//   /* background-color: #ead838; */
//   top: 28px;
//   left: 0;
// `;
const TitleBar = styled.div`
  font: 38px Arial, sans-serif;
  font-weight: normal;
  color: #fff;
  padding-bottom: 0px;
  margin-left: 52px;
`;
const SubTitleBar = styled.div`
  font-size: 13px;
  color: silver;
  font-family: Verdana, Arial, sans-serif;
  margin-left: 52px;
`;
const ImageAndTrailerBar = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-column-gap: 3px;
  background-color: darkgray;
  position: relative;
`;
const MovieInfoBar = styled.div`
  color: black;
  padding: 18px 20px;
  font-family: Verdana, Arial, sans-serif;
  font-size: 14px;
`;
const PlotSummary = styled.div`
  padding-bottom: 16px;
  line-height: 18px;
`;
const CreditSummary = styled.div`
  padding-bottom: 5px;
  & > h4 {
    display: inline;
  }
`;
const ModalVideoDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: none;
  outline: 0;
`;
const ModalPictureDiv = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: none;
  outline: 0;
`;
const PreviousButton = styled.button`
  position: absolute;
  top: 50%;
  left: -60px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -60px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const PlayCircle = styled.img`
  width: 90px;
  color: black;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
`;
const BlackCloud = styled.div`
  background: black;
  position: absolute;
  height: 15%;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -15px 35px 20px black;
`;
const DivWithTheVideo = styled.div`
  position: relative;
  overflow: hidden;
`;
const DivWithTheCircle = styled.div`
  left: 25px;
  position: absolute;
  bottom: 110px;
  z-index: 1;
`;

class DetailsMovie extends Component {
  constructor() {
    super();
    this.state = { showVideo: false, showPicture: false, currentPicture: 0 };
  }
  addToWatchlist = () => {
    this.props.addToWatchlist(this.props.movie);
  };
  launchVideo = () => {
    this.setState({ showVideo: true });
  };
  closeVideo = () => {
    this.setState({ showVideo: false });
  };
  launchPictures = () => {
    this.setState({ showPicture: true });
  };
  closePictures = () => {
    this.setState({ showPicture: false });
  };
  previousPicture = () => {
    if (!this.props.movie.pictures[this.state.currentPicture - 1]) return;
    this.setState({ currentPicture: this.state.currentPicture - 1 });
  };
  nextPicture = () => {
    if (!this.props.movie.pictures[this.state.currentPicture + 1]) return;
    this.setState({ currentPicture: this.state.currentPicture + 1 });
  };
  handleModalKeyDown = (event) => {
    if (event.keyCode === 37) {
      this.previousPicture();
    }
    if (event.keyCode === 39) {
      this.nextPicture();
    }
  };
  render = () => {
    const {
      id,
      stream,
      title,
      year,
      rating,
      pictures,
      runningTime,
      director,
      type,
      mainStars,
      summary,
      video,
      videoPoster,
      poster,
    } = this.props.movie;

    return (
      <Wrapper poster={poster}>
        <SideBar />
        <Main>
          <TitleWrapper>
            <RibbonButton
              onClick={this.addToWatchlist}
              title="Click to add to Watchlist"
            />
            <TitleBar>
              {title}
              <span className="title-year"> ({year})</span>
            </TitleBar>
            <SubTitleBar>
              {rating}| {runningTime}| {type}
            </SubTitleBar>
          </TitleWrapper>
          <ImageAndTrailerBar>
            <div>
              <img
                className="image-video"
                src={poster}
                onClick={this.launchPictures}
              />
              <Modal
                open={this.state.showPicture}
                onClose={this.closePictures}
                onBackdropClick={this.closePictures}
                onEscapeKeyDown={this.closePictures}
              >
                <ModalPictureDiv onKeyDown={this.handleModalKeyDown}>
                  {this.state.currentPicture !== 0 && (
                    <PreviousButton onClick={this.previousPicture}>
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
                  <button className="close" onClick={this.closePictures}>
                    &times;
                  </button>
                  <img
                    className="image-modal"
                    src={pictures[this.state.currentPicture]}
                  />
                  {this.state.currentPicture !== pictures.length - 1 && (
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
                </ModalPictureDiv>
              </Modal>
            </div>
            <DivWithTheVideo>
              <BlackCloud></BlackCloud>
              <DivWithTheCircle>
                <PlayCircle src="/whitePLayButton.png" />
              </DivWithTheCircle>
              <img
                src={videoPoster}
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
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </ModalVideoDiv>
              </Modal>
            </DivWithTheVideo>
          </ImageAndTrailerBar>
          <MovieInfoBar>
            <PlotSummary>{summary}</PlotSummary>
            <CreditSummary>
              <h4>Director: </h4>
              {director}
            </CreditSummary>
            <CreditSummary>
              <h4>Stars: </h4> {mainStars}
            </CreditSummary>
            <div>
              <StreamingButton stream={stream} />
            </div>
          </MovieInfoBar>
        </Main>
        <SideBar />
      </Wrapper>
    );
  };
}

export default DetailsMovie;
