import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3)
//   }
// }));
// const classes = useStyles();

const MyModal = () => {
  [open, setOpen] = useState(false);
  handleOpen = () => {
    setOpen(true);
  };
  handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={this.launchVideo} className="videobtn">
        <img
          src={
            "https://townsquare.media/site/442/files/2018/12/sonic-movie-poster-high-res.png?w=2400&h=3556&q=75"
          }
          width="100%"
          height="100%"
          object-fit="cover"
        />
      </button>
      <Modal
        open={this.state.showVideo}
        onClose={this.closeVideo}
        onBackdropClick={this.closeVideo}
        onEscapeKeyDown={this.closeVideo}
      >
        <div>
          <video
            controls
            autoPlay
            src="https://imdb-video.media-imdb.com/vi2279456537/1434659607842-pgv4ql-1573556594353.mp4?Expires=1582305045&Signature=cfuDrHhY8hAbCGPOaYEtZOswvZ8UroL4dIIs4VaIdshkJGm5UmQy-SLoVBCQ3MX00ghO~8WHV8UiGM1DojO-HO4tGbxSpaDYypDwp5NO~HxZjoV9J77fdJmcBcwTa1pD28JfAXoPETVoRtA622BMZ~tpRSdPK~S6HL-1BKSjVP6s9G~gy-7fzHCoQEbowbyV68-klZutVNlAo62ZVnHfvefCQjlH~FBsnU1BQWNwzMTnB4KfQobJnK-zyCWRqOR4UqcYBI~JIzGhQqUIJhe2K2YsNOXWYghrvlIOvXj5SfdY3hUgGUM0eX0m96BennFx3iRlSL6dooc6MkIMpUa30A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
          />
        </div>
      </Modal>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      showVideo: false
    };
  }

  launchVideo = () => {
    this.setState({ showVideo: true });
  };
  closeVideo = () => {
    this.setState({ showVideo: false });
  };
  render = () => {
    return <MyModal />;
  };
}

export default App;
