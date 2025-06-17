// app/Providers.tsx
"use client";

import { ReactNode } from "react";
import { LiveblocksProvider } from "@liveblocks/react";

export function LiveblockProviders({ children }: { children: ReactNode }) {
  const publicApiKey = process.env.NEXT_PUBLIC_LIVEBLOCK_KEY!;

  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth" throttle={16}>
      {children}
    </LiveblocksProvider>
  );
}
