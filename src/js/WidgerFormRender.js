export class WidgetFormRender {
  constructor(name, options = {}) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      throw new Error("Неправильно был передан тип селектора");
    }

    this.options = options;
    
  }

  

  get gettingSelectorName() {
    return "." + this.name;
  }

  renderFormWidget() {
    const container = this.createContainer();
    const form = this.createForm();
    const title = this.createTitle();
    const cardList = this.createCardList();
    const cardFormValue = this.createInputAndButton();

    form.insertAdjacentElement("beforeend", title);
    form.insertAdjacentElement("beforeend", cardList);
    form.insertAdjacentElement("beforeend", cardFormValue);

    container.appendChild(form);
    document.body.appendChild(container);
  }

  createForm() {
    const form = document.createElement("FORM");
    form.classList.add("card__form");

    return form;
  }

  createContainer() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add('card__container');

    return cardContainer;
  }

  createTitle() {
    const titleName = this.options.titleName
      ? this.options.titleName
      : "Check your credit card number";

    const title = document.createElement("h1");
    title.textContent = titleName;
    title.classList.add("form__title");

    return title;
  }

  createCardList() {
    const { visa, mir, maestro, mastercard } = this.options.cardTypes;
    const list = document.createElement("ul");
    list.classList.add('card__form-list');
    let html = `
      <li class="list__item invalid"><img src="${maestro}" class="card-img" data-type="maestro"></li>
      <li class="list__item invalid"><img src="${mastercard}" class="card-img" data-type="master-card"></li>
      <li class="list__item invalid"><img src="${visa}" class="card-img" data-type="visa"></li>
      <li class="list__item invalid"><img src="${mir}" class="card-img" data-type="mir"></li>
    `;

    list.insertAdjacentHTML("beforeend", html);

    return list;
  }

  createInputAndButton() {
    const placeholder = this.options.placeholder
      ? this.options.placeholder
      : "enter your credit card number";
    const cardFormValue = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.type = "text";
    input.maxLength = 16;
    input.setAttribute("placeholder", placeholder);
    input.classList.add("form__input");

    button.type = "submit";
    button.textContent = this.options.buttonName ? this.options.buttonName : "Validate";
    button.classList.add("form__button");

    cardFormValue.classList.add("card__form-value");
    cardFormValue.insertAdjacentElement("beforeend", input);
    cardFormValue.insertAdjacentElement("beforeend", button);

    return cardFormValue;
  }

}

/* 
  Опции Виджета
  titleName - задает заголовок виджету
  placeholder - задает подсказку инпуту

*/
