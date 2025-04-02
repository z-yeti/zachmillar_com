import { useEffect } from "react";

const generateFavicon = (color: string) => `
  <svg width="64" height="64" viewBox="0 0 54.12 33.192" xmlns="http://www.w3.org/2000/svg">
    <g stroke-linecap="round" fill-rule="nonzero" font-size="9pt" stroke="${color}" stroke-width="0.25mm" fill="${color}" style="stroke:${color};stroke-width:0.25mm;fill:${color}">
      <path d="M 23.76 5.04 L 7.608 27.864 L 23.976 27.864 L 23.256 33.192 L 0 33.192 L 0 28.2 L 16.368 5.184 L 1.728 5.184 L 1.728 0 L 23.76 0 L 23.76 5.04 Z" />
      <path d="M 44.952 0 L 52.248 0 L 54.12 33.192 L 48.264 33.192 L 47.64 17.904 Q 47.568 15.984 47.556 14.34 Q 47.544 12.696 47.568 11.22 A 106.252 106.252 0 0 1 47.624 9.067 A 94.846 94.846 0 0 1 47.652 8.376 Q 47.712 7.008 47.808 5.688 L 43.416 27.432 L 38.088 27.432 L 33.384 5.688 Q 33.48 6.96 33.552 8.352 A 101.244 101.244 0 0 1 33.64 10.508 A 114.315 114.315 0 0 1 33.66 11.256 Q 33.696 12.768 33.708 14.448 A 67.61 67.61 0 0 1 33.71 14.931 Q 33.71 16.389 33.648 17.952 L 33.192 33.192 L 27.432 33.192 L 29.304 0 L 36.6 0 L 40.872 21.912 L 44.952 0 Z" />
    </g>
  </svg>
`;

const updateFavicon = (isDarkMode: boolean) => {
  const color = isDarkMode ? "#F0F2FF" : "#1a1a2e";
  const svgString = generateFavicon(color);
  const encodedSvg = encodeURIComponent(svgString);
  const faviconUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

  let link = document.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("type", "image/svg+xml");
    document.head.appendChild(link);
  }
  link.setAttribute("href", faviconUrl);
};

export const useDynamicFavicon = () => {
  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

    const applyFavicon = () => updateFavicon(matchMedia.matches);

    applyFavicon(); // Set initial favicon
    matchMedia.addEventListener("change", applyFavicon); // Update on theme change

    return () => matchMedia.removeEventListener("change", applyFavicon);
  }, []);
};
