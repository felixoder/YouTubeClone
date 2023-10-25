import React, { Component } from 'react';
import { Main } from './Main';

export class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      
    };
  }

  async fetchChannelVideos() {
    const apiKey = 'AIzaSyCPuMDV8gFD1qKwitIvxAesR6thbyT53aY'; // Replace with your actual YouTube Data API key

    // Fetch the videos from the "uploads" playlist of the channel
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${this.props.category}&part=snippet&type=video&maxResults=100`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.items) {
        this.setState({
          videos: data.items,
        });
      }
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  }

  async componentDidMount() {
    this.fetchChannelVideos(); 
  }

  render() {
    const { videos } = this.state;

    return (
      <div className="container">
        <div className="row">
            <h1 className='text-center'>DebayanTube-- best You Tube Videos for you</h1>
          {videos.map((video) => (
            <div className="col-md-4" key={video.id}>
              <Main
                title={video.snippet.title}
                description={video.snippet.description?video.snippet.description.slice(0,88):"..."}
                image={video.snippet.thumbnails.high.url}
                videoId={video.id.videoId}
                
              />
            </div>
          ))}
        </div>
        
      </div>
    );
  }
}

export default Youtube;
