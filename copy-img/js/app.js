let btn = document.querySelectorAll('.item-btn');
let itemImg = document.querySelectorAll('.item-img');

btn.forEach(function (item, index) {
  item.addEventListener('click', function () {
    var canvas = document.createElement("canvas"); // create a canvas element
    var ctx = canvas.getContext("2d"); // get the canvas context

    // O'zgaruvchiga olish
    var currentImage = itemImg[index];

    canvas.width = currentImage.naturalWidth; // set the canvas width to the image width
    canvas.height = currentImage.naturalHeight; // set the canvas height to the image height
    ctx.drawImage(currentImage, 0, 0);
    canvas.toBlob(function (blob) {
      // convert the canvas to a blob
      var itemImgs = new ClipboardItem({ "image/png": blob }); // create a clipboard item
      navigator.clipboard.write([itemImgs]); // write the item to the clipboard
    });
  });
});
