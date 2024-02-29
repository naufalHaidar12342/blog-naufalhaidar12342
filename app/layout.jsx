import Header from "@components/header";
import Footer from "@components/footer";
import "./globals.css";
import { playpenSans } from "./libraries/fonts";
import { ThemeProvider } from "./libraries/theme-provider";

export default function Layout({ children }) {
	return (
		<html lang="en" className={`${playpenSans.className} `}>
			<body className="w-full min-h-screen bg-gray-950 bg-gradient-to-b from-darkblue-gradient to-dark-gradient relative z-0">
				<Header />
				<ThemeProvider>{children}</ThemeProvider>
				<Footer />
			</body>
		</html>
	);
}
