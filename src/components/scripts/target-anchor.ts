export const TargetAnchor = (id: string) => {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 100;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
