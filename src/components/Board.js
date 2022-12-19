
import Square from "./Square";
import Reviews from "./Reviews";
import Sidebar from "./Sidebar";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";

function Board(props){
  
  return (
    <div className="board">

      <Sidebar />
      <Reviews/>
      <AverageRating/>
      <SentimentAnalysis/>
      <WebsiteVisitors/>
      
    </div>
    );
}

export default Board