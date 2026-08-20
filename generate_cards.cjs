const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const items = [
  { title: 'Authentic Khao Suey', desc: 'Rich coconut broth & fresh herbs', img: '/assets/bistro_khao_suey_1787178381167.jpg' },
  { title: 'Krapow Pizza', desc: 'Spicy Thai minced chicken & basil', img: '/assets/bistro_krapow_pizza_1787178418157.jpg' },
  { title: 'Handcrafted Coffee', desc: 'Perfectly steamed, richly brewed', img: '/assets/bistro_coffee_1787178439976.jpg' },
  { title: 'Nightlife & Shisha', desc: 'Unwind with our premium flavors', img: '/assets/hero.png' },
  { title: 'Cozy Ambiance', desc: 'Your neighborhood sanctuary', img: '/assets/story.png' },
  { title: 'Global Bites', desc: 'From kebabs to classic pancakes', img: '/assets/bistro_hero_ambiance_1787178350298.jpg' }
];

let cards = '';
for(let i=0; i<24; i++) {
  const item = items[i%6];
  cards += `          <div class="mc-card" style="transform: rotate(${i*15}deg)">
            <img src="${item.img}" alt="${item.title}">
            <div class="mc-card-content">
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          </div>\n`;
}

html = html.replace('<!-- Cards injected by JS -->', cards);
fs.writeFileSync('index.html', html);
console.log('Cards injected successfully.');
