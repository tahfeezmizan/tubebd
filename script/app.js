const btnContainer = document.getElementById('btn-container');

const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';

    fetch(url)
        .then((res) => res.json())
        .then(({data}) => {
            console.log(data)
            data.forEach((card) => {
                const newBtn = document.createElement('button');
                newBtn.className = 'btn btn-ghost bg-slate-600 text-white text-lg px-5'
                newBtn.innerHTML = card.category
                btnContainer.appendChild(newBtn)
            })
        })
}

fetchCategories()
