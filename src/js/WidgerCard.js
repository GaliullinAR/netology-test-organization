export class WidgetCard {
  constructor(selector) {
    if (typeof selector === 'string') {
      this.selector = document.querySelector(selector); 
    }

    this.cardsType = Array.from(this.selector.querySelectorAll('.list__item'));
    this.cardForm = this.selector.querySelector('.card__form-value');
    this.inputForm = this.selector.querySelector('.form__input');


  }
}