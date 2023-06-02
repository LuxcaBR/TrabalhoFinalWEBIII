import React from "react";

import stylePerson from "./CardPerson.module.css";

export function CardPerson({ cover, avatar, name, office, stacks }) {
  return (
    <div className={stylePerson.card}>
      <img src={cover} alt="Cover" />
      <img className={stylePerson.avatar} src={avatar} alt="Avatar" />
      <p className={stylePerson.p1}>{name}</p>
      <p className={stylePerson.p2}>{office}</p>

      <div className={stylePerson.spans}>
      <span >#Metal</span>
      <span >#Rock</span>
      <span >#História</span>
      <span >#Hardware</span>
      <span >#Futebol</span>
      <span >#Games</span>
      </div>
      
    </div>
  );
}
