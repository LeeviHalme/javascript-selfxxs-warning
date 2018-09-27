// Detect when the page has loaded
window.addEventListener("load", function() {
  // Page has loaded, insert the message
  console.warn("%cStop!\n%cThis is a browser feature intended only for developers. If someone told you to copy and paste something here to get a \"new feature\" or \"hack\" someone's account, it is a scam and will give them access to your account.\r%cSee https://en.wikipedia.org/wiki/Self-XSS for more information.", "font-weight: bold; font-size: 35px; color: red;", "color: black; margin-top: 1rem;", "color: black; margin-top: 1rem;");
}, false);
