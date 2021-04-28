const preprocess = require("svelte-preprocess");
const { default: windi } = require("vite-plugin-windicss");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      plugins: [
        windi({
          config: "windi.config.cjs",
        }),
      ],
    },
  },
};
