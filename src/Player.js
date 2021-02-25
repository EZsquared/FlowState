import React from 'react';
import ReactDOM from 'react-dom';
import './Player.css';
import createClass from 'create-react-class'


var Player = createClass({
  getInitialState: function() {
    return {
      playStatus: 'play',
      currentTime: 0
    }
  },
  getDefaultProps: function() {
    return {
      track: {
        name: "We Were Young",
        artist: "Odesza",
        album: "Summer's Gone",
        year: 2012,
        artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
        duration: 192,
        source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
      }
    }
  },
  updateTime: function(timestamp) {
    timestamp = Math.floor(timestamp);
    this.setState({ currentTime: timestamp });
  },
  updateScrubber: function(percent) {
    // Set scrubber width
    let innerScrubber = document.querySelector('.Scrubber-Progress');
    innerScrubber.style['width'] = percent;
  },
  changeTrack: function (){

  },
  togglePlay: function() {
    let status = this.state.playStatus;
    let audio = document.getElementById('audio');
    if(status === 'play') {
      status = 'pause';
      audio.play();
      let that = this;
      setInterval(function() {
        let currentTime = audio.currentTime;
        let duration = that.props.track.duration;
        
        // Calculate percent of song
        let percent = (currentTime / duration) * 100 + '%';
        that.updateScrubber(percent);
        that.updateTime(currentTime);
      }, 100);
    } else {
      status = 'play';
      audio.pause();
    }
    this.setState({ playStatus: status });
    
  },
  render: function() {
    return (
      <div className="Player lcd-panel">
        <div className="info-header">
            <div className="noti-cent-item others">i</div>
            <div className="noti-cent-item others">i</div>
            <div className="noti-cent-item others">i</div>
            <div className="noti-cent-item">O</div>
            <div className="noti-cent-item others">i</div>
            <div className="noti-cent-item others">i</div>
            <div className="noti-cent-item others">i</div> 
        </div>
        <div>
          <div className="action">Now playing</div>
          <TrackInformation track={this.props.track}/>
        </div>
        <div className="timebar">
          
          <div className="artist-album">
            <div className="Artist">{this.props.track.artist}</div>
            <div className="Album">{this.props.track.album} ({this.props.track.year})</div>
          </div>
          <Timestamps duration={this.props.track.duration} currentTime={this.state.currentTime} />
        </div>
        <div className="controls-wrapper">

          <Controls isPlaying={this.state.playStatus}/>
        </div>
          <Scrubber/> 
        <audio id="audio">
          <source src={this.props.track.source} />
        </audio>
        
      </div>
    )
  }
});

var TrackInformation = createClass({
  render: function() {
    return (
      <div className="TrackInformation">
        <div className="Name">{this.props.track.name}</div>      
      </div>
    )
  }
});

var Scrubber = createClass({
  render: function() {
    return (
      <div className="Scrubber">
        <div className="Scrubber-Progress"></div>
      </div>
    )
  }
});

var Controls = createClass({
  render: function() {
    
    let classNames;
    // if (this.props.isPlaying == 'pause') {
    //   classNames = 'fa fa-fw fa-pause';
    // } else {
    //   classNames = 'fa fa-fw fa-play';
    // }
    
    return (
      <div className="Controls">
        <div  className="Button others"></div>
        <div  className="others"></div>
        <div  className="others"></div>
        <div className="Button icon-skip-back others"></div>
        <div  className="Button icon-rewind others"></div>
        <div onClick={this.togglePlay} className="Button icon-play4"></div>
        <div  className="Button icon-fast-forward others"></div>
        <div  className="Button icon-skip-forward others"></div>
        <div className="Button others"></div>
        <div  className="Button others"></div>
        <div  className="Button others"></div>
        
          {/* <i className=></i> */}
        
      </div>
    )
  }
});

var Timestamps = createClass({
  convertTime: function(timestamp) {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    timestamp = minutes + ':' + seconds;
    return timestamp;
  
  
},

  render: function() {
    let  currentTime = this.props.currentTime;
    let  durationTime = this.props.duration; 
    return (
      <div className="Timestamps">
        <div className="Time Time--current">{this.convertTime(currentTime)}</div>
        <div className="Time Time--total">{this.convertTime(durationTime - currentTime)}</div>
      </div>
    )
  }
});


export default Player;