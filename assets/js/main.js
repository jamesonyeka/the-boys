// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(".trending-carousel");
//   const prevBtn = document.querySelector(".prev-btn");
//   const nextBtn = document.querySelector(".next-btn");
//   const paginationContainer = document.querySelector(".trending-pagination");
//   let items = carousel.querySelectorAll(".trending-item");
//   let itemWidth = items[0].offsetWidth;
//   let itemsPerPage = Math.floor(carousel.offsetWidth / itemWidth);
//   let totalPages = Math.ceil(items.length / itemsPerPage);
//   const maxPaginationLines = 3;
//   let currentPage = 0;
//   let autoScrollInterval;

//   function createPaginationLines() {
//     paginationContainer.innerHTML = "";  // Clear existing lines
//     const paginationLines = Math.min(totalPages, maxPaginationLines);
//     for (let i = 0; i < paginationLines; i++) {
//       const line = document.createElement("div");
//       line.classList.add("trending-pagination-line");
//       line.addEventListener("click", () => goToPage(i * Math.ceil(totalPages / paginationLines)));
//       paginationContainer.appendChild(line);
//     }
//     updatePagination();  // Ensure the first pagination line is active
//   }

//   function goToPage(pageIndex) {
//     currentPage = pageIndex % totalPages;
//     carousel.scrollTo({
//       left: currentPage * carousel.offsetWidth,
//       behavior: "smooth",
//     });
//     updatePagination();
//   }

//   function updatePagination() {
//     const lines = paginationContainer.querySelectorAll(".trending-pagination-line");
//     const activeLine = Math.floor(currentPage / (totalPages / lines.length));
//     lines.forEach((line, index) => {
//       line.classList.toggle("active", index === activeLine);
//     });
//   }

//   function nextPage() {
//     goToPage((currentPage + 1) % totalPages);
//   }

//   function prevPage() {
//     goToPage((currentPage - 1 + totalPages) % totalPages);
//   }

//   prevBtn.addEventListener("click", () => {
//     prevPage();
//     resetAutoScroll();
//   });

//   nextBtn.addEventListener("click", () => {
//     nextPage();
//     resetAutoScroll();
//   });

//   function startAutoScroll() {
//     autoScrollInterval = setInterval(nextPage, 5000);  // Change slide every 5 seconds
//   }

//   function resetAutoScroll() {
//     clearInterval(autoScrollInterval);
//     startAutoScroll();
//   }

//   function handleResize() {
//     itemWidth = items[0].offsetWidth;
//     itemsPerPage = Math.floor(carousel.offsetWidth / itemWidth);
//     totalPages = Math.ceil(items.length / itemsPerPage);
//     currentPage = Math.min(currentPage, totalPages - 1);
//     createPaginationLines();  // Recreate pagination lines on resize
//     goToPage(currentPage);
//   }

//   carousel.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
//   carousel.addEventListener("mouseleave", startAutoScroll);

//   window.addEventListener("resize", handleResize);

//   createPaginationLines();  // Initial pagination setup
//   startAutoScroll();        // Start auto-scrolling
// });



// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerMenu = document.getElementById('hamburgerMenu');
//   const mobileMenu = document.getElementById('mobileMenu');

//   hamburgerMenu.addEventListener('click', function() {
//     mobileMenu.classList.toggle('active');
//   });

//   // Close menu when clicking outside
//   document.addEventListener('click', function(event) {
//     if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
//       mobileMenu.classList.remove('active');
//     }
//   });
// });


document.getElementById("hamburgerMenu").addEventListener("click", function(){
    document.getElementById("left-sidebar").classList.toggle("show-left-sidebar");
})