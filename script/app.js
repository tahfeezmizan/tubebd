const btnContainer = document.getElementById('btn-container');

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
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
    fetch(url)
    .then((res) => res.json())
    .then(({data}) => {
        const cardContainer = document.getElementById('card-container');
        console.log(data)
        console.log({data}.thumbnail)

        data.forEach((video) => {
            const newCard = document.createElement('div');
            newCard.innerHTML = `
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" />
                </figure>
                <div class="card-body">
                    <div id="" class="flex gap-8">
                        <div>
                            <img class="w-12 h-12 rounded-full"
                                src="" alt="">
                        </div>
                        <div class="">
                            <h2 class="font-bold text-base pb-2">Video title</h2>
                            <h4 class="text-sm pb-2">Author Name <span class="verified-Budget"></span></h4>
                            <p class="text-sm pb-2">91k views</p>
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
