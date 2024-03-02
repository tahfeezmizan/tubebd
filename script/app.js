const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');
const errorElement = document.getElementById('error-element');

let selectedCategory = 1000;

const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';

    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            console.log(data)
            data.forEach((card) => {
                const newBtn = document.createElement('button');
                newBtn.className = 'btn btn-ghost bg-slate-600 text-white text-lg px-5'
                newBtn.innerHTML = card.category
                newBtn.addEventListener('click', () => fetchDataByCategories(card.category_id))
                btnContainer.appendChild(newBtn)
            })
        })
}

const fetchDataByCategories = (categoryID) => {
    selectedCategory = categoryID;
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            if (data.length === 0) {
                errorElement.classList.remove('hidden')
            }
            else {
                errorElement.classList.add('hidden')
            }
            // card container empty before running loop
            cardContainer.innerHTML = '';

            data.forEach((video) => {
                console.log(video)

                let verifiedBadge = '';
                if (video.authors[0].verified) {
                    verifiedBadge = `<img src="../image/verified badge.svg" alt="">`
                }

                const newCard = document.createElement('div');
                newCard.innerHTML = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img class="w-full mb-5" src="${video.thumbnail}" />
                </figure>
                <div class="card-body">
                    <div id="" class="flex gap-8">
                        <div>
                            <img class="w-12 h-12 rounded-full"
                                src="${video.authors[0].profile_picture}" alt="">
                        </div>
                        <div class="">
                            <h2 class="font-bold text-base pb-2">${video.title}</h2>
                            <div class="flex gap-5">
                            <h4 class="text-sm pb-2">${video.authors[0].profile_name}</h4>
                            ${verifiedBadge}
                            </div>
                            <p class="text-sm pb-2">${video.others.views}</p>
                        </div>
                    </div>
                </div>
            </div>
            `

                cardContainer.appendChild(newCard)
            })
        })
}

fetchCategories()

fetchDataByCategories(selectedCategory)
