import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import classes from "./Search.module.css";
import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";

import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    console.log("You hit enter");

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className={classes.search}>
      <div className={classes.search__input}>
        <SearchIcon className={classes.search__inputIcon} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className={classes.search__buttons}>
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className={classes.search__buttons}>
          <Button
            className={classes.search__buttonsHidden}
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className={classes.search__buttonsHidden} variant="outlined">
            I'm feeling lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
