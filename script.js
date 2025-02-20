
const cards = document.querySelectorAll('.card');
const totalElement = document.getElementById('total-price');
const addToCartButton = document.querySelector('.add-to-cart');
// initial price
totalElement.textContent = 'Total: $0.00 USD';

cards.forEach(card => {
    const radioInput = card.querySelector('input[type="radio"]');
    const hiddenDetails = card.querySelector('.hidden-details');
    hiddenDetails.style.display = 'none';

    card.addEventListener('click', () => {
        if (card.classList.contains('selected')) {
            card.classList.remove('selected');
            hiddenDetails.style.display = 'none';
            totalElement.textContent = 'Total: $0.00 USD';
        } else {
            cards.forEach(c => {
                c.classList.remove('selected');
                c.querySelector('.hidden-details').style.display = 'none';
            });

            card.classList.add('selected');
            hiddenDetails.style.display = 'block';
            const price = radioInput.value;
            totalElement.textContent = `Total: $${price}.00 USD`;
        }
    });
});

addToCartButton.addEventListener('click', () => {
    const selectedCard = document.querySelector('.card.selected');
});
