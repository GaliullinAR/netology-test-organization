import mir from '../images/mir.svg';
import mastercard from '../images/mastercard.svg';
import maestro from '../images/maestro.svg';
import visa from '../images/visa.png';
import { WidgetCard } from "./WidgerCard";
import { WidgetFormRender } from "./WidgerFormRender";

const renderWidget = new WidgetFormRender('card__container', {
  cardTypes: {
    mir,
    mastercard,
    maestro,
    visa
  },
  titleName: 'Проверьте вашу карту',
  placeholder: 'Введите номер карты',
  buttonName: 'Проверить'
});

renderWidget.renderFormWidget();

const widgetCard = new WidgetCard(renderWidget.gettingSelectorName);



