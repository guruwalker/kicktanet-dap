<template>
  <section class="tp-shop-grid-area pt-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 order-2 order-lg-0">
          <!-- filter sidebar area start -->
          <shop-filter-sidebar />
          <!-- filter sidebar area end -->
        </div>
        <div class="col-lg-9 order-1 order-lg-1">
          <div class="row">
            <div class="col-lg-8">
              <div
                class="tp-shop-grid-sidebar-left d-flex align-items-center mb-20"
              >
                <div class="tp-course-grid-sidebar-tab tp-tab">
                  <ul class="nav nav-tabs" id="filterTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        tabindex="0"
                      >
                        <svg-grid />
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                        tabindex="-1"
                      >
                        <svg-list />
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="tp-course-filter-top-result">
                  <p>
                    Showing 1–{{ currentItems.length }} of
                    {{ bookData.length }} results
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div
                class="tp-shop-grid-sidebar-right d-flex justify-content-start justify-content-lg-end mb-20"
              >
                <div
                  class="tp-course-grid-select tp-course-grid-sidebar-select"
                >
                  <select
                    class="nice-select wide"
                    @change="productFilterState.handleSelectFilter($event)"
                  >
                    <option value="">Short by:</option>
                    <option value="low">Price Low to High</option>
                    <option value="high">Price High to Low</option>
                    <option value="new">New Arrival</option>
                    <option value="sale">Discount Products</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row">
                <div
                  v-for="book in currentItems"
                  :key="book.id"
                  class="col-lg-4 col-sm-6"
                >
                  <shop-item :item="book" />
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="row">
                <div class="col-lg-12">
                  <shop-list-item
                    v-for="book in currentItems"
                    :key="book.id"
                    :item="book"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-event-inner-pagination pb-120">
            <div class="tp-dashboard-pagination pt-20">
              <div class="tp-pagination shop">
                <ui-pagination
                  :total-items="
                    productFilterState.filteredProducts?.length || 0
                  "
                  :items-per-page="per_page"
                  :max-pages-shown="5"
                  v-model="currentPage"
                  @pageChange="updatePage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import bookData from "@/data/book-shop-data";
import { useProductFilterStore } from "@/pinia/useProductFilterStore";

const per_page = 9;
const productFilterState = useProductFilterStore();
const length = computed(() => bookData.length ?? 0);
const { currentPage, endItem, startItem, updatePage } = usePagination(
  length,
  per_page
);

const currentItems = computed(() =>
  (productFilterState.filteredProducts ?? []).slice(
    startItem.value,
    endItem.value
  )
);
</script>
