import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
      // Security headers for development
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      // Plugin to replace environment variable placeholders in HTML
      {
        name: "inject-env-variables",
        transformIndexHtml: {
          order: "pre" as const,
          handler(html: string) {
            const ga4Id = "G-QZ5PVSKE6W";
            return html.replace(/__VITE_GA4_ID__/g, ga4Id);
          },
        },
      } as Plugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
