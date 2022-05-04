import '../../src/components/LandingPage/index.css'
import { Link } from 'react-router-dom'

const SearchBar = () => {


    return (
        <>
            <div id='search_container'>
                <div id="cart-button-div">
                    <Link to='/cart'>
                        <button type='button'>Cart</button>
                    </Link>
                </div>
                <div id="search_div">
                    <input placeholder='search' id="search_input"></input>
                </div>
            </div>
        </>
    )

}

export default SearchBar;
