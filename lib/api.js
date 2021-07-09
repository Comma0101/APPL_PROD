// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const data = [{
  id: "diamond-bracelet",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Diamond Bracelet",
  category: "bracelet",
  price: 140,
}, {
  id: "copper-bracelet",
  image: "/images/kith/FZZ2021063001001/2.jpg",
  name: "Copper Bracelet",
  category: "bracelet",
  price: 190
}, {
  id: "diamond-ring",
  image: "/images/kith/FZZ2021063001001/3.jpg",
  name: "Diamond Ring",
  category: "ring",
  price: 230
}, {
  id: "sapphire-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Sapphire Ring",
  category: "ring",
  price: 190
}, {
  id: "star-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Star Cut Diamond Ring",
  category: "ring",
  price: 270
}, {
  id: "garnet-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Garnet Ring",
  category: "ring",
  price: 150
}, {
  id: "ruby-necklace",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Ruby Necklace",
  category: "",
  price: 90
}, {
  id: "topaz-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Topaz Ring",
  category: "ring",
  price: 160
}, {
  id: "diamond-wedding-bands",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Diamond Wedding Bands",
  category: "ring",
  price: 470
}, {
  id: "woven-diamond-bracelet",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Woven Diamond Bracelet",
  category: "bracelet",
  price: 350
}, {
  id: "emerald-signet",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Emerald Signet Ring",
  category: "ring",
  price: 210
}, {
  id: "royal-sapphire-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Royal Sapphire Ring",
  category: "ring",
  price: 350
}, {
  id: "double-band",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Double Diamond Band",
  category: "ring",
  price: 240
}, {
  id: "diamond-earrings",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Diamond Earrings",
  category: "earring",
  price: 260
}, {
  id: "ruby-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Ruby Ring",
  category: "ring",
  price: 220
}, {
  id: "oval-sapphire-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Oval Sapphire Ring",
  category: "ring",
  price: 280
}, {
  id: "ruby-moon-necklace",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Ruby Moon Necklace",
  category: "necklace",
  price: 320
}, {
  id: "diamond-teardrop-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Diamond Teardrop Ring",
  category: "ring",
  price: 170
}, {
  id: "dragon-clasp-necklace",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Dragon Clasp Necklace",
  category: "necklace",
  price: 320
}, {
  id: "double-diamond-ring",
  image: "/images/kith/FZZ2021063001001/1.jpg",
  name: "Double Diamond Ring",
  category: "ring",
  price: 260
}]

export async function getProductById(id) {
  return data.find(product => product.id === id)
}

export async function getProducts({ category = null } = {}) {
  if (category) {
    return data.filter(product => product.category === category)
  } else {
    return data
  }
}