import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: "1000px" }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
