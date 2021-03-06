import React, {Component} from 'react';
import './App.css';
import './App.scss';
import Container from './components/Container'
import logo from '../src/stellarium_logo.png'


class App extends Component {

  state = {
    constellations: [],
    isConstCardShowing: false,
  }

  componentDidMount(){
    fetch('http://localhost:3000/constellations')
    .then(response => response.json())
    .then(constellations => this.setState({constellations}))
  }

  enterNorthern = () => {
    this.setState({
      isConstCardShowing: !this.state.isConstCardShowing
    })
  }
  enterSouthern = () => {
    this.setState({
      isConstCardShowing: !this.state.isConstCardShowing
    })
  }

render() {
    return (
      <div className="App">
        <header> 
            <img src={logo} className="logo" alt="home"/>
        </header>
        <section className="landing">
        <h2>Welcome to Stellarium</h2>
        <button 
        onClick={this.enterNorthern} 
        className="enter-card">Constellations
        </button>
        </section>
        {
        this.state.isConstCardShowing
          ? <Container constellations={this.state.constellations}/>
          : null
        }
      </div>
    );
  }
}

export default App;




// {name: "Cassiopeia – The Queen"},
// {photo: "https://i.ibb.co/Tw5JJ8s/cassiopeia.jpg"},
// {location: "Northern hemisphere"},
// {fun_fact: "Cassiopeia is one of the brightest and most recognizable constellations in the night sky."},
// {mythology: "Cassiopeia was a queen from Greek mythology whose legendary vanity and arrogance ultimately led to her downfall."},
// {main_stars: "Segin, Ruchbah, Gamma Cassiopeiae, Schedar and Caph"}

// constellations={this.state.constellations}