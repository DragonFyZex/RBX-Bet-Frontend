import React from 'react'
import windowSize from 'react-window-size'
import './JackpotItem.css'

export default windowSize(({id, price=2000000, windowWidth, windowHeight}) => {

    let color = "#D3D3D375";

    switch(true){
        case price < 1000:
            color = "#D3D3D375"
            break;
        case price >= 1000 && price < 3000:
            color = "#4CBB1775"
            break;
        case price >= 3000 && price < 5000:
            color = "#0094FF75"
            break;
        case price >= 5000 && price < 10000:
            color = "#FF000075"
            break;
        case price >= 10000 && price <= 50000:
            color = "#FF149375"
            break;
        case price >= 50000:
            color = "#FFD70075"
            break;
    }

    return (
        <div className = "jackpotItem" style={{boxShadow: `0px 3px 25px ${color}, 0px 4px 4px #00000040`,}}>
            <div style = 
                {{height: "100px", width: "100px", 
                backgroundImage: `url(https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=${id})`, 
                backgroundSize: windowWidth < 1024 && windowHeight < 800 ? "80%" : "17vh", 
                backgroundPositionX: windowWidth < 1024 && windowHeight < 800 ? "30%" : "40%", 
                alignSelf: "center",
                marginTop: "1vh",
                backgroundRepeat: "no-repeat"}} />
            <p className = "jackpotItemPrice">R$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            
        </div>
    )
})