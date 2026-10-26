/* import type { Metadata } from 'next';
import './globals.css'; */
// export const metadata: Metadata = { title: 'MissingPeopleHub | Every share can make a difference', description: 'A community-powered platform to help reconnect missing people with their families.' };
// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }


import type { ReactNode} from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'MissingPeopleHub | Every share can make a difference', description: 'A community-powered platform to help reconnect missing people with their families.' };


export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
