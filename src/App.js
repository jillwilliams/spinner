import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        name: "circle"
    }

    startRotation = () => {
        this.setState({
            name: "circle start-rotate"
        });
        setTimeout(() => {
            this.setState({
                name: "circle start-rotate stop-rotate"
            });
        }, Math.floor(Math.random() * 10000) + 1);
    }
    render() {
        return (
            <div>
            <div className="arrow"></div>
                <ul className={this.state.name}>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">1</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">2</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">3</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">4</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">5</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">6</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">7</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">8</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">9</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">10</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">11</div>
                    </li>
                    <li>
                        <div className="text" contenteditable="true" spellcheck="false">12</div>
                    </li>
                </ul>
                <button className="spin-button" onClick={this.startRotation}>SPIN</button>
            </div>
        );
    }
}

export default App;
