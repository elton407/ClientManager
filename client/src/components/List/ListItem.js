import React from "react";
import { Item } from 'semantic-ui-react'

export const ListItem = props =>
 <Item.Group>
 <Item.Image size='tiny' src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />
 	{props.children}
 </Item.Group>
  // <li className="list-group-item">
  //   {props.children}
  // </li>;
