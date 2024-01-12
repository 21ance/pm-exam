const burgerMenuButton = document.querySelector("#burgerMenu");
const mobileNav = document.querySelector("#mobileNav");

burgerMenuButton.addEventListener("click", () => {
	mobileNav.classList.toggle("hidden");
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			return entry.target.classList.add("show");
		}
		entry.target.classList.remove("show");
	});
});

const fadeElements = document.querySelectorAll(".fade");
fadeElements.forEach((element) => observer.observe(element));
