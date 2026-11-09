import { writeFileSync } from "node:fs";

const imgs = {
  hero: "Hero photo", about: "About photo", sports: "Sports and athletics",
  culture: "Cultural activities", arts: "Creative arts", clubs: "School clubs",
  competitions: "Educational competitions",
  news1: "News photo", news2: "News photo", news3: "News photo",
  event1: "Event photo", event2: "Event photo", event3: "Event photo",
  gallery1: "Classroom activities", gallery2: "Pupils learning",
  gallery3: "School events", gallery4: "Sports activities",
  gallery5: "Teachers and pupils", gallery6: "School environment",
};

for (const [name, label] of Object.entries(imgs)) {
  const [w, h] = name === "hero" ? [1600, 900] : [1200, 800];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#123B70"/><stop offset="1" stop-color="#2F5F9E"/></linearGradient></defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<text x="50%" y="46%" text-anchor="middle" font-family="Arial" font-size="${h * 0.05}" fill="#FFFFFF" font-weight="bold">PLACEHOLDER IMAGE</text>
<text x="50%" y="56%" text-anchor="middle" font-family="Arial" font-size="${h * 0.04}" fill="#EAF2FB">${label}</text>
<text x="50%" y="64%" text-anchor="middle" font-family="Arial" font-size="${h * 0.03}" fill="#EAF2FB">Replace with a real school photo</text>
</svg>`;
  writeFileSync(`public/images/${name}.svg`, svg);
}
console.log("Done");