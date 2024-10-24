import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "../components/theme-provider";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="h-full w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
