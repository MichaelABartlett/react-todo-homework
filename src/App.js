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
    console.log('updated totos list', this.state.todos)
  }

  // using a ternary operator to change from false to true
  // handleClick = () => {
  //   console.log('before' ,this.state.isClicked);
  //   this.state.isClicked ? 
  //   this.setState({isClicked : false}) :
  //   this.setState({isClicked : true})
  // }

  handleClick = () => {
    console.log('before' ,this.state.isClicked);
    this.setState({
      isClicked: !this.state.isClicked,
    });

  };

  handleChange = (event) => {
    console.log('event', event);
    this.setState({text: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    this.setState({todos: [...this.state.todos, this.state.text]})
    this.setState({text:""})
    console.log('checking handleSubmit')
  }

  

  deleteItem = (index) => {
    console.log("got clicked", index)
    let copyOfList = this.state.todos
    copyOfList.splice(index, 1)
    this.setState({todos: [...copyOfList]})
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} ></input>
          <button type="submit" >Add to list</button>
        </form>
        <ol>{this.state.todos.map((todo, index) => {
              return <li key={index}>{todo}<button onClick={() => {this.deleteItem(index)}} >Remove Item</button> </li>
            })}</ol>
      </div>
    );
  }
  
}

export default App;
