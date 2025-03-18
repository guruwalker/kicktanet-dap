import { all_courses } from "@/data/course-data";
import type { FilterState } from "@/types/course-filter-type";


export const useCourseFilter = defineStore("product_filter", () => {
  const initialState: FilterState = {
    courses: [...all_courses],
    filteredCourses: [],
    sortBy: "",
    category: "",
    instructor: "",
    priceFilter: "",
    language: "",
    searchTerm: "",
  };
  const courseFilterState = reactive<FilterState>(initialState);
  const allCourseData = ref(all_courses);

  function handleSortBy(sortBy: string) {
    courseFilterState.sortBy = sortBy;
  }

  function handlePrice(price: "all" | "free" | "paid") {
    courseFilterState.priceFilter = price;
  }

  function handleLanguage(lang: string) {
    courseFilterState.language = lang;
  }

  function handleInstructor(instructor: string) {
    courseFilterState.instructor = instructor;
  }

  function handleCategory(category: string) {
    courseFilterState.category = category;
  }

  // filteredCourses
  let filteredCourses = computed(() => {
    let courses = [...allCourseData.value]; 

    if (courseFilterState.sortBy) {
      if (courseFilterState.sortBy === "low") {
        courses = all_courses.slice().sort((a, b) => a.price - b.price);
      } else if (courseFilterState.sortBy === "rating") {
        courses = all_courses.slice().sort((a, b) => b.avg_rating - a.avg_rating);
      } else if (courseFilterState.sortBy === "high") {
        courses = all_courses.slice().sort((a, b) => b.price - a.price);
      }
    }
    
    if (courseFilterState.priceFilter === "free") {
      courses = courses.filter((course) => course.price === 0);
    } else if (courseFilterState.priceFilter === "paid") {
      courses = courses.filter((course) => course.price > 0);
    } else if (courseFilterState.priceFilter === "all") {
      courses = [...courses];
    }

    if (courseFilterState.category) {
      if(courseFilterState.category === 'All Courses') {
        courses = [...all_courses];
      } else {
        courses = courses.filter(
          (course) => course.category === courseFilterState.category
        );
      }
    }

    if (courseFilterState.instructor) {
      courses = courses.filter(
        (course) => course.author_name === courseFilterState.instructor
      );
    }

    //   Apply language filter
    if (courseFilterState.language) {
      courses = courses.filter(
        (course) => course.language === courseFilterState.language
      );
    }

    //   Apply search term
    if (courseFilterState.searchTerm) {
      courses = courses.filter((course) =>
        course.title
          .toLowerCase()
          .includes(courseFilterState.searchTerm.toLowerCase())
      );
    }

    return courses;
  });

  const route = useRoute();

  const filteredCoursesByRoute = computed(() => {
    let courses = [...all_courses];

    // Apply sorting
    if (route.query.sortBy) {
        if (route.query.sortBy === "low") {
            courses = courses.sort((a, b) => a.price - b.price);
        } else if (route.query.sortBy === "rating") {
            courses = courses.sort((a, b) => b.avg_rating - a.avg_rating);
        } else if (route.query.sortBy === "high") {
            courses = courses.sort((a, b) => b.price - a.price);
        }
    }

    // Apply price filter
    if (route.query.price === "free") {
        courses = courses.filter((course) => course.price === 0);
    } else if (route.query.price === "paid") {
        courses = courses.filter((course) => course.price > 0);
    } else if (route.query.price === "all") {
       courses = [...courses];
    }

    // Apply category filter
    if (route.query.category && route.query.category !== "all-courses") {
        courses = courses.filter(
            (course) => formatString(course.category) === route.query.category
        );
    }

    // Apply instructor filter
    if (route.query.instructor) {
        courses = courses.filter(
            (course) =>
                course.author_name.toLowerCase().split(" ").join("-") ===
                route.query.instructor
        );
    }

    // Apply language filter
    if (route.query.language) {
        courses = courses.filter(
            (course) =>
                course.language.toLowerCase().split(" ").join("-") ===
                route.query.language
        );
    }

    // Apply search term
    if (route.query.searchTerm) {
        const searchTerm = Array.isArray(route.query.searchTerm)
            ? route.query.searchTerm[0]
            : route.query.searchTerm;
        courses = courses.filter((course) =>
            course.title.toLowerCase().includes(searchTerm?.toLowerCase() || "")
        );
    }

    return courses;
});


  function resetFilter() {
    route.query.sortBy = "";
    courseFilterState.category = "";
    courseFilterState.instructor = "";
    courseFilterState.priceFilter = "";
    courseFilterState.language = "";
    courseFilterState.searchTerm = "";
  }

  return {
    courseFilterState,
    // filteredCourses,
    handleSortBy,
    handlePrice,
    handleLanguage,
    handleInstructor,
    handleCategory,
    allCourseData,
    resetFilter,
    filteredCoursesByRoute,
  };
});
