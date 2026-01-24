import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Validate required environment variables for production builds
  if (mode === "production") {
    const ga4Id = process.env.VITE_GA4_ID;
    if (!ga4Id || ga4Id.startsWith("G-XXXXXXXXXX")) {
      console.warn(
        "⚠️  WARNING: VITE_GA4_ID is not properly configured. " +
        "Update .env with your actual GA4 Measurement ID (format: G-XXXXXXXXXX with 10 alphanumeric characters). " +
        "Proceeding with build but analytics will not work."
      );
    }
  }

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
        "X-Frame-Options": "SAMEORIGIN",
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
          order: "pre",
          handler(html) {
            const ga4Id = process.env.VITE_GA4_ID || "G-XXXXXXXXXX";
            return html.replace(/__VITE_GA4_ID__/g, ga4Id);
          },
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
