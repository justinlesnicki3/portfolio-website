document.addEventListener("DOMContentLoaded", function () {
    hideSidebar(); 
});

function hideSidebar() {
    document.querySelector(".sidebar").style.display = "none";
}

document.querySelectorAll(".sidebar li a").forEach(link => {
    link.addEventListener("click", hideSidebar);
});
