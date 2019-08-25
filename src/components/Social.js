import React from "react";

const Social = () =>
  social.map(item =>
    <li key={item.icon}>
      <a href={item.link}>
        <i className={"fab " + item.icon}></i>
      </a>
    </li>
  );

const social = [
  {
    icon: "fa-instagram",
    link: "#"
  },
  {
    icon: "fa-facebook-f",
    link: "#"
  },
  {
    icon: "fa-twitter",
    link: "#"
  },
];

export default Social;