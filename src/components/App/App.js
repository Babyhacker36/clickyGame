// IMPORTS
import React, { Component } from 'react';
import Sound from 'react-sound';
import './App.css';
import Header from '../Header/Header.js';
import Alerts from '../Alerts/Alerts.js';
import Score from '../Score/Score.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Card from '../Card/Card.js';
import cards from '../../assets/json/cards.json';

CLASS: App
class App extends Component{
// STATE    
    state = {
        cards,
        score: 0,
        topScore: 0,
        selected: [],
        shake: "",
        message1: "Choose an Image!",
        message2: "",
        alertType: "info",
        topScoreType: "info",
        volume: "on"
    };
// ON CLICK: SHUFFLE CARDS
    shuffle = id => {
        this.setState({
            cards: this.state.cards.sort(function(a,b){
                    return 0.5 - Math.random();
                }
            )
        })
    }
    // ON CLICK: TURN ON/OFF VOLUME
   
    incrementClick = id => {
        let ids = this.state.selected
        const incorrect = ids.includes(id);
        if(!incorrect){
            this.state.selected.push(id);
            let newScore = this.state.score + 1;
            this.setState({score: newScore});
            if(newScore === 12){
                this.setState({
                    score: 0,
                    selected: [],
                    topScore: newScore,
                    message1: "Nice Job!",
                    message2: "",
                    alertType: "success"
                });
            }
            else if(newScore > this.state.topScore){
                this.setState({
                    topScore: newScore, 
                    message1: "OK.",
                    message2: "Seems You Have Done Well!",
                    alertType: "success",
                    topScoreType: "success"
                });
            }
            else{
                this.setState({
                    message1: "Ok",
                    message2: "Seems You Have Done Well",
                    alertType: "success",
                    topScoreType: "info"
                });
    
            }
        }
        else{
            this.setState({
                score: 0,
                selected: [], 
                shake: "incorrect",
                message1: "WRONG!",
                message2: "Next Time Don't Be Afraid to Pull The trigger: Try again",
                alertType: "danger",
                topScoreType: "info"
            });
            setTimeout(function(){ 
                this.setState({ shake: "" }); 
            }.bind(this), 1000);
        }
    };
// RENDER 
    render(){
        return(
            <div className="app">
                <Header/>
                <Alerts
                    message1={this.state.message1}
                    message2={this.state.message2}
                    alertType={this.state.alertType}
                />
                <Score 
                    shake={this.state.shake}
                    score={this.state.score} 
                    topScore={this.state.topScore}
                    alertType={this.state.alertType}
                    topScoreType={this.state.topScoreType}
                />
                <Main 
                    shake={this.state.shake}
                >
                    {this.state.cards.map((cards,i) => (
                        <Card 
                            id={cards.id} 
                            name={cards.name} 
                            image={cards.image} 
                            key={i} 
                            increment={this.incrementClick} shuffle={this.shuffle}
                        />
                    ))}
                </Main>
                <Footer/>
            </div>
        );
    };
}
// EXPORT DEFAULT: App
export default App;
