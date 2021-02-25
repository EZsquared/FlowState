import React from 'react';
import './NewPlayer.css';



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
    console.log(option.value);
    if (option.value === true) {
      option.classList.remove('On');
      option.value = false;
      } else {
        option.classList.add('On');
        option.value = true;
      }
      console.log(option.value);
}
  

function NewPlayer() {


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
                    <div className="TrackInformation">
                        <div className="Name">Awesome Song</div>      
                    </div>
                </div>
                <div className="timebar">
                    
                    <div className="artist-album">
                        <div className="Artist">Various Artists</div>
                        <div className="Album">Totally Cool Album</div>
                    </div>
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
                        <div className="Button icon-play4"></div>
                        <div  className="Button icon-fast-forward others"></div>
                        <div  className="Button icon-skip-forward others"></div>
                        <div className="others"></div>
                        <div  className="others"></div>
                        <div  className="others"></div>
                    </div>
                </div>
                <div className="Scrubber">
                    <div className="Scrubber-Progress"></div>
                </div>
                <audio id="audio">
                    {/* <source src=/> */}
                </audio>            
            </div>
    )
}

export default NewPlayer
