//   Sidebar Slider Dropdowns Toggle
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

//  Main Section Left Sidebar Dropdowns Toggle
const main_sidebar_link = document.querySelectorAll(".main-sidebar-link");
const main_section_sidebar_dropdown = document.querySelectorAll(
  ".main-section-sidebar-dropdown"
);
const main_section_sidebar_caret = document.querySelectorAll(
  ".main-section-sidebar-link-caret"
);
main_sidebar_link.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (
      !main_section_sidebar_dropdown[index].classList.contains(
        "main-section-sidebar-dropdow-show"
      ) &
      !main_section_sidebar_dropdown[index].classList.contains(
        "sidebar-link-open"
      )
    ) {
      main_section_sidebar_dropdown[index].classList.add(
        "main-section-sidebar-dropdow-show"
      );
      main_section_sidebar_caret[
        index
      ].innerHTML = `<i class="far fa-angle-up"></i
      >`;
    } else {
      main_section_sidebar_dropdown[index].classList.remove(
        "main-section-sidebar-dropdow-show"
      );
      main_section_sidebar_dropdown[index].classList.remove(
        "sidebar-link-open"
      );
      main_section_sidebar_caret[
        index
      ].innerHTML = ` <i class="far fa-angle-down"></i
      >`;
    }
  });
});
// Modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//
// const header_sub_nav_link = document.querySelector(".a");
// const header_sub_nav_dropdown = document.querySelector(
//   ".header-sub-nav-dropdown"
// );
// header_sub_nav_link.addEventListener("mouseover", () => {
//
//   header_sub_nav_dropdown.style.display = "block";
// });
// header_sub_nav_dropdown.addEventListener("mouseover", () => {
//   header_sub_nav_dropdown.style.display = "block";
// });
// header_sub_nav_link.addEventListener("mouseout", () => {
//
//   header_sub_nav_dropdown.style.display = "none";
// });

// Select Custom Input
const custom_input_options = document.querySelector(".custom-input-options");
const custom_input = document.querySelector(".custom-input");
const custom_input_li = document.querySelectorAll(".custom-input-li");

custom_input.addEventListener("click", () => {
  custom_input_options.classList.add("custom-input-options-show");
});

custom_input_li.forEach((item, index) => {
  item.addEventListener("click", () => {
    var value = item.innerHTML;
    custom_input.value = value;
    custom_input_options.classList.remove("custom-input-options-show");
  });
});

custom_input_options.addEventListener("mouseleave", () => {
  custom_input_options.classList.remove("custom-input-options-show");
});

// Date Picker
$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: "left",
  });
});

// Tabination Toggle Swicth

const tabination_btn = document.querySelectorAll(".tabination_btn");
const table_body = document.querySelector(".table-body");
const empty_table = document.querySelector(".empty-table");

tabination_btn.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabination_btn.forEach((ele) => {
      ele.classList.remove("selected-tab");
    });

    switch (index) {
      case 0:
        table_body.style.display = "block";
        empty_table.style.display = "none";
        item.classList.add("selected-tab");
        console.log("Osama");
        return;
      case 1:
        console.log("Weds");
        table_body.style.display = "none";
        empty_table.style.display = "flex";
        item.classList.add("selected-tab");

        return;
      case 2:
        console.log("Eman");
        table_body.style.display = "none";
        empty_table.style.display = "flex";
        item.classList.add("selected-tab");

        return;
      case 3:
        console.log("IA");
        table_body.style.display = "none";
        empty_table.style.display = "flex";
        item.classList.add("selected-tab");

        return;
      default:
        table_body.style.display = "block";
        empty_table.style.display = "none";
        tabination_btn[0].classList.add("selected-tab");
    }
  });
});
