<template>
    <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
        <div class="col">
            <h4 class="tp-filter-widget-title">Sort by</h4>
            <course-filter-sort-by />
        </div>

        <div class="col">
            <h4 class="tp-filter-widget-title">All categories</h4>
            <course-filter-category />
        </div>

        <div class="col">
            <h4 class="tp-filter-widget-title">Instructors</h4>
            <course-filter-instructor />
        </div>

        <div class="col">
            <h4 class="tp-filter-widget-title">Price</h4>
            <course-filter-price />
        </div>

        <div class="col">
            <h4 class="tp-filter-widget-title">Language</h4>
            <course-filter-language />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>