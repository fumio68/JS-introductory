'use strict';

{
  const images = ['img/5-5/image1.jpg', 'img/5-5/image2.jpg', 'img/5-5/image3.jpg', 'img/5-5/image4.jpg','img/5-5/image5.jpg'];
  let current = 0;

  function changeImage(num) {
    if(current + num >= 0 && current + num < images.length){
      current += num;
      document.getElementById('main_image').src = images[current];
      pageNum();
    }
  };

  function pageNum() {
    document.getElementById('page').textContent = `${current + 1}/${images.length}`;
  }

  pageNum();

  document.getElementById('prev').onclick = function() {
    changeImage(-1);
  };

  document.getElementById('next').onclick = function() {
    changeImage(1);
  };
}