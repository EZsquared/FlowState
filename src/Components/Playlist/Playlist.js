import React from 'react';
import './Playlist.css'

function Playlist() {
    return (
      <div className="Playlist lcd-panel">
        <div className="playlist-container">
            <div className="info-header">
                <div className="noti-cent-item others icon-folder2"></div>
                <div className="noti-cent-item others icon-search3"></div>
                <div className="noti-cent-item others icon-file-add"></div>
                <div className="noti-cent-item others icon-eye3"></div>
                <div className="noti-cent-item others icon-trash2"></div> 
            </div>
            <div className="list-info-container">
              <div className="playlist-header-container">
                <div className="playlist-header"></div>
                <div className="playlist-header">Cue</div>
                <div className="playlist-header">Song</div>
                <div className="playlist-header">Artist</div>
                <div className="playlist-header">Time</div>
              </div>
              <div className="track-info-container">
                <div className="track-play icon-circle-check"></div>
                <div className="track-number">1</div>
                <div className="track-name">Awesome Song</div>
                <div className="track-artist">Various Artists</div>
                <div className="track-length">3:42</div>
              </div>
              <div className="track-info-container">
                <div className="track-play icon-drop icon-circle-check"></div>
                <div className="track-number">2</div>
                <div className="track-name">Awesome Song</div>
                <div className="track-artist">Various Artists</div>
                <div className="track-length">3:42</div>
              </div>
              <div className="track-info-container">
                <div className="track-play icon-cloud3"></div>
                <div className="track-number">3</div>
                <div className="track-name">Awesome Song</div>
                <div className="track-artist">Various Artists</div>
                <div className="track-length">3:42</div>
              </div>
            </div>
        </div>
      </div>
    
    );
  }
  
  export default Playlist;