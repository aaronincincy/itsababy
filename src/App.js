import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    celebrating: false
  }

  handleWhatIsItClick = () => {
    this.setState({
      celebrating: true
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.celebrating && <button onClick={this.handleWhatIsItClick}>What are we having?</button>}
        {this.state.celebrating && <Celebration />}
      </div>
    );
  }
}

class Celebration extends React.Component {

  state = {
    balloons: []
  }

  componentWillMount(){
    setInterval(this.addBalloon, 50)
  }

  lastId = 0

  addBalloon = () => {
    this.setState({
      balloons: [...this.state.balloons, {
        id: this.lastId++, 
        x: (Math.random()*window.innerWidth)}]
    })
  }

  removeBalloon = id => {
    this.setState({
      balloons: this.state.balloons.filter(b=>b.id !== id)
    })
  }
  
  render(){
    return (<div className="celebration">
{this.state.balloons.map(b => <Balloon key={b.id} x={b.x} onRemove={() => this.removeBalloon(b.id)} />)}
      <div className="sex">It's a GIRL!</div>
        </div>
        )
  }
}

class Balloon extends React.Component{

  componentWillMount(){
    setTimeout(this.props.onRemove, 5000)
  }

  render(){
    const style={
      left: this.props.x + 'px',
    }

    return <div className="balloon" style={style}></div>
  }
}

export default App;
