import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by SK - {year}</p>
    </footer>
  );
}

export default Footer;
