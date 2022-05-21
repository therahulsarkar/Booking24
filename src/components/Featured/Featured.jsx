import "./Featured.css";
import kolkata from '../../assets/kolkata.jpg'
import mumbai from '../../assets/mumbai.jpg'
import delhi from '../../assets/delhi.jpg'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={kolkata}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kolkata</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={mumbai}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={delhi}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>532 properties</h2>
        </div>  
      </div>
      <div className="featuredItem delhi">
        <img
          src={delhi}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Delhi</h1>
          <h2>532 properties</h2>
        </div>  
      </div>
    </div>
  );
};

export default Featured;