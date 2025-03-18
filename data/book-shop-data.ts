import { type IBookDT } from "@/types/book-d-t";

const bookData:IBookDT[] = [
  {
    id: 1,
    title: "Nar Allt Ar Over",
    category: "Family Story",
    price: 99,
    tag: "Hot",
    stock: 10,
    discount:0,
    image: "/images/shop/product/shop-product-1.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author: "Nadya Toloko",	
    language:"English"
  },
  {
    id: 2,
    title: "Under en rosa Himmel",
    category: "History",
    price: 89,
    discount:3.5,
    stock: 12,
    tag: "35% off",
    image: "/images/shop/product/shop-product-2.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Gunvor Hofmo",
    language:"English"
  },
  {
    id: 3,
    title: "Michael Connelly",
    category: "Family Story",
    stock: 15,
    price: 100,
    discount:2,
    tag: "Hot",
    image: "/images/shop/product/shop-product-3.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Dan Gordon",
    language:"Irish"
  },
  {
    id: 4,
    title: "Lycko Balansen",
    category: "Business Of Art",
    stock: 20,
    price: 105.0,
    discount:0,
    tag: "New",
    image: "/images/shop/product/shop-product-4.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Bo Eriksson",
    language:"Swedish"
  },
  {
    id: 5,
    title: "Camilla Sten",
    category: "Business Of Art",
    stock: 25,
    price: 110,
    discount:5,
    tag: "35% off",
    image: "/images/shop/product/shop-product-5.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Per Ahlin",
    language:"English"
  },
  {
    id: 6,
    title: "I Alla Vara Dagar",
    category: "History",
    stock: 35,
    price: 120,
    discount:4,
    tag: "Hot",
    image: "/images/shop/product/shop-product-6.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Nadya Toloko",
    language:"Spanish"
  },
  {
    id: 7,
    title: "Michael Connelly",
    category: "Childrens Books",
    stock: 0,
    price: 150,
    discount:0,
    tag: "New",
    image: "/images/shop/product/shop-product-7.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Gunvor Hofmo",
    language:"English"
  },
  {
    id: 8,
    title: "Miss Night",
    category: "Romance",
    stock: 50,
    price: 170,
    discount:10,
    tag: "Hot",
    image: "/images/shop/product/shop-product-8.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Bo Eriksson",
    language:"Swedish"
  },
  {
    id: 9,
    title: "I Alla Vara Dagar",
    category: "Comedy",
    stock: 52,
    price: 99,
    discount:0,
    tag: "Hot",
    image: "/images/shop/product/shop-product-11.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Per Ahlin",
    language:"English"
  },
  {
    id: 10,
    title: "The Black Universe",
    category: "Modern Fiction",
    stock: 65,
    price: 88,
    discount:4,
    tag: "Hot",
    image: "/images/shop/product/shop-product-6.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Nadya Toloko",
    language:"Spanish"
  },
  {
    id: 11,
    title: "Michael Connelly",
    category: "History",
    stock: 8,
    price: 70,
    discount:0,
    tag: "New",
    image: "/images/shop/product/shop-product-7.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Dan Gordon",
    language:"Irish"
  },
  {
    id: 12,
    title: "Under en rosa Himmel",
    category: "Comedy",
    stock: 0,
    price: 79,
    discount:3.5,
    tag: "35% off",
    image: "/images/shop/product/shop-product-2.jpg",
    short_desc:'Online Only! Get more for less with The Work’s expertly hand-picked Book Bundles. These are a collection of great quality products',
    description:`"The Castle" invites readers into a world of mystery and intrigue. Follow protagonist Amelia as she unravels the secrets hidden within the ancient fortress's walls, confronting her own past along the way. This captivating tale weaves together history, suspense, and painting a vivid picture of love, loss, and the power of resilience. Prepare to be transported to a realm where the echoes of the past shape the present in ways.`,
    additional_info: {
      bookType: "History",
      publisher: "Luminous Publishing",
      language: "English",
      paperback: 368,
      isbn: "978-0-7352-1911-3",
      published: "14 August 2024"
    },
    author:"Bo Eriksson",
    language:"Swedish"
  }
];

export default bookData;
