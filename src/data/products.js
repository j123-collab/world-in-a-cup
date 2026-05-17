export const products = [
  {
    id: 'silver-needle',
    name: 'Silver Needle Supreme',
    category: 'white',
    price: 45.00,
    description: 'The most prized white tea, consisting entirely of downy spring buds. Plucked before dawn in the Fujian mountains, this tea offers a delicate, sweet flavor with notes of melon and honey.',
    brewingInstructions: { temp: '175°F / 80°C', time: '3-4 mins', amount: '2 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_white_1779026827979.png',
    origin: 'Fujian, China'
  },
  {
    id: 'dragon-well',
    name: 'Imperial Dragon Well',
    category: 'green',
    price: 38.00,
    description: 'Also known as Longjing, this pan-roasted green tea from Hangzhou is famous for its flat, jade-green leaves and sweet, chestnut-like flavor. A classic, everyday luxury.',
    brewingInstructions: { temp: '175°F / 80°C', time: '2-3 mins', amount: '1 tbsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_green_1779026840624.png',
    origin: 'Zhejiang, China'
  },
  {
    id: 'junshan-yinzhen',
    name: 'Junshan Silver Needle',
    category: 'yellow',
    price: 65.00,
    description: 'An exceptionally rare yellow tea from Junshan Island. It undergoes a unique "smothering" process that removes the grassy bite of green tea, resulting in a complex, mellow cup with hints of sugarcane.',
    brewingInstructions: { temp: '170°F / 75°C', time: '3 mins', amount: '2 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_yellow_1779026853821.png',
    origin: 'Hunan, China'
  },
  {
    id: 'darjeeling-first-flush',
    name: 'Darjeeling First Flush',
    category: 'black',
    price: 42.00,
    description: 'The first harvest of the year from the Himalayas. This bright, golden liquor offers the classic muscatel flavor with vibrant floral top notes. The true champagne of teas.',
    brewingInstructions: { temp: '200°F / 95°C', time: '3-5 mins', amount: '1 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_black_1779026871128.png',
    origin: 'Darjeeling, India'
  },
  {
    id: 'iron-goddess',
    name: 'Iron Goddess of Mercy',
    category: 'oolong',
    price: 35.00,
    description: 'Tieguanyin is a premium oolong tea with a captivating floral aroma and a smooth, creamy texture. Its tightly rolled leaves can be steeped multiple times, revealing new complexities with each infusion.',
    brewingInstructions: { temp: '195°F / 90°C', time: '2-4 mins', amount: '1 tbsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_oolong_1779026883563.png',
    origin: 'Fujian, China'
  },
  {
    id: 'vintage-puerh',
    name: '15-Year Vintage Sheng',
    category: 'pu-erh',
    price: 120.00,
    description: 'A raw (sheng) pu-erh cake aged meticulously for 15 years. The initial astringency has transformed into a profound, earthy sweetness with notes of camphor, dried plum, and antique wood.',
    brewingInstructions: { temp: '212°F / 100°C', time: 'Rinse + 30 secs', amount: '5g / 100ml' },
    image: import.meta.env.BASE_URL + 'images/tea_puerh_1779026896375.png',
    origin: 'Yunnan, China'
  },
  {
    id: 'rooibos-vanilla',
    name: 'Madagascar Vanilla Rooibos',
    category: 'rooibos',
    price: 22.00,
    description: 'Premium red bush tea from South Africa blended with pieces of real Madagascar vanilla bean. Naturally caffeine-free, incredibly smooth, and deeply comforting.',
    brewingInstructions: { temp: '212°F / 100°C', time: '5-7 mins', amount: '1.5 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_rooibos_1779026919858.png',
    origin: 'Cederberg, South Africa'
  },
  {
    id: 'chamomile-lavender',
    name: 'Midnight Lullaby',
    category: 'herbal',
    price: 24.00,
    description: 'A soothing tisane blending Egyptian chamomile flowers with French lavender and a touch of lemon balm. The perfect, caffeine-free nightcap to ease you into sleep.',
    brewingInstructions: { temp: '212°F / 100°C', time: '5-7 mins', amount: '1 tbsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_herbal_1779026934955.png',
    origin: 'Global Blend'
  },
  {
    id: 'ceremonial-matcha',
    name: 'Uji Ceremonial Matcha',
    category: 'matcha',
    price: 55.00,
    description: 'Stone-milled from shade-grown tencha leaves in Uji, Japan. This vibrant, electric-green powder whips into a rich, frothy bowl of pure umami. Designed for traditional preparation.',
    brewingInstructions: { temp: '175°F / 80°C', time: 'Whisk until frothy', amount: '1/2 tsp / 2oz' },
    image: import.meta.env.BASE_URL + 'images/tea_matcha_1779026946276.png',
    origin: 'Kyoto, Japan'
  },
  {
    id: 'masala-chai',
    name: 'Bombay Masala Chai',
    category: 'chai',
    price: 28.00,
    description: 'A robust Assam black tea blended with freshly ground cardamom, cinnamon, ginger, cloves, and black peppercorns. Bold, spicy, and perfectly balanced for brewing with milk.',
    brewingInstructions: { temp: '212°F / 100°C', time: '5 mins', amount: '1 tbsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_chai_1779026958244.png',
    origin: 'Assam, India'
  },
  {
    id: 'jasmine-dragon-pearls',
    name: 'Jasmine Dragon Pearls',
    category: 'hand crafted',
    price: 32.00,
    description: 'Young green tea leaves are hand-rolled into pearls and repeatedly scented with fresh jasmine blossoms. The pearls slowly unfurl in hot water, releasing an intoxicating floral aroma.',
    brewingInstructions: { temp: '175°F / 80°C', time: '3 mins', amount: '1 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_hand_crafted_1779026971980.png',
    origin: 'Fujian, China'
  },
  {
    id: 'earl-grey-reserve',
    name: 'Earl Grey Reserve',
    category: 'flavoured',
    price: 26.00,
    description: 'A premium take on a classic. High-grade Ceylon black tea infused with the cold-pressed oil of Italian bergamot oranges and a scattering of blue cornflower petals.',
    brewingInstructions: { temp: '212°F / 100°C', time: '3-4 mins', amount: '1 tsp / cup' },
    image: import.meta.env.BASE_URL + 'images/tea_flavoured_1779026984695.png',
    origin: 'Sri Lanka & Italy'
  }
];
