let el = document.querySelectorAll('.details');
let body = document.querySelector('body');

// Create a container to show the result
let container = document.createElement('div');
container.style.color = 'white';
container.style.background = 'black';
container.style.padding = '10px';
container.style.marginTop = '10px';
body.appendChild(container);

// Attach click listener to each .details button
el.forEach(item => {
    item.addEventListener('click', async function () {
        try {
            const response = await fetch('https://dummyjson.com/products/');
            const product = await response.json();

            // Clear previous content before showing new one
            container.innerHTML = '';

            let info = document.createElement('p');
            info.textContent = `ID: ${product.id}, Title: ${product.title}`;
            container.appendChild(info);

        } catch (error) {
            console.error('error:', error);
        }
    });
});
