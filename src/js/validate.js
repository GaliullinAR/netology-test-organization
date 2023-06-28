export function validateCard(cardNumber) {
  const arr = cardNumber.split('').map(Number);
  const lastCreditCardNumber = arr.pop();
  const creditCardNumber = arr.reverse();

  let sum = 0;

  for (let i = 0; i <= creditCardNumber.length - 1; i += 2) {
    let creditItem = creditCardNumber[i];
    creditItem = creditItem * 2;

    if (creditItem > 9) {
      creditCardNumber[i] = creditItem % 10 + 1;
    } else {
      creditCardNumber[i] = creditItem;
    }
  }

  creditCardNumber.forEach(item => {
    sum += item;
  })

  sum += lastCreditCardNumber;

  return sum % 10 === 0;
}