import React, { useState } from 'react';
import DrumPad from '../DrumPad/DrumPadComponent';
import './DrumMachineStyle.scss';

const drumPads = [
    { id: 'Q', clip: '/audio/56360__dodgy-c__dodgy_c_synth_bass.wav', description: 'Synth Bass' },
    { id: 'W', clip: '/audio/587839__syndrm__psy-trance-kick-bass-drum-loop-170bpm-with-strong-attack-phase.wav', description: 'Psy Trance Kick Bass Drum' },
    { id: 'E', clip: '/audio/541734__victek__electronic-clap.wav', description: 'Electronic Clap' },
    { id: 'A', clip: '/audio/488538__isaidlatente__kick-techno-distorcionado.wav', description: 'Kick Techno Distorted' },
    { id: 'S', clip: '/audio/255708__ollieollie__techno-kick.wav', description: 'Techno Kick' },
    { id: 'D', clip: '/audio/704216__charliesmiler__knocky.wav', description: 'Knocky' },
    { id: 'Z', clip: '/audio/348054__insintesi__syn-bass-drum-3.wav', description: 'Syn Bass Drum 3' },
    { id: 'X', clip: '/audio/348053__insintesi__syn-bass-drum-2.wav', description: 'Syn Bass Drum 2' },
    { id: 'C', clip: '/audio/348056__insintesi__syn-bass-drum-5.wav', description: 'Syn Bass Drum 5' },
];

function DrumMachine() {
    const [display, setDisplay] = useState('');

    const playSound = (description) => {
        setDisplay(description);
    };

    return (
        <div id="drum-machine">
            <div id="display">{display}</div>
            <div className="drum-pads">
                {drumPads.map((pad) => (
                <DrumPad key={pad.id} id={pad.id} clip={pad.clip} description={pad.description} playSound={playSound} />
                ))}
            </div>
        </div>
    );
}

export default DrumMachine;