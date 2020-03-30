'use strict';

{
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const date = ("0" + now.getDate()).slice(-2);
  const hour = ("0" + now.getHours()).slice(-2);
  const min = ("0" + now.getMinutes()).slice(-2);
  let ampm = '';
  if(hour < 12) {
    ampm = 'a.m.';
  }else {
    ampm = 'p.m.';
  }

  const output = `${year}/${month}/${date} ${hour % 12}:${min}${ampm}`;
  document.getElementById('time').textContent = output;
}