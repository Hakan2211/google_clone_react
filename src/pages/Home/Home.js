import React from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";

import Search from "./Search/Search";

import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home__header}>
        <div className={classes.home__headerLeft}>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
          {/**Link */}
        </div>
        <div className={classes.home__headerRight}>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/**Link */}
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className={classes.home__body}>
        <img
          src="https://www.google.com//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />

        <div className={classes.home__inputContainer}>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
