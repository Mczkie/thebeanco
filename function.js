const imgURL = [`./images/caramelMacch.jpg`, `./images/cold vanilla coffee.jpg`, `./images/Hazelnut.jpg`];
const slideshowImage = document.querySelector('.slideshow-image');

let i = 0;
setInterval(() => {
  while (i < imgURL.length) {
    loop(i);
    i++;
  }
  i = 0;
}, 2000);

function loop(i) {
  setTimeout(function () {
    slideshowImage.src = imgURL[i];
  }, 2000 * i);
}

var modal = document.getElementsByClassName('.card');
var image = document.getElementById('tap');

function changeImage() {}

document.querySelector(i);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
