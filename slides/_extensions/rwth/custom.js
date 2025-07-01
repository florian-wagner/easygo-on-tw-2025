// Taken from http://blog.schauderhaft.de/2018/07/23/footer-in-revealjs-from-asciidoc/
// Append slide number to footer by force
window.addEventListener("load", function() {

    footer = document.querySelector("div.footer")
    slidenumber = document.querySelector('div.slide-number');
    footer.prepend(slidenumber);

} );
