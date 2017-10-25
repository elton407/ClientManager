import React from "react";
//import "./List.css";
import { Item } from 'semantic-ui-react'


export const List = ({ children }) => {
  return (
  	<Item>
  	<Item.Content verticalAlign='middle'>
  		{children}
  	</Item.Content>
  	</Item>
  );
};
