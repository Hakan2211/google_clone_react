import React from "react";
import classes from "./SearchPage.module.css";

import { useStateValue } from "../../context/StateProvider";
import useGoogleSearch from "../../api/useGoogleSearch";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Search from "../../pages/Home/Search/Search";

const SearchPage = () => {
  const [{ term = "tesla" }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); //Live Api Call

  //https://developers.google.com/custom-search/v1/using_rest

  //https://cse.google.com/cse/create/new
  console.log(data);
  return (
    <div className={classes.searchPage}>
      <div className={classes.searchPage__header}>
        <Link to="/">
          <img
            className={classes.searchPage__logo}
            src="https://www.google.com//images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className={classes.searchPage__headerBody}>
          <Search hideButtons />
          <div className={classes.searchPage__options}>
            <div className={classes.searchPage__optionsLeft}>
              <div className={classes.searchPage__option}>
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className={classes.searchPage__option}>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className={classes.searchPage__option}>
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className={classes.searchPage__option}>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className={classes.searchPage__option}>
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className={classes.searchPage__option}>
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className={classes.searchPage__optionsRight}>
              <div className={classes.searchPage__option}>
                <Link to="/settings">Settings</Link>
              </div>
              <div className={classes.searchPage__option}>
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className={classes.searchPage__results}>
          <p className={classes.searchPage__resultCount}>
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className={classes.searchPage__result}>
              <a className={classes.searchPage__resultLink} href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className={classes.searchPage__resultImage}
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>
              <a className={classes.searchPage__resultTitle} href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className={classes.searchPage__resultSnippet}>
                {item.snippet}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
