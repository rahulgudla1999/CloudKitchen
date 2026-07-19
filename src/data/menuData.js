// ═══════════════════════════════════════════════════════
// Menu Data — Edit this file to add/remove/update dishes
// ═══════════════════════════════════════════════════════

export const menuData = {
  rice: {
    title: 'Annam & Biryani — Rice',
    dishes: [
      {
        name: 'Sircilla Chicken Biryani',
        spice: '●●●',
        price: '₹220',
        desc: 'Long-grain rice layered with marinated chicken, dum-cooked over slow coals.',
        image: '/assets/chicken_biryani.jpg',
      },
      {
        name: 'Mutton Biryani',
        spice: '●●●',
        price: '₹280',
        desc: 'Tender mutton, whole spices, and rice cooked together till the flavour sets in.',
        image: '/assets/mutton_curry.jpg',
      },
      {
        name: 'Chicken Pulav',
        spice: '●●',
        price: '₹190',
        desc: 'Milder than biryani, with whole garam masala and fried onion through every grain.',
        image: '/assets/chicken_pulav.jpg',
      },
      {
        name: 'Bagara Rice',
        spice: '●',
        price: '₹150',
        desc: 'Ghee rice tempered with cashew, whole spice and curry leaf — the base for any kura.',
        image: '/assets/bagara_rice.jpg',
      },
    ],
  },
  curry: {
    title: 'Kura & Vepudu — Curries & Fry',
    dishes: [
      {
        name: 'Kodi Kura',
        spice: '●●●',
        price: '₹210',
        desc: 'Classic Telangana chicken curry, red chilli and coriander forward, cooked in oil till it splits.',
        image: '/assets/chicken_curry.jpg',
      },
      {
        name: 'Mamsam Kura',
        spice: '●●●',
        price: '₹260',
        desc: 'Mutton curry simmered slow with roasted spice, best eaten with bagara rice.',
        image: '/assets/mutton_curry.jpg',
      },
      {
        name: 'Gongura Chicken',
        spice: '●●●●',
        price: '₹230',
        desc: 'Sorrel-leaf gravy, sharp and tangy, cooked down with chicken till the leaves melt in.',
        image: '/assets/chicken_curry.jpg',
      },
      {
        name: 'Natu Kodi Pulusu',
        spice: '●●●',
        price: '₹260',
        desc: 'Country chicken in a tamarind-spiked gravy, cooked the old way, low and slow.',
        image: '/assets/chicken_curry.jpg',
      },
      {
        name: 'Chicken Vepudu',
        spice: '●●●',
        price: '₹200',
        desc: 'Dry-roasted chicken fry with curry leaf and crushed pepper, no gravy, all crunch.',
        image: '/assets/chicken_pulav.jpg',
      },
      {
        name: 'Bagara Baingan',
        spice: '●●',
        price: '₹170',
        desc: 'Baby brinjal in a roasted peanut-sesame gravy — the traditional pair for bagara rice.',
        image: '/assets/bagara_rice.jpg',
      },
    ],
  },
  starter: {
    title: 'Starters & Sides',
    dishes: [
      {
        name: 'Chicken 65',
        spice: '●●●',
        price: '₹190',
        desc: 'Deep-fried curry-leaf chicken bites, sharp with red chilli and ginger-garlic.',
        image: '/assets/chicken_biryani.jpg',
      },
      {
        name: 'Sarva Pindi',
        spice: '●●',
        price: '₹90',
        desc: 'Thick rice-flour flatbread, pan-roasted with peanuts, sesame and green chilli.',
        image: '/assets/bagara_rice.jpg',
      },
      {
        name: 'Mirchi Bajji',
        spice: '●●●',
        price: '₹80',
        desc: 'Batter-fried long green chillies stuffed with tangy tamarind filling.',
        image: '/assets/chicken_curry.jpg',
      },
      {
        name: 'Perugu Annam',
        spice: '●',
        price: '₹100',
        desc: 'Curd rice tempered with mustard and curry leaf — the cool finish to a spicy meal.',
        image: '/assets/bagara_rice.jpg',
      },
    ],
  },
};

export const galleryItems = [
  { name: 'Chicken Biryani', price: '₹220', image: '/assets/chicken_biryani.jpg', alt: 'Sircilla Chicken Biryani — layered dum biryani' },
  { name: 'Kodi Kura', price: '₹210', image: '/assets/chicken_curry.jpg', alt: 'Kodi Kura — spicy Telangana chicken curry' },
  { name: 'Bagara Rice', price: '₹150', image: '/assets/bagara_rice.jpg', alt: 'Bagara Rice — ghee-tempered fragrant rice' },
  { name: 'Mamsam Kura', price: '₹260', image: '/assets/mutton_curry.jpg', alt: 'Mamsam Kura — slow-cooked mutton curry' },
];

export const testimonials = [
  {
    text: "The chicken biryani tastes exactly like what my grandmother used to make. Real Sircilla flavour — no shortcuts. Ordering every weekend now!",
    author: 'Rajesh Kumar',
    location: 'Sircilla',
  },
  {
    text: "Bagara rice with kodi kura is the best combo meal I've had from any cloud kitchen. Fresh, hot, and the spice level is perfect.",
    author: 'Priya Reddy',
    location: 'Karimnagar',
  },
  {
    text: "Mutton curry melts in your mouth. You can tell it's been slow-cooked for hours. The meat just falls off the bone. Pure Telangana comfort food.",
    author: 'Venkat Rao',
    location: 'Hyderabad',
  },
  {
    text: "Gongura chicken is something you don't find easily outside Telangana. This kitchen nails it — tangy, spicy, absolutely authentic!",
    author: 'Lakshmi Devi',
    location: 'Sircilla',
  },
  {
    text: "Ordered for a family gathering — chicken pulav and mirchi bajji were gone in minutes. Everyone asked where I ordered from. Best cloud kitchen in Sircilla!",
    author: 'Mahesh Goud',
    location: 'Sircilla',
  },
];

export const specialtyCombo = {
  name: 'Bagara Rice & Kodi Kura Combo',
  description: "The plate Sircilla grew up on — ghee-tempered bagara rice next to a full portion of kodi kura, cooked fresh for that order, not held in a warmer. This is what we'd cook if you walked into our own kitchen.",
  items: [
    { label: 'Bagara Rice', value: '1 portion' },
    { label: 'Kodi Kura', value: 'Full' },
    { label: 'Onion & Lime', value: 'Included' },
    { label: 'Spice Level', value: '●●● default', isSpice: true },
    { label: 'Combo Price', value: '₹320', highlight: true },
  ],
};

export const contactInfo = {
  phones: ['+91 83749 64740', '+91 91103 41328'],
  phonesRaw: ['+918374964740', '+919110341328'],
  whatsapp: '918374964740',
  instagram: '@sircilla_cloud_kitchen',
  instagramUrl: 'https://instagram.com/sircilla_cloud_kitchen',
  location: 'Sircilla, Telangana',
};
