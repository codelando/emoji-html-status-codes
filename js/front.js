let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function () {
        cards.forEach(card => {
            card.classList.add('is-collapsed')
        });
        this.classList.remove('is-collapsed');
    }, false)
});