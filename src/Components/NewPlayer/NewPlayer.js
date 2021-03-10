import React from 'react';
import './NewPlayer.css';
import data from '../tempInfo.json';
import ReactHowler from 'react-howler';
import raf from 'raf';
import song from '../songs/EG.mp3'

const songs = data.songs;

const getData = '127.0.0.1:4000'

function handleOption (opId) {
      const option = document.getElementById(opId);
      if (option.value === true) {
        option.classList.remove('On');
        option.value = false;
        } else {
          option.classList.add('On');
          option.value = true;
        }
}

function handlePlay (opId) {
    const option = document.getElementById(opId);
    if (option.value === true) {
      option.classList.remove('icon-pause3');
      option.classList.add('icon-play4');
      option.value = false;
      } else {
        option.classList.remove('icon-play4');
        option.classList.add('icon-pause3');
        option.value = true;
      }
}
  
class NewPlayer extends React.Component{
    constructor (props) {
        super(props)
    
        this.state = {
          source: song,
          status: 'loading',
          playing: false,
          loaded: false,
          loop: false,
          mute: false,
          volume: 1.0,
          seek: 0.0,
          isSeeking: false
        }
        this.handleToggle = this.handleToggle.bind(this)
        this.handleOnLoad = this.handleOnLoad.bind(this)
        this.handleOnEnd = this.handleOnEnd.bind(this)
        this.handleOnPlay = this.handleOnPlay.bind(this)
        this.handleStop = this.handleStop.bind(this)
        this.renderSeekPos = this.renderSeekPos.bind(this)
        this.handleLoopToggle = this.handleLoopToggle.bind(this)
        this.handleMuteToggle = this.handleMuteToggle.bind(this)
        this.handleMouseDownSeek = this.handleMouseDownSeek.bind(this)
        this.handleMouseUpSeek = this.handleMouseUpSeek.bind(this)
        this.handleSeekingChange = this.handleSeekingChange.bind(this)
      }
    
      componentWillUnmount () {
        this.clearRAF()
      }
    
      handleToggle () {
        this.setState({
          playing: !this.state.playing,
        })
      }
    
      handleOnLoad () {
        this.setState({
          loaded: true,
          duration: this.player.duration(),
          status: 'ready'
        })
      }
    
      handleOnPlay () {
        this.setState({
          playing: true
        })
        this.renderSeekPos()
      }
    
      handleOnEnd () {
        this.setState({
          playing: false
        })
        this.clearRAF()
      }
    
      handleStop () {
        this.player.stop()
        this.setState({
          playing: false // Need to update our local state so we don't immediately invoke autoplay
        })
        this.renderSeekPos()
      }
    
      handleLoopToggle () {
        this.setState({
          loop: !this.state.loop
        })
      }
    
      handleMuteToggle () {
        this.setState({
          mute: !this.state.mute
        })
      }
    
      handleMouseDownSeek () {
        this.setState({
          isSeeking: true
        })
      }
    
      handleMouseUpSeek (e) {
        this.setState({
          isSeeking: false
        })
    
        this.player.seek(e.target.value)
      }
    
      handleSeekingChange (e) {
        this.setState({
          seek: parseFloat(e.target.value)
        })
      }
    
      renderSeekPos () {
        if (!this.state.isSeeking) {
          this.setState({
            seek: this.player.seek()
          })
        }
        if (this.state.playing) {
          this._raf = raf(this.renderSeekPos)
        }
      }
    
      clearRAF () {
        raf.cancel(this._raf)
      }
    
    render(){
        return (
            <div className="Player lcd-panel">
                <div className="info-header">
                    <div className="noti-cent-item others icon-cog2"></div>
                    <div className="noti-cent-item others icon-folder2"></div>
                    <div className="noti-cent-item others icon-moon"></div>
                    <div className="noti-cent-item">O</div>
                    <div className="noti-cent-item others icon-speech-bubble"></div>
                </div>
                <div>
                    <div className="action">{
                    (this.state.playing) ? 'Now Playing' : this.state.status
                    }</div>
                    <div className="TrackInformation">
                        <div className="Name">Awesome Song</div>      
                    </div>
                </div>
                <div className="timebar">
                  {(this.state.seek / 60).toFixed(2)}
                  <div className="artist-album">
                      <div className="Artist">Various Artists</div>
                      <div className="Album">Totally Cool Album</div>
                  </div>
                  {(this.state.duration) ? ((this.state.duration / 60) - (this.state.seek / 60)).toFixed(2) : ''}
                </div>
                <div className="controls-wrapper">
                    <div className="Controls">
                        <div  className="Button icon-repeat others Option" id="repeat" 
                            onClick={() =>{handleOption('repeat')}}>
                        </div>
                        <div  className="Button icon-shuffle2 others Option" id="shuffle" 
                            onClick={() =>{handleOption('shuffle')}}>
                        </div>
                        
                        <div  className="others"></div>
                        <div className="Button icon-skip-back others"></div>
                        <div  className="Button icon-rewind others"></div>
                        <div className="Button icon-play4" value='false' id='play' onClick={() =>{handlePlay('play'); this.handleToggle()}}></div>
                        <div  className="Button icon-fast-forward others"></div>
                        <div  className="Button icon-skip-forward others"></div>
                        <div className="others"></div>
                        <div className="others"></div>
                        <div className="Button icon-heart others Option" id="heart" onClick={() =>{handleOption('heart')}}></div>
                    </div>
                </div>
                <ReactHowler
                    src={this.state.source}
                    playing={this.state.playing}
                    onLoad={this.handleOnLoad}
                    onPlay={this.handleOnPlay}
                    onEnd={this.handleOnEnd}
                    loop={this.state.loop}
                    mute={this.state.mute}
                    volume={this.state.volume}
                    ref={(ref) => (this.player = ref)}
                    />

                    <input
                      type='range'
                      min='0'
                      max={this.state.duration ? this.state.duration.toFixed(2) : 0}
                      step='.001'
                      value={this.state.seek}
                      onChange={this.handleSeekingChange}
                      onMouseDown={this.handleMouseDownSeek}
                      onMouseUp={this.handleMouseUpSeek}
                    />

                
            </div>
    )
    }
    
}

export default NewPlayer
