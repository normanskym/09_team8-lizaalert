const filterBlockHead = document.querySelectorAll(".aside__filter-block-head");

filterBlockHead.forEach(item => {
	item.addEventListener("click", function (evt) {
		evt.stopPropagation();
		item.parentNode.classList.toggle("aside__content-block_active");
	});
});