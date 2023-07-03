import CardInfo from "card-info";

const input = document.querySelector(".form__input");
let count = 0;
input.addEventListener("input", (e) => {
  e.preventDefault();
  const value = e.target.value.trim();
  const arr = value.split("");

  const cardInfo = new CardInfo(value);

  const brandCard = document.querySelector(
    `[data-type="${cardInfo.brandAlias}"]`
  );
  const listItems = document.querySelectorAll(".list__item");

  if (value.length > 0 && cardInfo.brandAlias !== null) {
    listItems.forEach((item) => {
      item.classList.remove("valid");
      item.classList.add("invalid");
    });

    brandCard.parentElement.classList.remove("invalid");
    brandCard.parentElement.classList.add("valid");
  }


  if (value.length === 0) {
    listItems.forEach((item) => {
      item.classList.remove("valid");
      item.classList.add("invalid");
    });
  }
});
