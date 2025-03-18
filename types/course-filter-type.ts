import { type ICourseDT } from "./course-d-t";

  export interface FilterState {
    courses: ICourseDT[];
    filteredCourses: ICourseDT[];
    sortBy: string;
    category: string;
    instructor: string;
    priceFilter: 'free' | 'paid' | 'all' | '';
    language: string;
    searchTerm: string;
  }
  
  
  