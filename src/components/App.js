import React from 'react';
import './App.css';
import DrumPad from './DrumPad';
class App extends React.Component {
    state = {
        display: ''
    }
    data = [
        { id: 'clap', letter: 'Q', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/16[kb]Bg-clap.wav.mp3' },
        { id: 'verby-clap', letter: 'W', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/295[kb]big-verby-clap.wav.mp3' },
        { id: 'cartoon-hit', letter: 'E', src: 'https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Cartoon%20FX/241[kb]cartoon-hit.wav.mp3' },
        { id: 'beeby-kick', letter: 'A', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/13[kb]beepy-kick.wav.mp3' },
        { id: 'bright-crash', letter: 'S', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/92[kb]909-bright-crash.aif.mp3' },
        { id: 'muted-crash', letter: 'D', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/139[kb]muted_crash.aif.mp3' },
        { id: 'kut', letter: 'Z', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/11[kb]kut.aif.mp3' },
        { id: 'ti-ri', letter: 'X', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Tabla/24[kb]ti-ri.aif.mp3' },
        { id: 'alarmblop', letter: 'C', src: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/82[kb]alarmblop.aif.mp3' }
    ]
    handleDisplay = display => this.setState({ display })

    renderdPads = this.data.map(data => {
        return (
            <DrumPad
                key={data.id}
                id={data.id}
                letter={data.letter}
                src={data.src}
                handleDisplay={this.handleDisplay}
            />
        )
    })
    render() {

        return (
            <div id='drum-machine'>
                <div id="display">{this.state.display}</div>
                <div className='pads'>
                    {this.renderdPads}
                </div>
            </div>
        )
    }
}

export default App