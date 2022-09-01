import { presets, defineConfig } from "sponsorkit";

export default defineConfig({
  github: {
    login: "grikomsn",
    type: "user",
  },
  formats: ["json", "png", "svg"],
  outputDir: "public",
  tiers: [
    { title: "Backer", preset: presets.small },
    { title: "Supporter", monthlyDollars: 5, preset: presets.small },
    { title: "Supporter+", monthlyDollars: 10, preset: presets.base },
    { title: "Pro Supporter", monthlyDollars: 25, preset: presets.medium },
    { title: "Mega Supporter", monthlyDollars: 50, preset: presets.large },
    { title: "Ultra Supporter", monthlyDollars: 100, preset: presets.xl },
    { title: "Not Your Average Supporter", monthlyDollars: 1000, preset: presets.xl },
  ],
});
