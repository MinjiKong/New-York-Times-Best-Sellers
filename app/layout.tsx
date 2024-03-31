import { Metadata } from "next";
import Header from "./components/header";
import "./css/style.css";

export const metadata: Metadata = {
  title: {
    template: "%s | New York Times",
    default: "New York Times",
  },
  description: "The New York Times Best Sellers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
