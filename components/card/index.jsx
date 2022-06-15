import { Card } from "@mui/material";

const ResultCard = ({ userScoreDetail }) => {
  return (
    <Card variant="outlined" sx={{ px: 4, mt:5}}>
      <h3>Score: {userScoreDetail.score} </h3>
      <h3>Accuracy: {userScoreDetail.accuracy.toFixed()}% </h3>
      <h3>Speed: {userScoreDetail.speed.toFixed()} WPM</h3>
    </Card>
  );
};

export default ResultCard;
