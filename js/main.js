/* global $ */

window.onload = function(e){

  new Slider({
    images: '.gallery-1 .photo img',
    next: '.gallery-1 .tabs .next',
    prev: '.gallery-1 .tabs .prev',
    interval: '2000'
  });

  function Slider(images){

    this.images = document.querySelectorAll(images.images);
    this.btPrev = document.querySelector(images.prev);
    this.btNext = document.querySelector(images.next);
    this.interval = images.interval;

    var i = 0;

    this.prev = function() {
      this.images[i].className = "";
       i--;
       if( i < 0){
         i = this.images.length - 1;
       }
       this.images[i].className = "shown";
      },

    this.next = function() {
      this.images[i].className = "";
      i++;
      if( i >= this.images.length){
        i = 0;
      }
      this.images[i].className = "shown";
    }

    this.btPrev.addEventListener('click', this.prev.bind(this));
    this.btNext.addEventListener('click', this.next.bind(this));

    setInterval(this.next.bind(this), this.interval);

   }

}