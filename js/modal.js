function modal() {
	const modal = document.querySelector(".modal");
	const btnOpen = document.querySelector(".btn-open");
	const btnClose = document.querySelectorAll(".btn-close");

	const cssIsActive = "modal--visible";
	const cssOverlay = "overlay";

	btnOpen.addEventListener("click", () => {
		modal.classList.add(cssIsActive);
		document.body.classList.add(cssOverlay);
	});

	btnClose.forEach((elem) => {
		elem.addEventListener("click", () => {
			modal.classList.remove(cssIsActive);
			document.body.classList.remove(cssOverlay);
		});
	});
}

export default modal;
