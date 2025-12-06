document.getElementById("leadForm").addEventListener("submit", function (e) {
e.preventDefault();


const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;


const whatsappNumber = "+917488964774";
const message = `New Lead Details:%0AName: ${name}%0APhone: ${phone}`;


const url = `https://wa.me/${whatsappNumber}?text=${message}`;


window.open(url, "_blank");
});
