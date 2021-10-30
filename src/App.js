import React from "react";


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: ""
    }
    // this.handleClick = this.handleClick.bind(this); use this when not using a => function
  }

    // runs when the app mounts, not at every change
  componentDidMount() {
    console.log('running componemtDidMount')
  }

    // this is a lifecycle method that comes with React
    // runs every time a event takes place, not for the first render
  componentDidUpdate() {
    //console.log('after',this.state.isClicked);
    console.log('updated text', this.state.text)
  }

  // using a ternary operator to change from false to true
  // handleClick = () => {
  //   console.log('before' ,this.state.isClicked);
  //   this.state.isClicked ? 
  //   this.setState({isClicked : false}) :
  //   this.setState({isClicked : true})
  // }

  handleClick = () => {
    //console.log('before' ,this.state.isClicked);
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  handleChange = (event) => {
    //console.log('event', event);
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div >
        <input onChange={this.handleChange} />
        <button onClick = {this.handleClick} >Click me</button>
      </div>
    );
  }
  
}

export default App;
