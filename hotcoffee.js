const hotCoffees = [
        {
        name: "Hot Latte",
        url: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3137&q=80",
        price: "30 Baht",
        button: "BUY"
        },
        
        {
        name: "Hot Americano",
        url: "https://images.unsplash.com/photo-1523179985834-1363f5c47d84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
        price: "30 Baht",
        button: "BUY"
        },
        
        {
        name: "Hot Mocha",
        url: "https://plus.unsplash.com/premium_photo-1663012978924-5bfd443ac932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
        price: "30 Baht",
        button: "BUY"
        }
        ]



        const hotContainer = document.getElementById('hot-container')


        hotCoffees.map((item)=>{
            const hotCoffeeDiv = document.createElement('div')
            hotCoffeeDiv.setAttribute('class','hot-coffees')
        
            const image = document.createElement('img')
            image.setAttribute('src',item.url)
            image.setAttribute('class', 'hot-img')
            hotCoffeeDiv.appendChild(image)
        
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
        
            hotCoffeeDiv.appendChild(infoDiv)
        
            hotContainer.appendChild(hotCoffeeDiv)
        })