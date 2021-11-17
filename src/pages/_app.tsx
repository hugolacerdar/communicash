import type { AppProps } from "next/app";

export { AuthProvider } from "../contexts/AuthContext";

import Header from "../components/Header";
import Page from "../components/Page";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Page>
        <Header />
        <Component {...pageProps} />;
      </Page>
    </AuthProvider>
  );
}

export default MyApp;
