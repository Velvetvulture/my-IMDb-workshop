const cheerio = require("cheerio");
const axios = require("axios");
const showTimes = async date => {
  let showTimeArr = [];
  await axios
    .get(
      `https://www.imdb.com/showtimes/title/tt6751668?date=2020-03-${date}&ref_=shtt_dt`
    )
    .then(response => {
      const $ = cheerio.load(response.data);
      showTimeArr = $("div.list_item")
        .map((i, elem) => {
          return {
            name: $(elem)
              .find(".fav_box")
              .text()
              .trim(),
            address: $(elem)
              .find('[itemprop="streetAddress"]')
              .text()
              .trim(),
            showtimes: $(elem)
              .find("div.showtimes")
              .text()
              .trim()
          };
        })
        .get();
    });
  return showTimeArr;
};

import React, { Component } from "react";
const ShowTime = ({ theatre }) => {
  return (
    <div>
      <div>Name: {theatre.name}</div>
      <div>Address: {theatre.address}</div>
      <div>Showtimes: {theatre.showtimes}</div>
    </div>
  );
};
class App extends Component {
  constructor() {
    super();
    this.state = { showtimes: "" };
  }
  getShowtimes = async date => {
    const response = await fetch(`/showtimes/?date=${date}`);
    const showtimes = await response.text();
    console.log("responsebody", showtimes);
    this.setState({ showtimes: JSON.parse(showtimes) });
  };
  render = () => {
    return (
      <div>
        <button onClick={() => this.getShowtimes(15)}>15</button>
        <button onClick={() => this.getShowtimes(16)}>16</button>
        <button onClick={() => this.getShowtimes(17)}>17</button>
        {this.state.showtimes &&
          this.state.showtimes.map(theatre => {
            return <ShowTime theatre={theatre} />;
          })}
      </div>
    );
  };
}
export default App;

app.get("/showtimes", async (req, res) => {
  console.log("req to showtime");
  console.log(req.query.date);
  const showtimes = await showTimes(req.query.date);
  console.log(showtimes);
  res.send(JSON.stringify(showtimes));
});
