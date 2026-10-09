import "./globals.css";
import AppShell from "../components/AppShell";
import brandLogo from "../components/img/favicon.svg";

export const metadata = {
  title: "Framework Buddy",
  description: "Learn programming frameworks with beginner-friendly guides and tools.",
  icons: {
    icon: brandLogo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}