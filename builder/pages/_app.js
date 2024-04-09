import NxtPro from "@/providers/NxtPro";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps }) {
  return (
    <NxtPro>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </NxtPro>
  );
}
