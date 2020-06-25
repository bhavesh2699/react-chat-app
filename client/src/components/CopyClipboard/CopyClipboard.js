import React, { Component } from "react"
import './CopyClipboard.css';


export default class CopyClipboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      copySuccess: false,
      keyword:"test"
    }
  }

  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // May be call for search result
}

  copyCodeToClipboard = () => {
    const el = this.textArea
    el.select()
    document.execCommand("copy")
    this.saveChanges()
  }

saveChanges = () => {
  this.setState({copySuccess: true},()=>{setTimeout(() => {this.setState({copySuccess:false})},2000)});
}

  render(){

    return (
      <div>
        <div>
          <textarea
            style={{width:"0px", height:"0px",opacity:"0",resize:"none"}}
            ref={(textarea) => this.textArea = textarea}
            value={"Your friend "+ this.props.name +" has created a dynamic chat room and has invited you to join.\nLogin with the following credentials on the given link. \n*Room ID:* " + this.props.room + "\n*Link*: http://localhost:3000" }
            onChange={(event)=>this.inputChangedHandler(event)}
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}
          style={{fontSize:"24px",margin:"2px"}}>
          <i className="fa fa-share"></i> Invite
          </button>
          {
            this.state.copySuccess &&
            (<div className="timer"style={{"color": "green",position:"absolute",marginTop:"20px"}}>
              Invite Link Copied!
            </div> )
          }
        </div>
      </div>
    )
  }
}
