import { ClerkProvider } from '@clerk/nextjs/app-beta';
export default function RootLayout({ children }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
