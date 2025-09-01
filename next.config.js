const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Nivel_2-Practica-4" : "",
  assetPrefix: isProd ? "/Nivel_2-Practica-4/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
