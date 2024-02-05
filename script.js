// const buyCoursesBtn = document.getElementById('card-1');
// const cartList = document.getElementById('productItem');
// buyCoursesBtn.addEventListener('click', function () {


let itemsCount = 0;
    let totalPrice = 0;
    function addToCheckout(productName, productPrice) {
        const productItemsContainer = document.getElementById('productItems');
        const totalItemsElement = document.getElementById('totalItems');
        const totalPriceElement = document.getElementById('totalPrice');

        // added new product item
        const productItem = document.createElement('div');
        productItem.classList.add('flex', 'gap-4');
        productItem.innerHTML = `
            <div class="text-[#413960]">
                <h3 class="course-title text-base font-medium">${productName}</h3>
                <p class="course-price text-base">${productPrice}</p>
            </div>
        `;

        // Add new checkout item
        productItemsContainer.appendChild(productItem);
    }

    function checkout() {
        alert(`Checkout Total: ${totalPrice} TK`);
    }


// btn.addEventListener('click', function () {
//     // console.log(btn)
//     let newItem = document.getElementById();
// });


























// const product = [
//     {
//         id: 0,
//         image: 'images/card-1.jpg',
//         title: 'White Board Art',
//         price: 1000,
//     },
//     {
//         id: 1,
//         image: 'images/card-2.jpg',
//         title: 'Web Design',
//         price: 7000,
//     },
//     {
//         id: 2,
//         image: 'images/card-3.jpg',
//         title: 'Graphic Design',
//         price: 6000,
//     },
//     {
//         id: 3,
//         image: 'images/card-4.jpg',
//         title: 'Digital Marketing',
//         price: 3000,
//     },
//     {
//         id: 4,
//         image: 'images/card-5.jpg',
//         title: 'Contact Writing',
//         price: 2300,
//     },
//     {
//         id: 5,
//         image: 'images/card-6.png',
//         title: 'Wordpress Customize',
//         price: 4500,
//     },
//     {
//         id: 4,
//         image: 'images/card-7.png',
//         title: 'Modern Psychology',
//         price: 1300,
//     }
// ]


// const categories = [...new Set(product.map((item) => { return item }))];

// let i = 0;

// document.getElementById('root').innerHTML = categories.map((item) => {
//     let { image, title, price } = item;
//     return (
//         `<div id="card-2">
//         <img src="${image}"></img>
//         </div>
//         `
//     )
// })





