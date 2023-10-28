const sidebar_slider_link = document.querySelectorAll(".sidebar-slider-link");
const sidebar_slider_dropdown = document.querySelectorAll(
  ".sidebar-slider-dropdown"
);
const sidebar_caret = document.querySelectorAll(".sidebar-btn-link-caret");
sidebar_slider_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (
      !sidebar_slider_dropdown[index].classList.contains(
        "sidebar-slider-dropdown-show"
      )
    ) {
      sidebar_slider_dropdown[index].classList.add(
        "sidebar-slider-dropdown-show"
      );
      sidebar_caret[index].innerHTML = ` <i class="fas fa-caret-up"></i
      >`;
    } else {
      sidebar_slider_dropdown[index].classList.remove(
        "sidebar-slider-dropdown-show"
      );
      sidebar_caret[index].innerHTML = ` <i class="fas fa-caret-down"></i
      >`;
    }
  });
});
