const data = {
  categories: [
    {
      slug: 'old-prints',
      title: 'Old Prints',
      description: 'Engravings and prints from the 17th–19th centuries.'
    },
    {
      slug: 'judaica',
      title: 'Judaica',
      description: 'Religious and cultural Jewish texts and artifacts.'
    },
    {
      slug: 'sci-fi',
      title: 'Science Fiction',
      description: 'Classic and collectible science fiction works.'
    }
  ],
  items: [
    {
      slug: 'florence-map-1680',
      category: 'old-prints',
      title: 'Map of Florence (1680)',
      shortDescription: 'Hand-coloured copperplate map.',
      longDescription: 'A hand-coloured copperplate map of Florence, published in 1680. Excellent condition for its age.',
      price: 120.0
    },
    {
      slug: 'talmud-1875',
      category: 'judaica',
      title: 'Talmud Volume (1875)',
      shortDescription: 'Printed edition, Hebrew.',
      longDescription: 'A well-preserved 1875 Talmud volume. Leather binding, gilt edges.',
      price: 450.0
    },
    {
      slug: 'asimov-1st-1950',
      category: 'sci-fi',
      title: 'Asimov — First Edition (1950)',
      shortDescription: 'First edition, signed copy.',
      longDescription: 'Rare first edition science fiction novel with author signature.',
      price: 980.0
    }
  ]
}

export default data
