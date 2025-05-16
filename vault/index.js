// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Mobile navigation toggle functionality
  const createMobileNav = () => {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    // Create mobile menu button
    const mobileMenuBtn = document.createElement("button");
    mobileMenuBtn.classList.add("mobile-menu-btn");
    mobileMenuBtn.innerHTML = "<span></span><span></span><span></span>";
    mobileMenuBtn.setAttribute("aria-label", "Toggle navigation menu");

    // Add mobile menu button to header
    header.querySelector(".container").insertBefore(mobileMenuBtn, nav);

    // Toggle menu visibility on button click
    mobileMenuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  };

  // Initialize mobile nav if viewport width is less than 992px
  if (window.innerWidth < 992) {
    createMobileNav();
  }

  // Handle resize events
  window.addEventListener("resize", () => {
    if (
      window.innerWidth < 992 &&
      !document.querySelector(".mobile-menu-btn")
    ) {
      createMobileNav();
    }
  });

  // Simple animation for features section
  const featuresSection = document.querySelector(".features");
  const features = document.querySelectorAll(".feature");

  // Only run if intersection observer is supported and features exist
  if ("IntersectionObserver" in window && features.length > 0) {
    const featuresObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let delay = 0;
            features.forEach((feature) => {
              setTimeout(() => {
                feature.style.opacity = "1";
                feature.style.transform = "translateY(0)";
              }, delay);
              delay += 200;
            });
            featuresObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Set initial styles for animation
    features.forEach((feature) => {
      feature.style.opacity = "0";
      feature.style.transform = "translateY(20px)";
      feature.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    featuresObserver.observe(featuresSection);
  }

  // Fake "loading" app data to simulate functionality
  const simulateAppData = () => {
    console.log("Initializing Vault app data...");

    // Mock data for concerts
    const upcomingConcerts = [
      {
        id: 1,
        artist: "Taylor Swift",
        venue: "Madison Square Garden",
        date: "2025-07-15",
        location: { lat: 40.7505, lng: -73.9934 },
      },
      {
        id: 2,
        artist: "The Weeknd",
        venue: "Barclays Center",
        date: "2025-06-22",
        location: { lat: 40.6828, lng: -73.9758 },
      },
      {
        id: 3,
        artist: "Beyoncé",
        venue: "SoFi Stadium",
        date: "2025-08-05",
        location: { lat: 33.9534, lng: -118.3387 },
      },
      {
        id: 4,
        artist: "Kendrick Lamar",
        venue: "United Center",
        date: "2025-09-12",
        location: { lat: 41.8807, lng: -87.6742 },
      },
      {
        id: 5,
        artist: "Billie Eilish",
        venue: "Climate Pledge Arena",
        date: "2025-10-03",
        location: { lat: 47.6221, lng: -122.354 },
      },
    ];

    // Store mock data in local storage for demo purposes
    localStorage.setItem("vaultConcerts", JSON.stringify(upcomingConcerts));

    console.log("Vault app data initialized successfully!");
  };

  // Run the simulation
  simulateAppData();
});
