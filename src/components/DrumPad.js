import React from 'react';

class DrumPad extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }
    handleKeyDown = (event) => {
        if (event.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
            document.getElementById(`${this.props.id}`).style.backgroundColor = 'yellow';
            setTimeout(() => {
                document.getElementById(`${this.props.id}`).style.background = 'brown';
            }, 100)

        }
    }
    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
        document.getElementById(`${this.props.id}`).style.backgroundColor = 'yellow';
        setTimeout(() => {
            document.getElementById(`${this.props.id}`).style.background = 'brown';
        }, 100)
    }

    render() {
        return (
            <div className='drum-pad' id={this.props.id} onClick={this.handleClick} >
                <p>{this.props.letter}</p>
                <audio
                    className='clip'
                    ref={ref => this.audio = ref}
                    src={this.props.src}
                    id={this.props.letter}
                ></audio>
            </div>
        )
    }
}

export default DrumPad