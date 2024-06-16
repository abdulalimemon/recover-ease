import { Helmet } from "react-helmet-async";
import CommunityBanner from "./CommunityBanner";
import PostComments from "./PostComments";
import UserComments from "./UserComments";

const Community = () => {
  return (
    <>
      <Helmet>
        <title>Community - Recover Ease</title>
      </Helmet>
      <CommunityBanner />
      <UserComments />
      <PostComments />
    </>
  );
};

export default Community;
