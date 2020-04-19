import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Checkout from "./checkout.jsx";
import { listOfMovies } from "./Data.jsx";
import { withStyles } from "@material-ui/core/styles";

const MovieDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  position: relative;
`;
const ImageInTheModal = styled.img`
  margin: 20px;
  :hover {
    filter: brightness(0.8);
  }
  cursor: pointer;
`;
const MovieWrapper = styled.div`
  /* transition: transform 0.2s ease-in-out 0s; */
  font-family: Roboto, Helvetica, Arial, sans-serif;
  background-color: whitesmoke;
  height: 390px;
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
    height: 275px;
    /* transition: transform 0.2s ease-in-out 0s; */
  }
  /* & > img:hover {
    transform: scale(1.1); 
  } */
`;
const TitleStyle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 8px;
  margin-left: 5px;
  border: none;
  height: 40px;
`;
const LeftButton = styled.button`
  position: absolute;
  left: -30px;
  top: 40%;
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
  top: 40%;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: 0;
  padding: 15px;
  border: 0.6px solid white;
  & > svg:hover {
    fill: yellow;
  }
`;
const MainDivMOdal = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 500px;
  height: 350px;
  outline: 0;
  display: flex;
  justify-content: flex-start;
  padding: 5px;
  & > button {
    margin-right: 8px;
  }
`;
const RentOrBuyWrapperDiv = styled.div`
  margin: 15px;
  & > div {
    margin-bottom: 4px;
    font-weight: 400;
    font-size: 1.6rem;
    font-family: Roboto, Arial, sans-serif;
  }
  & > button {
    text-align: center;
    font-family: Roboto, Arial, sans-serif;
    background-color: lightblue;
    border: none;
    font-size: 1.1rem;
    font-weight: 550;
    width: 130px;
    height: 35px;
    border-radius: 3px;
    margin: 0;
  }
`;
const DivWithTheButton = styled.div`
  padding: 0px 5px;
  border: none;
`;
const WatchOptionsButton = styled.button`
  color: #5799ef;
  width: 100%;
  border: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  height: 30px;
  background-color: #1a1a1ad4;
  outline: none;
  border-radius: 4px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  :hover {
    background-color: #1a1a1a99;
  }
`;

class MoviesToWatch extends Component {
  constructor() {
    super();
    this.state = {
      firstMovie: 0,
      lastMovie: 6,
      showModal: false,
      showCheckout: false,
    };
  }
  previousSlate = () => {
    this.setState({
      firstMovie: this.state.firstMovie - 6,
      lastMovie: this.state.lastMovie - 6,
    });
  };
  nextSlate = () => {
    this.setState({
      firstMovie: this.state.firstMovie + 6,
      lastMovie: this.state.lastMovie + 6,
    });
  };
  closeModal = () => {
    this.setState({ showModal: false, showCheckout: false });
  };
  launchModal = (index) => {
    this.setState({ showModal: index });
  };
  handlePurchase = () => {
    this.setState({ showCheckout: true });
  };
  // handleMovie = movie => {
  //   const history = useHistory();
  //   return history.push(movie);
  // };

  render = () => {
    const moviesToDisplay = listOfMovies.slice(
      this.state.firstMovie,
      this.state.lastMovie
    );
    return (
      <div>
        <div className="component-name">Top picks</div>
        <MovieDiv>
          {moviesToDisplay.map((movie, index) => {
            return (
              <MovieWrapper>
                <MovieButton
                  onClick={() => this.props.history.push("/movie/" + movie.id)}
                >
                  <img src={movie.poster}></img>
                </MovieButton>
                <TitleStyle>{movie.title}</TitleStyle>
                <DivWithTheButton>
                  <WatchOptionsButton onClick={() => this.launchModal(index)}>
                    Watch options
                  </WatchOptionsButton>
                </DivWithTheButton>
                <Modal
                  open={this.state.showModal === index}
                  onClose={this.closeModal}
                  onBackdropClick={this.closeModal}
                  onEscapeKeyDown={this.closeModal}
                >
                  {this.state.showCheckout ? (
                    <Checkout movie={movie} />
                  ) : (
                    <MainDivMOdal>
                      <button
                        className="close"
                        style={{ color: "silver" }}
                        onClick={this.closeModal}
                      >
                        &times;
                      </button>
                      <ImageInTheModal
                        height="80%"
                        src={movie.poster}
                        onClick={() =>
                          this.props.history.push("/movie/" + movie.id)
                        }
                      ></ImageInTheModal>
                      <div>
                        <RentOrBuyWrapperDiv>
                          <div>Rent</div>
                          <button onClick={this.handlePurchase}>
                            CA$4.99 HD
                          </button>
                        </RentOrBuyWrapperDiv>
                        <RentOrBuyWrapperDiv>
                          <div>Buy</div>
                          <button>CA$14.99 HD</button>
                        </RentOrBuyWrapperDiv>
                      </div>
                    </MainDivMOdal>
                  )}
                </Modal>
              </MovieWrapper>
            );
          })}
          {this.state.firstMovie !== 0 && (
            <LeftButton onClick={this.previousSlate}>
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
          )}
          {this.state.lastMovie !== listOfMovies.length && (
            <RightButton onClick={this.nextSlate}>
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
          )}
        </MovieDiv>
      </div>
    );
  };
}

export default withRouter(MoviesToWatch);
