
import Square from "./Square";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";

function Board(props){
  /*return (
  <div className="board">
    <Sidebar/>
    <Reviews/>
    <AverageRating/>
    <SentimentAnalysis/>
    <WebsiteVisitors/>
  </div>
  );*/
  return (
    <div className="board">
      
      <div className="sidebar">
       <h4>Sidebar</h4>
      </div>

      <div className="reviews">
        <h4>Reviews</h4>
      </div>

      <div className="rating">
        <h4>AV Rating</h4>
      </div>

      <div className="setiments">
        <h4>Setimitents</h4>
      </div>

      <div className="website">
          <h4>Website vistors</h4>
      </div>
    </div>
    );
}

export default Board