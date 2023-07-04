import CardInfo from "card-info";
import { validateCard } from "./validate";

export class WidgetCard {
  constructor(selector) {
    if (typeof selector === "string") {
      this.selector = document.querySelector(selector);
    }

    this.cardsType = Array.from(this.selector.querySelectorAll(".list__item"));
    this.cardForm = this.selector.querySelector(".card__form");
    this.inputForm = this.selector.querySelector(".form__input");

    this.inputCardValue = this.inputCardValue.bind(this);
    this.submitCardValue = this.submitCardValue.bind(this);

    this.inputForm.addEventListener('input', this.inputCardValue);
    this.cardForm.addEventListener('submit', this.submitCardValue);
  }

  inputCardValue(e) {
    e.preventDefault();

    const value = e.target.value.trim();

    const cardInfo = new CardInfo(value);

    console.log(cardInfo.brandAlias);

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
  }

  submitCardValue(e) {
    e.preventDefault();
    

    if (validateCard(this.inputForm.value)) {
      this.inputForm.classList.add('valid');
      setTimeout(() => {
        this.inputForm.classList.remove('valid');
      }, 3000);
    } else {
      this.inputForm.classList.add('invalid');
      setTimeout(() => {
        this.inputForm.classList.remove('invalid');
      }, 3000);
    } 
  }
}
