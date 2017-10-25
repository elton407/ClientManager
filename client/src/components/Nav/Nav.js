import React from "react";
import AppBar from 'material-ui/AppBar';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const navStyle = {
 
}

const liStyle = {
  float:"right"
}

const userName = {
  border:"2px solid black"
}


// const Nav = (props) =>
//   <nav className="navbar navbar-inverse navbar-top" style = {navStyle}>

//     <div className="navbar-left">

//       <a href="/" className="navbar-brand">
//         Client Manager
//         </a>
//     </div>
//     {props.userInfo ?
//       <ul className="nav navbar-nav navbar-right">
//         <li style={liStyle}><a style={userName} >Hello {props.userInfo}</a></li>
//         <li style={liStyle}><a href="/logout">Logout</a></li>
//       </ul>
//       :
//       <ul className="nav navbar-nav navbar-right">
//         <li style={liStyle}><a  href="/login">Login</a></li>
//         <li style={liStyle}><a  href="/register">Register</a></li>
//       </ul>

//     }

//   </nav>;

const Nav = (props) => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
          /><Link to={"/Customer"}>
          Client Manager
          </Link>
        </Menu.Item>
        <Menu.Item as='a'>Hello {props.userInfo}</Menu.Item>
        <Menu.Item as='a'><Link to={"/Logout"}>Sign Out</Link></Menu.Item>
      </Container>
    </Menu>
  </div>
);






export default Nav;
