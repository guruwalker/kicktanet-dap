import { defineStore } from "pinia";
import bookData from "@/data/book-shop-data";

export const useProductFilterStore = defineStore("product_filter", () => {
  const route = useRoute();
  const selectVal = ref<string>("");

  function handleSelectFilter(e:Event) {
    const target = e.target as HTMLSelectElement;
    selectVal.value = target.value;
  }
  
  const maxProductPrice = bookData.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, 0);

  const priceValues = ref([0, maxProductPrice]);

  const handlePriceChange = (value: number[]) => {
    priceValues.value = value;
  };

  const handleResetFilter = () => {
    priceValues.value = [0, maxProductPrice];
  };

  // filteredProducts
  const filteredProducts = computed(() => {
    if (route.query.minPrice && route.query.maxPrice) {
      return bookData.filter(
        (p) =>
          p.price >= Number(route.query.minPrice) &&
          p.price <= Number(route.query.maxPrice)
      );
    } 
    else if (selectVal.value) {
       if (selectVal.value === "low") {
        return bookData
          .slice()
          .sort((a, b) => Number(a.price) - Number(b.price));
      } else if (selectVal.value === "high") {
        return bookData
          .slice()
          .sort((a, b) => Number(b.price) - Number(a.price));
      } else if (selectVal.value === "new") {
        return bookData.slice(-8);
      } else if (selectVal.value === "sale") {
        return bookData.filter((p) => p.discount !== undefined && p.discount > 0);
      } else {
        return bookData;
      }
    } 
    else if (route.query.status) {
      if (route.query.status === "on-sale") {
        return bookData.filter((p) => p.discount !== undefined && p.discount > 0);
      } else if (route.query.status === "in-stock") {
        return bookData.filter((p) => p.stock > 0);
      }
    } 
    else if (route.query.category) {
      return bookData.filter(
        (p) =>
          p.category.toLowerCase().split(" ").join("-") ===
          route.query.category
      );
    } 
    else if (route.query.author) {
      return bookData.filter(
        (p) =>
          p.author.toLowerCase().split(" ").join("-") ===
          route.query.author
      );
    } 
    else if (route.query.language) {
      return bookData.filter(
        (p) =>
          p.language.toLowerCase().split(" ").join("-") ===
          route.query.language
      );
    } 
    else {
     return [...bookData]
    }
  });


  watch(
    () => route.query || route.path,
    () => { }
  );
  return {
    maxProductPrice,
    priceValues,
    handleSelectFilter,
    filteredProducts,
    handlePriceChange,
    handleResetFilter,
    selectVal,
  };
});
