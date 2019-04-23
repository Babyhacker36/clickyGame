// IMPORTS
import React from 'react';
import "./Header.css";
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
// Important to note that you might not need this code anymores
// const popoverLeft = (
//     <Popover id="popover-positioned-left">
//         <strong>Game Instructions</strong><br />
//         Click on a character to earn points, but don't select a character more than once!
//     </Popover>
// );
// PROPS: Header
const Header = props => (
    <header className="header row">
         
        <div className="col-lg-12 text-center">
           <div className="bladeLogo"></div>
        </div>
       
        <div className="blackbox">
        <strong> Blade: How To Play the Game. </strong><br />
        Click on a character to earn points, Don't Select a charecter more than once!
        </div>
    </header>
)
// EXPORT DEFAULT: Header
export default Header;