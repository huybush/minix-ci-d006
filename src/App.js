import { Component } from "react";
import './App.css';
import Header from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { EmojiList } from "./components/EmojiList";


class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      kw:''
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange(event){
      // console.log(this.state)
      // console.log(event.target.value)
      

      this.setState({kw:event.target.value})
      console.log(this.state)
  }
  render(){
    

    return (
      <div className="App">
        <Header/>
        <SearchBar kw = {this.state.kw} change = {this.handleChange}/>
        <EmojiList/>
      </div>
    );

  }
}

  


export default App;
