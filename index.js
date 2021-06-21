var main_image = document.getElementById("main-image");
main_image.src = productData.photos[0];
var product_name = document.getElementById("product-name");
product_name.textContent = productData.name;
var product_brand = document.getElementById("product-brand");
product_brand.textContent = productData.brand;
var price_color = document.getElementById("price-color");
price_color.textContent = productData.price;
var product_description = document.getElementById("product-description");
product_description.textContent = productData.description;
var product_images = document.getElementsByClassName("product-images");
var product_images = product_images[0];
console.log(product_images);
for (var i = 0; i < productData.photos.length; i++) {
  var image_div = document.createElement("img");
  image_div.src = productData.photos[i];
  image_div.id = "product-image-" + i;
  image_div.className = "clickable";
  image_div.onclick = imgClick;
  product_images.appendChild(image_div);
}
function imgClick() {
    imgClicked = document.getElementById(this.id);
    clickable_images = document.getElementsByClassName("clickable");
    for(var img of clickable_images){
        img.classList.remove("clicked");
    }
    imgClicked.classList.add("clicked");
    main_image.src = imgClicked.src;
}