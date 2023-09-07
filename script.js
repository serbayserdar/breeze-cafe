const icedCoffees = [
{
name: "Ice-Latte",
url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80",
price: "45 Baht"
},

{
name: "Ice-Americano",
url: "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2973&q=80",
price: "45 Baht"
},

{
name: "Ice-Mocha",
url: "https://images.unsplash.com/photo-1642647390911-77934bc6bc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80",
price: "45 Baht"}
]







const hotCoffees = [
{
name: "Hot Latte",
url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3137&q=80",
price: "30 Baht"
},

{
name: "Hot Americano",
url: "https://images.unsplash.com/photo-1523179985834-1363f5c47d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
price: "30 Baht"
},

{
name: "Hot Mocha",
url: "https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
price: "30 Baht"
}
]



const icedCoffeeMenu =()=>{
    
}




const allIcedCoffees = document.getElementById('btn-1')


icedCoffees.map((item)=>{
    const icedCoffeeDiv = document.createElement('div')
    icedCoffeeDiv.setAttribute('class','iced-coffees')

    const image = document.createElement('img')
    image.setAttribute('src',item.url)
    icedCoffeeDiv.appendChild(image)

    const infoDiv = document.createElement('div')
    infoDiv.setAttribute('class','info-div')

    const p1 = document.createElement('p')
    p1.innerText = item.name

    const p2 = document.createElement('p')
    p2.innerText = item.price

    infoDiv.appendChild(p1)
    infoDiv.appendChild(p2)

    icedCoffeeDiv.appendChild(infoDiv)
})
