//@farcaster/frame-sdk@0.0.63
import { init, post, text, button, image } from "@farcaster/frame-sdk";

let initialized = false;

export function initFrame() {
  if (initialized) return;

  init({
    initialState: () =>
      post(
        image({
          src:
            "https://dummyimage.com/1200x630/111827/ffffff&text=GmeChange%3A+Quest+of+the+Day",
          aspectRatio: "1.91:1"
        }),
        text("Bounty of day: Pass and Claim!"),
        button({
          label: "Open forms",
          onClick: ({ state }) => ({ ...state, open: true })
        })
      )
  });

  initialized = true;
}
