import "./globals.css";

export const metadata = {
  title: "Framework Buddy",
  description: "A beginner-friendly dashboard for exploring frameworks and learning with AI guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}