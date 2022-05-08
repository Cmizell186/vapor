import { useState } from "react";



const GenreSlider = ({games}) => {
    const [img, setImg] = useState()
    const [url, setUrl] = useState()
    const game = games[0]
    console.log(game)

    return (
        <div className="item-display">
        <img className='main-image' src={setUrl} alt={`${game?.title}` }/>
        <div  className='info-container'>
          <h1 className="title">{game?.title}</h1>
          <div className="screenshot-container">
            {games?.images?.slice(0, 4).map((image, index) => {
              return (
                <img className="screenshot-img"
                  key={game?.id+index}
                  src={image}
                  alt={`${game?.title}'s screenshot image`}
                  onMouseEnter={(e) => setImg(e, image)}
                  onMouseLeave={() => setUrl()}
                />
              )
            })}
          </div>
          <div className="description">
            <h2 className='description-title'>Now Available</h2>
            <div className="all-top-sellers">
              <p>Top Seller</p>
            </div>
          </div>

          <div className="price-tag">{`$${game?.price}`}</div>
        </div>
      </div>
    )
}

export default GenreSlider;
