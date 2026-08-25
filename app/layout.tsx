import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Inbox Tetris',
    template: '%s | Inbox Tetris',
  },
  description:
    'A productivity board that turns unread Gmail and IMAP emails into falling Tetris pieces. Clear lines by archiving, labeling, or starring email.',
  applicationName: 'Inbox Tetris',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b1020',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}