import product_data from "@/data/book-shop-data";


export function discountPrice (price: number, discount: number) {
  return price - (price * discount) / 100;
}


export const formatKey = (key: string) => {
  return key
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
};


export const removeTagInText = (text: string) => {
  return text.replace(/(<([^>]+)>)/gi, "");
};



export function getTagClass(tag: string): string {
  if (tag.includes("%")) {
      return "off";
  }

  switch (tag) {
      case "Hot":
          return "hot";
      case "New":
          return "new";
      default:
          return "";
  }
}

export function formatString(str: string): string {
  return str
      .toLowerCase()
      .replace(/&/g, "") // Remove all occurrences of "&"
      .replace(/\s+/g, "-") // Replace one or more spaces with a single "-"
      .replace(/-+/g, "-") // Replace multiple "-" with a single "-"
      .trim(); // Remove any leading or trailing spaces
}

export function getMaxPrice () {
  const maxProductPrice = [...product_data].reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);
  return maxProductPrice;
}
