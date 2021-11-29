import React, { useState } from 'react';
import LostChameleon from '../bensound-allthat.mp3';
import Rock from '../bensound-jazzyfrenchy.mp3';
import Tobu from '../bensound-thejazzpiano.mp3';

const MusicPlayerContext = React.createContext([{}, () => { }]);

const MusicPlayerProvider = (props) => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                id: 1,
                name: 'Lost Chameleon - Genesis',
                file: LostChameleon,
            },
            {
                id: 2,
                name: 'The Hipsta - Shaken Soda',
                file: Rock,
            },
            {
                id: 3,
                name: 'Tobu - Such Fun',
                file: Tobu,
            },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
}

export { MusicPlayerContext, MusicPlayerProvider };