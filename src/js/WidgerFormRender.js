export class WidgetFormRender {
  constructor(name, options = {}) {
    if(typeof name === 'string') {
      this.name = name;
    } else {
      throw new Error('Неправильно был передан тип селектора');
    }

    this.options = options;
  }

  static get gettingSelectorName() {
    return this.name;
  }

  
}