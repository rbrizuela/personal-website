import React from "react";
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

export default ({ children }) => (
  <div style={styles.menu}>
    <header style={styles.header}>
      <Link to="/" style={styles.siteTitleLink}>
        <h3 style={styles.siteTitle}>Mi blog</h3>
      </Link>
      <ul style={styles.list}>
        <ListLink to="/">Inicio</ListLink>
        <ListLink to="/sobre/">Acerca</ListLink>
        <ListLink to="/contacto/">Contacto</ListLink>
      </ul>
    </header>
    <main>{children()}</main>
  </div>
);