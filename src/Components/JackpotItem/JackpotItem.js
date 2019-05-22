import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import smartcrop from 'smartcrop'
import windowSize from 'react-window-size'
import './JackpotItem.css'

export default windowSize(({ID = 48545806, Price="2000000", windowWidth, windowHeight}) => {
    // smartcrop.crop("https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=48545806", { width: 100, height: 100 }).then(console.log)
    // console.log(image)
    console.log(windowWidth)
    return (
        <div className = "jackpotItem" style = {{color: "red"}}>
            <div style = 
                {{height: "100px", width: "100px", 
                backgroundImage: `url(https://www.roblox.com/Thumbs/Asset.ashx?format=png&width=420&height=230&assetId=${ID})`, 
                backgroundSize: windowWidth < 1024 && windowHeight < 800 ? "80%" : "17vh", 
                backgroundPositionX: windowWidth < 1024 && windowHeight < 800 ? "40%" : "60%", 
                alignSelf: "center",
                marginTop: "1vh",
                backgroundRepeat: "no-repeat"}} />
            <p className = "jackpotItemPrice">R$ {Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            
        </div>
    )
})