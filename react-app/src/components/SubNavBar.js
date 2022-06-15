import { get_all_carts } from "../store/cart";
import "../../src/components/LandingPage/index.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_one_image } from "../store/image";
import { useHistory, Link } from "react-router-dom";

const SearchBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const cart_entries = useSelector((state) => Object.values(state.carts));
  const user_cart = cart_entries.filter(
    (entry) => entry.user_id === sessionUser.id && !entry.is_owned
  );
  const userImage = useSelector((state) => Object.values(state.images));
  const pfp = userImage[0];

  const history = useHistory();
  const games = useSelector((state) => state.games);
  const gamelist = Object.values(games).map((game) => [
    game.title,
    game.id,
    game.price,
    game.images[0],
  ]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  // nice work man ! <3
  // thank you <3
  useEffect(() => {
    dispatch(get_all_carts());
    dispatch(get_one_image(sessionUser?.id));
  }, [dispatch]);

  useEffect(() => {
    setFilteredList(
      gamelist.filter((game) =>
        game[0].toLowerCase().includes(searchWord.toLowerCase())
      )
    );
  }, [searchWord]);

  function handleSubmit(e) {
    console.log(filteredList[0][2], "filteredList");
    e.preventDefault();
    if (filteredList.length > 0) {
      history.push(`/games/${filteredList[0][1]}`);
    }
  }

  function isActive(e) {
    const searchinput = document.getElementsByClassName("search-input-bar")
    if (searchinput === document.activeElement) {
      console.log("in the if block")
    }
    setTimeout(() => {
      setSearchWord("")
      return false
    }, 100);
  }

  return (
    <>
      <div id="search_container">
        <div id="search_container_div">
          <div id="cart-button-div">
            <div id="cart_link">
              <a href="/cart">
                {user_cart.length ? `Cart (${user_cart.length})` : "Cart"}
              </a>
            </div>
          </div>
          <div id="search_div">
            <div id="search_bar_extra_div">
              <div id="search_bar_profilepic_div">
                <img src={pfp?.image} id="profile_pic_search_bar" alt="" />
              </div>
              <div id="search_bar_welcome_msg">
                <img alt="" id="plus" src="/static/images/new_white.svg"></img>
              </div>
              Welcome {sessionUser?.username} to Vapor Games !
            </div>
            <div className="form-search-div">
              <form onSubmit={(e) => handleSubmit(e)} id="search-form">
                <input
                  type="search"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  className="search-bar-input"
                  id="search_input"
                  placeholder="search"
                  onBlur={(e) => isActive(e)}
                />
              {isActive && searchWord && (
                <div id="search-container">
                  <div className="searchresult-list">
                    {filteredList?.slice(0, 5).map((game) => (
                      <div className="nomzaa-div">
                        <Link className="game-link" to={`/games/${game[1]}`}>
                          <span
                            className="game-li"
                            key={game.id}
                            value={game.title}
                          >
                            <img
                              src={game[3]?.image}
                              width="115"
                              height="53.78"
                              alt="logo grey"
                            />
                            <div className="game-separator">
                              {game[0]}
                              <span className="game-search-price">
                                {game[2]}
                              </span>
                            </div>
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              </form>
            </div>
            <a id="blank_link" href="/library">
              <img alt="" id="blank_search" src="/static/images/blank.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
