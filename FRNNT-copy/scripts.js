

var scroll = window.requestAnimationFrame ||
    function(callback) { window.setTimeout(callback,
         1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
elementsToShow.forEach(function (element) {
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});
scroll(loop);
}
loop();

function isElementInViewport(el) {
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
    (rect.top <= 0
     && rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document
.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement
.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document
.documentElement.clientHeight))
);
};

// AJAXXXXXXXXXXXXXXXX

(function ($) {
    

var article = $('.content'),
    section = $('section'),
    selected = $('#nav').find('.active');
 
$('#nav a').on('click', function(){

    event.preventDefault();

    var href = $(this).attr('href'),
        a = $(this),
        li = a.parent();

    if (selected.is(li)) return;

    selected = li;

    li.addClass('active')
        .siblings().removeClass('active');

        section.find('article').fadeOut();

        

$.ajax({
    url: href,
    type: 'GET',
    datatype: 'html'
}).done(function(data) {

    var newArticle = $(data).find(article);

    article.html(newArticle);

    newArticle.addClass('fadeIn' + selected.data('from'));

    section.html( $(data).find('article'))
});
    
});


})(jQuery);