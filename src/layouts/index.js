import React, { Component } from "react";
import Link from "gatsby-link";

const styles = {
  listItem: {
    display: 'inline-block',
    marginRight: '1rem'
  },
  menu: {
    margin: '0 auto',
    maxWidth: 650,
    border: '1px solid black',
    padding: '0 1rem'
  },
  header: {
    marginBottom: '1.5rem'
  },
  siteTitleLink: {
    textShadow: 'none',
    backgroundImage: 'none'
  },
  siteTitle: {
    display: 'inline'
  },
  list: {
    listStyle: 'none',
    float: 'right'
  }
};

const ListLink = props => (
  <li style={styles.listItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);



function Layout ({ children }) {
  return(
    <div style={styles.menu}>
      <header style={styles.header}>
        <Link to="/" style={styles.siteTitleLink}>
          <h3 style={styles.siteTitle}>Mi blog</h3>
        </Link>
        <ul style={styles.list}>
          <ListLink to="/">Inicio</ListLink>
          <ListLink to="/about/">Acerca</ListLink>
          <ListLink to="/contact/">Contacto</ListLink>
        </ul>
      </header>
      <main>{children()}</main>
    </div>
  )
}

export default Layout