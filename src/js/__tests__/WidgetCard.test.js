import { JSDOM } from 'jsdom';
import { WidgetFormRender } from '../WidgerFormRender';

test('testing render widget im page', () => {
  const dom = new JSDOM(`
    <body>
      <script>
        const widget = new WidgetFormRender('card__container');
        widget.renderFormWidget();
      </srcipt>
    </body>
  `);

  expect(dom.window.document.querySelector('.card__contrainer')).not.toBeNull();
})