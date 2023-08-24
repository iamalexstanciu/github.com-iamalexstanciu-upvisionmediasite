export default function UseScroll(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    console.log(sectionId + " is scrolled to.");
  } else {
    console.log("Section " + sectionId + " not found.");
  }
}
