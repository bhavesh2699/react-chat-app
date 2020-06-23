import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import styles from "./styles.css";


export default class Navbar extends Component {

  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false,
    });

  }

  render() {
    let users = this.props && this.props.users.length > 0 ?
        this.props.users.map(({name}) => (
            <li key={name} style={{color:"white",padding:"2px"}}><b>{name}</b></li>
        )): <span></span>;


    const astyle = {
      fontSize:"0.8em",

    };
    const sidestyle = {
      background:"#23262b",
      height:"100%"

    };

    return (
      <div className="sidebar">
      <OffCanvas
        width={110}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
          className={styles.bodyClass}
          style={{ fontSize: "30px" }}
        >

            <a href="#" style = {astyle} onClick={this.handleClick.bind(this)}>
             <img src="https://img.icons8.com/ios-filled/26/000000/menu.png"/>
            </a>
        </OffCanvasBody>
        <OffCanvasMenu className={styles.menuClass} style={sidestyle}>
         <a href="/" ><button style={{fontSize:"24px",margin:"2px"}}><i className="fa fa-sign-out"></i>Leave</button></a>
         <h3 style={{color:"white",textAlign:"center"}}><u>Online</u></h3>
          <ul>
          {users}
          </ul>
         

        </OffCanvasMenu>
      </OffCanvas>
      </div>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}
