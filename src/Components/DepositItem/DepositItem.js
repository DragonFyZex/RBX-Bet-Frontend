import React from 'react'
import windowSize from 'react-window-size'
import './DepositItem.css'

export default windowSize(({id, price=2000000, selected, onClick, windowWidth, windowHeight}) => {;

    return (
        <div className = "depositItem" style={{boxShadow: selected ? `0px 1px 6px #0477A9` : 'none'}} onClick={onClick}>
            <div style = 
                {{height: "100px", width: "100px", 
                backgroundImage: `url(https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=${id})`, 
                backgroundSize: windowWidth < 1024 && windowHeight < 800 ? "80%" : "10vh", 
                backgroundPositionX: windowWidth < 1024 && windowHeight < 800 ? "30%" : "47%", 
                alignSelf: "center",
                marginTop: "1vh",
                backgroundRepeat: "no-repeat",
                marginTop: "1%"}} />
            <p className = "jackpotItemPrice">R$ {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            
        </div>
    )
})