// vite.config.js
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///Volumes/990EVO/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Volumes/990EVO/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///Volumes/990EVO/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///Volumes/990EVO/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///Volumes/990EVO/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///Volumes/990EVO/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///Volumes/990EVO/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///Volumes/990EVO/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///Volumes/990EVO/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: [
    "**/*.glb",
    "**/*.hdr",
    "**/*.glsl",
    "**/*.mp4",
    "**/*.jpg",
    "**/*.pdf"
  ],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 3003,
    host: ["0.0.0.0", "www.ziyingqi.com"],
    allowedHosts: ["www.ziyingqi.com"]
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remixCloudflareDevProxy({
      getLoadContext: () => ({
        cloudflare: {
          env: {
            SESSION_SECRET: process.env.SESSION_SECRET || "dev-secret"
          }
        }
      }),
      platformProxy: {
        crypto: () => ({
          subtle: crypto.subtle,
          randomUUID: crypto.randomUUID?.bind(crypto),
          getRandomValues: crypto.getRandomValues?.bind(crypto)
        })
      }
    }),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy85OTBFVk8vcG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy85OTBFVk8vcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Wb2x1bWVzLzk5MEVWTy9wb3J0Zm9saW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQge1xuICB2aXRlUGx1Z2luIGFzIHJlbWl4LFxuICBjbG91ZGZsYXJlRGV2UHJveHlWaXRlUGx1Z2luIGFzIHJlbWl4Q2xvdWRmbGFyZURldlByb3h5LFxufSBmcm9tICdAcmVtaXgtcnVuL2Rldic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnO1xuaW1wb3J0IG1keCBmcm9tICdAbWR4LWpzL3JvbGx1cCc7XG5pbXBvcnQgcmVtYXJrRnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLWZyb250bWF0dGVyJztcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tICdyZW1hcmstbWR4LWZyb250bWF0dGVyJztcbmltcG9ydCByZWh5cGVJbWdTaXplIGZyb20gJ3JlaHlwZS1pbWctc2l6ZSc7XG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSAnQG1hcGJveC9yZWh5cGUtcHJpc20nO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBhc3NldHNJbmNsdWRlOiBbXG4gICAgXCIqKi8qLmdsYlwiLCBcbiAgICBcIioqLyouaGRyXCIsIFxuICAgIFwiKiovKi5nbHNsXCIsIFxuICAgIFwiKiovKi5tcDRcIiwgXG4gICAgXCIqKi8qLmpwZ1wiLFxuICAgIFwiKiovKi5wZGZcIlxuICBdLFxuICBidWlsZDoge1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDI0LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAzLFxuICAgIGhvc3Q6IFsnMC4wLjAuMCcsICd3d3cueml5aW5ncWkuY29tJ10sXG4gICAgYWxsb3dlZEhvc3RzOiBbJ3d3dy56aXlpbmdxaS5jb20nXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIG1keCh7XG4gICAgICByZWh5cGVQbHVnaW5zOiBbW3JlaHlwZUltZ1NpemUsIHsgZGlyOiAncHVibGljJyB9XSwgcmVoeXBlU2x1ZywgcmVoeXBlUHJpc21dLFxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0Zyb250bWF0dGVyLCByZW1hcmtNZHhGcm9udG1hdHRlcl0sXG4gICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogJ0BtZHgtanMvcmVhY3QnLFxuICAgIH0pLFxuICAgIHJlbWl4Q2xvdWRmbGFyZURldlByb3h5KHtcbiAgICAgIGdldExvYWRDb250ZXh0OiAoKSA9PiAoe1xuICAgICAgICBjbG91ZGZsYXJlOiB7XG4gICAgICAgICAgZW52OiB7XG4gICAgICAgICAgICBTRVNTSU9OX1NFQ1JFVDogcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQgfHwgJ2Rldi1zZWNyZXQnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHBsYXRmb3JtUHJveHk6IHtcbiAgICAgICAgY3J5cHRvOiAoKSA9PiAoe1xuICAgICAgICAgIHN1YnRsZTogY3J5cHRvLnN1YnRsZSxcbiAgICAgICAgICByYW5kb21VVUlEOiBjcnlwdG8ucmFuZG9tVVVJRD8uYmluZChjcnlwdG8pLFxuICAgICAgICAgIGdldFJhbmRvbVZhbHVlczogY3J5cHRvLmdldFJhbmRvbVZhbHVlcz8uYmluZChjcnlwdG8pLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pLFxuICAgIHJlbWl4KHtcbiAgICAgIHJvdXRlcyhkZWZpbmVSb3V0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVJvdXRlcyhyb3V0ZSA9PiB7XG4gICAgICAgICAgcm91dGUoJy8nLCAncm91dGVzL2hvbWUvcm91dGUuanMnLCB7IGluZGV4OiB0cnVlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAganNjb25maWdQYXRocygpLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQO0FBQUEsRUFDM1AsY0FBYztBQUFBLEVBQ2QsZ0NBQWdDO0FBQUEsT0FDM0I7QUFDUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsZUFBZTtBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNLENBQUMsV0FBVyxrQkFBa0I7QUFBQSxJQUNwQyxjQUFjLENBQUMsa0JBQWtCO0FBQUEsRUFDbkM7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxDQUFDLGVBQWUsRUFBRSxLQUFLLFNBQVMsQ0FBQyxHQUFHLFlBQVksV0FBVztBQUFBLE1BQzNFLGVBQWUsQ0FBQyxtQkFBbUIsb0JBQW9CO0FBQUEsTUFDdkQsc0JBQXNCO0FBQUEsSUFDeEIsQ0FBQztBQUFBLElBQ0Qsd0JBQXdCO0FBQUEsTUFDdEIsZ0JBQWdCLE9BQU87QUFBQSxRQUNyQixZQUFZO0FBQUEsVUFDVixLQUFLO0FBQUEsWUFDSCxnQkFBZ0IsUUFBUSxJQUFJLGtCQUFrQjtBQUFBLFVBQ2hEO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiLFFBQVEsT0FBTztBQUFBLFVBQ2IsUUFBUSxPQUFPO0FBQUEsVUFDZixZQUFZLE9BQU8sWUFBWSxLQUFLLE1BQU07QUFBQSxVQUMxQyxpQkFBaUIsT0FBTyxpQkFBaUIsS0FBSyxNQUFNO0FBQUEsUUFDdEQ7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixPQUFPLGNBQWM7QUFDbkIsZUFBTyxhQUFhLFdBQVM7QUFDM0IsZ0JBQU0sS0FBSyx3QkFBd0IsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUFBLFFBQ3BELENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
