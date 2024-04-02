import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/app/_libs/apolloWrapper";
import { ReduxProvider } from './_redux/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ministry of Brewing",
  description: "Ministry of Brewing",
  icons: {
    icon: '/assets/tabicon.png', // /public path
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ApolloWrapper>
            {children}
          </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
