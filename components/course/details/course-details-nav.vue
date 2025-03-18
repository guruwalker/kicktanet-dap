<template>
    <nav>
        <ul id="course_details2_nav">
            <li :class="{ current: activeSection === 'info' }">
                <a href="#info">Course Info</a>
            </li>
            <li :class="{ current: activeSection === 'curriculum' }">
                <a href="#curriculum">Curriculum</a>
            </li>
            <li :class="{ current: activeSection === 'instructors' }">
                <a href="#instructors">Instructors</a>
            </li>
            <li :class="{ current: activeSection === 'reviews' }">
                <a href="#reviews">Reviews</a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

const sections = ["info", "curriculum", "instructors", "reviews"];
const { activeSection } = useScrollSpy(sections);
</script>