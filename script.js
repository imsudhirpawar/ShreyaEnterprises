function toggleSections() {
    var section1 = document.getElementById("OilPressMachine");
    var section2 = document.getElementById("section2");
  
    if (section1.style.display === "none") {
      // If section 1 is hidden, show it and hide section 2
      section1.style.display = "block";
      bannerSection.style.display = "block"
      section2.style.display = "none";
      headSection.style.display = "block"
    } else {
      // If section 1 is visible, hide it and show section 2
      section1.style.display = "none";
      section2.style.display = "block";
      bannerSection.style.display = "none"
      headSection.style.display = "none"
    }
  }
  