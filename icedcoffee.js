const icedCoffees = [
    {
    name: "Ice-Latte",
    url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80",
    price: "45 Baht",
    button: "BUY"
    },
    
    {
    name: "Ice-Americano",
    url: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2973&q=80",
    price: "45 Baht",
    button: "BUY"
    },
    
    {
    name: "Ice-Mocha",
    url: "https://images.unsplash.com/photo-1642647390911-77934bc6bc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80",
    price: "45 Baht",
    button: "BUY"}
    ]



const icedContainer = document.getElementById('iced-container')

icedCoffees.map((item)=>{
    const icedCoffeeDiv = document.createElement('div')
    icedCoffeeDiv.setAttribute('class','iced-coffees')

    const image = document.createElement('img')
    image.setAttribute('src',item.url)
    image.setAttribute('class', 'iced-img')
    icedCoffeeDiv.appendChild(image)

    const infoDiv = document.createElement('div')
    infoDiv.setAttribute('class','info-div')

    const p1 = document.createElement('p')
    p1.setAttribute('id', 'name')
    p1.innerText = item.name

    const p2 = document.createElement('p')
    p2.setAttribute('id', 'price')
    p2.innerText = item.price

    const button = document.createElement('button')
    button.setAttribute('id', 'buy')
    button.innerText = item.button

    infoDiv.appendChild(p1)
    infoDiv.appendChild(p2)
    infoDiv.appendChild(button)

    icedCoffeeDiv.appendChild(infoDiv)

    icedContainer.appendChild(icedCoffeeDiv)
})

