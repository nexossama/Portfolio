import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Outmani Ossama",
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in Morocco, I'm a Data Engineering and Machine Learning student .Curious about understanding how logic and science are helping humans to solve life problems.",
	openGraph: {
		title: "Outmani Ossama",
		description:
			"Based in Morocco, I'm a Data Engineering and Machine Learning student .Curious about understanding how logic and science are helping humans to solve life problems.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "Outmani Ossama",
		images: "/og.png",
		type: "website",
	},
	keywords: ["portfolio", "Outmani Ossama", "machine learning"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={spaceGrotesk.className}
				suppressHydrationWarning
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
