'use strict';

const faqHeadingsNodes = document.querySelectorAll('.faq-heading');
const faqHeadings = [...faqHeadingsNodes];

const toggleFaqs = (event) => {
    const article = event.currentTarget.parentElement;
    article.classList.toggle('toggle-faq-on');
}

faqHeadings.forEach(heading => {
    heading.addEventListener('click', toggleFaqs);
})