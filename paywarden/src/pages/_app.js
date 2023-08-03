
import {  UserProvider } from "@/common/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;