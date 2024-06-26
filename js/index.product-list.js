const products = [
    {
        id: '1',
        title: 'Baby Yoda',
        description: 'An adorable illustration of Baby Yoda, capturing the beloved character from the Star Wars universe in a cute, minimalist style. Perfect for fans of all ages.',
        image: 'img/baby-yoda.svg',
        price: 9.99
    },
    {
        id: '2',
        title: 'Banana',
        description: 'A vibrant and detailed SVG illustration of a banana. Ideal for educational projects, children\'s books, or any digital content aiming to showcase healthy food.',
        image: 'img/banana.svg',
        price: 12.99
    },
    {
        id: '3',
        title: 'Girl',
        description: 'A beautifully detailed illustration of a young girl, styled in a modern, cartoon-like manner. Great for use in apps, books, or any media targeted at a younger audience.',
        image: 'img/girl.svg',
        price: 8.99
    },
    {
        id: '4',
        title: 'Viking',
        description: 'A powerful and striking illustration of a Viking warrior. This SVG captures the fierce essence of Viking culture, perfect for historical content, games, or themed decorations.',
        image: 'img/viking.svg',
        price: 7.99
    },
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy ${product.price}
                </button>
            </div>
        </article>`;
    }
    const productContainer = document.querySelector('.products__list');
    productContainer.innerHTML = productsHtml;
}
renderProducts(products);
