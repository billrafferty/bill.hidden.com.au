import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	site: "https://bill.hidden.com.au",
	base: "https://github.com/billrafferty/bill.hidden.com.au.git",
});
