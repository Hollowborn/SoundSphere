// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");

  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
}

// Function to highlight the active sidebar link based on the current page
function highlightActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();

  // Select all sidebar links
  const sidebarLinks = document.querySelectorAll("#sidebar .nav-link");

  // Loop through the links and add the 'active' class to the matching link
  sidebarLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "main.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Function to dynamically load content into the main content area
function loadPage(url) {
  const mainContent = document.getElementById("main-content");

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${url}`);
      return response.text();
    })
    .then((data) => {
      mainContent.innerHTML = data;

      // Wait until the DOM is updated
      requestAnimationFrame(() => {
        highlightActiveLink();

        // Call song generator only for main.html
        if (url.includes("main.html")) {
          generateSongList();
        }

        // If you had song click listeners, this is where you'd initialize them
        // initializeSongClickListeners();
      });

      history.pushState(null, "", url);
    })
    .catch((error) => console.error("Error loading page:", error));
}

function showAlert(feature) {
  const alertContainer = document.getElementById("alert-container");

  // Create the alert element
  const alert = document.createElement("div");
  alert.className = "alert alert-danger alert-dismissible fade show";
  alert.role = "alert";
  alert.innerHTML = `
      <strong>${feature} Feature:</strong> This feature is currently under development.
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

  // Append the alert to the container
  alertContainer.appendChild(alert);

  // Automatically remove the alert after 5 seconds
  setTimeout(() => {
    alert.classList.remove("show");
    alert.addEventListener("transitionend", () => alert.remove());
  }, 5000);
}
// Add event listeners to sidebar links for dynamic loading
document.querySelectorAll("#sidebar .nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const url = this.getAttribute("href");
    loadPage(url);
  });
});
document.querySelectorAll(".card-artist").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    const url = this.getAttribute("href");
    loadPage(url);
  });
});

// Highlight the active link on page load
// document.addEventListener('DOMContentLoaded', () => {

// });

document.addEventListener("DOMContentLoaded", function () {
  setupSidebarListeners();

  const currentPage = window.location.pathname.split("/").pop();
  const defaultPage =
    currentPage === "" || currentPage === "layout.html"
      ? "main.html"
      : currentPage;
  loadPage("defaultPage");
});
