

export function useScrollSpy(sectionIds: string[], offset: number = 150) {
  const activeSection = ref<string | null>(sectionIds[0]);

  const handleScroll = () => {
    const sections = sectionIds.map((id) => ({
      id,
      offsetTop: document.getElementById(id)?.offsetTop,
    }));

    const scrollPosition = window.scrollY + offset;

    // Find the active section based on scroll position
    const currentSection = sections
      .reverse()
      .find(
        (section) =>
          section.offsetTop !== undefined &&
          section.offsetTop <= scrollPosition
      );

    if (currentSection) {
      activeSection.value = currentSection.id;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    activeSection,
  };
}
