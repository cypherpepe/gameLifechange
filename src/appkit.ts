import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { wagmiConfig } from "./wagmi";

let _appkit: ReturnType<typeof createAppKit> | undefined;

export function appkit() {
  if (_appkit) return _appkit;

  const wagmiAdapter = new WagmiAdapter({
    wagmiConfig
  });

  _appkit = createAppKit({
    projectId: "064a78938ac5dc2073de96d2276b08ab",
    adapters: [wagmiAdapter],
    metadata: {
      name: "GameChange",
      description: "Farcaster Game",
      url: "https://example.org",
      icons: []
    }
  });

  return _appkit!;
}
