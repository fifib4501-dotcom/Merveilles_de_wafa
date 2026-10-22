function sendOrder(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const product=document.getElementById('product').value;
  const quantity=document.getElementById('quantity').value;
  const message=document.getElementById('message').value.trim();
  const text=`Bonjour Merveilles de Wafaa ! Je m'appelle ${name}. Je voudrais commander ${quantity} x ${product}. ${message}`;
  // Replace 213XXXXXXXXX with your WhatsApp number.
  const whatsappNumber='213XXXXXXXXX';
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,'_blank');
}
document.addEventListener("DOMContentLoaded", function () {
  const photos = [
    "Screenshot_20261022_110033_Instagram.jpg",
    "Screenshot_20261022_110015_Instagram.jpg"
  ];

  const gallery = document.querySelectorAll(".gallery-item");

  gallery.forEach(function (item, index) {
    item.style.backgroundImage = `url("${photos[index % photos.length]}")`;
    item.style.backgroundSize = "cover";
    item.style.backgroundPosition = "center";
  });

  let current = 0;

  if (gallery.length > 0) {
    setInterval(function () {
      current = (current + 1) % photos.length;

      gallery.forEach(function (item, index) {
        item.style.opacity = "0.4";

        setTimeout(function () {
          item.style.backgroundImage =
            `url("${photos[(current + index) % photos.length]}")`;
          item.style.opacity = "1";
        }, 300);
      });
    }, 3000);
  }
});
