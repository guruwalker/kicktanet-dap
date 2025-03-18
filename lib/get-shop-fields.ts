import bookData from "@/data/book-shop-data";

type CategoryCounts = { [key: string]: number };

const shopCategoryCounts = bookData.reduce<CategoryCounts>((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

export const shopCategories = Object.entries(shopCategoryCounts).map(
  ([category, bookCount]) => {
    return {
      category,
      bookCount,
    };
  }
);

const authorCount = bookData.reduce<CategoryCounts>((acc, item) => {
  acc[item.author] = (acc[item.author] || 0) + 1;
  return acc;
}, {});

export const bookAuthors = Object.entries(authorCount).map(
  ([author, authorCount]) => {
    return {
        author,
        authorCount,
    };
  }
);

export const allLanguages = [...new Set(bookData.map((item) => item.language))];