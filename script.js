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