var slideIndex = 1;
const nextButton = document.querySelector(".nextButton-btn");
const creditCard = document.querySelector("#card");
const cardInput = document.querySelector("#card__input");
const cardHolder = document.querySelector("#cardholder");
const password = document.querySelector("#verification");
const cardNumber = document.querySelector("#cardnumber");
const date = document.querySelector("#date");
const legalServices = document.querySelector("#legal");
const legalServicesOption = document.querySelector(".legal__services");
const payPal = document.querySelector("#paypal");
const pay = document.querySelector("#pay");
const agreeBtn = document.querySelector("#agree");
const bars = Array.from(document.getElementsByClassName("step"));
const backButton = document.querySelector(".back-btn");

payment(slideIndex);

function plus(n) {
	payment((slideIndex += n));
}

function minus(n) {
	payment((slideIndex -= n));
}

function payment(n) {
	if (n === 1) {
		backButton.style.display = "none";
		nextButton.style.display = "block";
	}

	const panels = Array.from(document.getElementsByClassName("panel"));
	for (let i = 0; i < panels.length; i++) {
		panels[i].style.display = "none";
	}
	if (n < 1) {
		slideIndex = panels.length;
	}
	if (n > panels.length) slideIndex = 1;
	panels[slideIndex - 1].style.display = "block";
	if (n > 1) {
		if (n <= 4) {
			bars[slideIndex - 2].classList.add("active");
		}
	}
	back.addEventListener("click", function () {
		bars[slideIndex - 1].classList.remove("active");
	});
}

creditCard.addEventListener("click", function () {
	nextButton.style.display = "block";
	if (this.checked) {
		cardInput.style.display = "flex";
		cardInput.style.transition = "all .4s linear";
		this.parentNode.parentNode.parentNode.style.marginTop = "-90px";
		this.parentNode.parentNode.parentNode.style.transition = "all .4s linear";
	}
});
payPal.addEventListener("click", function () {
	nextButton.style.display = "block";
	pay.style.display = "block";
	this.checked ? (cardInput.style.display = "none") : "block";
});

Next.addEventListener("click", function (e) {
	document.querySelector(".back-btn").style.display = "block";
	this.style.display = "none";
});
agreeBtn.addEventListener("click", () => {
	Next.style.display = "block";
});
