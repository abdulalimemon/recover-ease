import { Helmet } from "react-helmet-async";
import LeaderBoardBanner from "./LeaderBoardBanner";
import LeaderBoardTable from "./LeaderBoardTable";

const Leaderboard = () => {
  return (
    <>
      <Helmet>
        <title>Leaderboard - Recover Ease</title>
      </Helmet>
      <LeaderBoardBanner />
      <LeaderBoardTable />
    </>
  );
};

export default Leaderboard;
