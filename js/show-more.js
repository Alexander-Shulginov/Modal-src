function showMore() {
	const btnMore = document.querySelector(".info__btn--more");
	const btnLess = document.querySelector(".info__btn--less");
	const hiddenContent = document.querySelector(".info__more-value");

	const cssIsActive = "info__more-value--isVisible";
	const cssBtnMoreActive = "info__btn--more--isVisible";
	const cssBtnLessActive = "info__btn--less--isVisible";

	btnMore.addEventListener("click", () => {
		btnMore.classList.add(cssBtnMoreActive);
		hiddenContent.classList.add(cssIsActive);
		btnLess.classList.add(cssBtnLessActive);
	});

	btnLess.addEventListener("click", () => {
		btnMore.classList.remove(cssBtnMoreActive);
		hiddenContent.classList.remove(cssIsActive);
		btnLess.classList.remove(cssBtnLessActive);
	});
}

export default showMore;
