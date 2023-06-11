function expand() {
  const topNav = document.getElementById("top-nav");
  if (topNav.className.includes("expand")) {
    topNav.classList.remove("expand");
  } else topNav.classList.add("expand");
}



var links = document.links;
for (var i = 0; i < links.length; i++) {
     links[i].target = "_blank";
}


 

