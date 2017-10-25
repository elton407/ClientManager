import React from "react";
import { Item } from 'semantic-ui-react'

export const MemoListItem = props =>
 <Item.Group>
 	{props.children}
 </Item.Group>
  // <li className="list-group-item">
  //   {props.children}
  // </li>;
