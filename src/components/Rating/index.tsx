interface RatingProps {
  voteAverage: number;
  voteCount: number;
}

const Rating: React.FC<RatingProps> = ({ voteAverage, voteCount }) => (
  <div className="flex items-center gap-4">
    <div className="flex justify-center items-center h-14 w-14 text-lg font-bold border-orange border-2 rounded-full">
      {Math.round(voteAverage * 100) / 100}
    </div>
    <span className="block">{voteCount} votes</span>
  </div>
);

export default Rating;
