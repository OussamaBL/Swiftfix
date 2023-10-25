var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        var body = this.nextElementSibling;
        var isOpen = body.style.display === "block";
        closeAllFAQDetails();
        if (!isOpen) {
            this.classList.toggle("active");
            body.style.display = "block";
        }
    });
}
function closeAllFAQDetails() {
    var faqDetails = document.getElementsByClassName("faq-body");
    for (var j = 0; j < faqDetails.length; j++) faqDetails[j].style.display = "none";
    for (var k = 0; k < faq.length; k++) faq[k].classList.remove("active");
}