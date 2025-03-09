function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
}

// Attach the hideSidebar function to all sidebar links
document.querySelectorAll(".sidebar li a").forEach(link => {
    link.addEventListener("click", hideSidebar);
});
