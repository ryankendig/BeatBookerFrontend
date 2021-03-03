import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../App.css";
import Booking from "./Booking";

class Artist extends Component {
  state = {
    bookings: [],
  };
  //   generateArtistInfo = () => {
  //     return this.props.selected.map((artist) => {
  //       return (
  //         <article className="artist-page">
  //           <h1>{artist.name}</h1>
  //           <p>Bio: {artist.bio}</p>
  //           <p>{artist.video_url}</p>
  //         </article>
  //       );
  //     });
  //   };
  render() {
    return (
      <div>
        <div className="container center">
          <div className="card">
            <h2>Featured</h2>
            <hr />
            <h1>{this.props.selected.name}</h1>
            <p>Bio: {this.props.selected.bio}</p>
            <p>Genre: {this.props.selected.genre}</p>
            <div className="video">
              <ReactPlayer url={this.props.selected.video_url} />
            </div>
            <button onClick={this.props.handleBack}>Back to All Artists</button>
          </div>
          <div>
            {
              <Booking
                bookings={this.state.bookings}
                selected={this.props.selected}
                artists={this.props.artists}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Artist;

{
  /* <div class="container center">
  <div class="card">
    <h2>Card</h2>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <button>Next</button>
  </div>
</div>; */
}
