export class WidgetCard {
  constructor(selector) {
    if (typeof selector === 'string') {
      this.selector = document.querySelector(selector); 
    }

    this.cardsType = Array.from(this.selector.querySelectorAll('.list__item'));
    this.cardForm = this.selector.querySelector('.card__form-value');
    this.inputForm = this.selector.querySelector('.form__input');


    
  }

  inputCardValue(e) {
    e.preventDefault();
    const value = e.target.value;
    if (value.length === 4 ||
        value.length === 8 ||
        value.length === 12) {
      e.target.value += ' ';
        }
  }
  
}