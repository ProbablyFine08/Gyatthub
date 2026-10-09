import "./globals.css";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "Framework Buddy",
  description: "Learn programming frameworks with beginner-friendly guides and tools.",
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