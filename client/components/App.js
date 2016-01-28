class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      listOfVideos: exampleVideoData
    };
  }

  changeVideo(e) {
    this.setState({
      currentVideo: exampleVideoData[e.target.id]
    });
  } 

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList theVideos={this.state.listOfVideos} changeVideoFn={this.changeVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));