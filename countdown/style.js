var isMobile = window.matchMedia("(max-width: 768px)");

console.log(isMobile);
function handleViewportChange(mobileView) {
  if (mobileView.matches) {
  } else {
  }
}

// Call the function initially to apply the appropriate changes
handleViewportChange(isMobile);

// Add an event listener to handle changes in viewport width
isMobile.addListener(handleViewportChange);
