import type { NextPage } from "next";
import Link from "next/link";

import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

const Home: NextPage = () => {
  return (
    <div>
      HOME
      <p>
        <Link href="/signin">Go to sign in page</Link>
      </p>
    </div>
  );
};

export default Home;

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("users/profile");

  return {
    props: {},
  };
});
