import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import Navbar from '../Navbar/Navbar';
import CopyClipboard from '../CopyClipboard/CopyClipboard';



import './InfoBar.css';


const InfoBar = ({ users, room, name }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>

        </div>
        <div className="centerContainer">
          <CopyClipboard room={room} name={name} />
        </div>

        <div className="rightInnerContainer">
            <Navbar  users={users} />
            <a className="close" href="/"><img src={closeIcon} alt="close Icon"/></a>
        </div>

    </div>


);
export default InfoBar;
