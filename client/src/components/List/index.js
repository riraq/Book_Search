import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item">
    <h1>{props.title}</h1>
    <a href={props.link} target="blank"><button>View</button></a>
    <button { ...props }>Save</button>
    <p>Author: {props.author}</p>
    <img src={props.image} alt=""/>
    <p>{props.description}</p>
    </li>;
}
