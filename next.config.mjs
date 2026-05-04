/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  image: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**"
      },
    ],
  },
};

export default nextConfig;
