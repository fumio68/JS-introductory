'use strict';

{
  function total(price) {
    const tax = 0.1;
    return price + price * tax;
  }

  document.getElementById('output').textContent = 'コーーヒーメーカーの値段は' + total(8000) + '円（税込み）です';
}