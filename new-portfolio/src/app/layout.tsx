import { Header } from "@/components/common/header";
import "./globals.css";
import { Metadata } from "next";
import { Saira } from "next/font/google";
import { DefaultProviders } from "@/components/defaultProviders";
import StyledComponentsRegistry from "../../registry";

const saira = Saira({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "<edCode/>",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <StyledComponentsRegistry>
          <DefaultProviders>
            <Header />
            {children}
          </DefaultProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
