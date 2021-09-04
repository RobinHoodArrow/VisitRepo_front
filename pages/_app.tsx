import NextApp from "next/app";
import NextProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import "@styles/tailwind.css";
import "@styles/index.scss";
import "tippy.js/dist/tippy.css";
import "react-toastify/dist/ReactToastify.css";

export default class App extends NextApp {
	render(): JSX.Element {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider defaultTheme="dark" attribute="class">
				<Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
				<NextProgress color="#6D28D9" />
				<DefaultSeo titleTemplate="%s - Barış DEMİRCİ" />
				<Component {...pageProps} />
				<ToastContainer position="bottom-right" />
			</ThemeProvider>
		);
	}
}
