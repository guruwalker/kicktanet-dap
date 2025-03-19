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

<template>
  <div class="dashboader-area mb-30">
    <div class="tp-dashboard-tab">
      <h2 class="tp-dashboard-tab-title">All Images</h2>
    </div>
  </div>
  <section class="tp-shop-grid-area">
    <div class="container">
      <div class="row">
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
