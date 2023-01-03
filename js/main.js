"use strict";

let input = document.querySelectorAll(".main-form__input");
let hold = document.querySelectorAll(".main-form__holder");

for (let i = 0; i < input.length; i++) {
	input[i].addEventListener("input", function () {
		hold[i].style.display = this.value == "" ? "inline" : "none";
	});
}
