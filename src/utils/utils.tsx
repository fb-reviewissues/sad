export function formatCreditCardNumber(cardNumber: string | number) {
  const cardDigits = cardNumber.toString().split('');

  for (let i = 3; i < cardDigits.length - 3; i++) {
    cardDigits[i] = '*';
  }

  // Kết hợp các ký tự để tạo chuỗi mới
  const formattedCardNumber = cardDigits.join('');

  return formattedCardNumber;
}

export function isPasswordValid(password: string) {
  // Biểu thức chính quy kiểm tra xem có dấu không
  const regex = /[!@#$%^&*(),.?":{}|<>]/;

  return !regex.test(password);
}