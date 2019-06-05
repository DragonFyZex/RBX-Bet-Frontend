import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import axios from 'axios';
import './DepositModal.css'
import DepositItem from '../DepositItem/DepositItem';

export default ({open, accept, cancel, userId}) => {
    const [items, setItems] = useState([])
    const [smalls, setSmalls] = useState([])
    // const [filter, setFilter] = useState("")
    useEffect(() => {
        if (!open) return
        if (items.length > 0) return
        (async () => {  
            const items = await axios.get(`https://yacdn.org/proxy/https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?sortOrder=Asc&limit=100`)
            const shrinkedItems = items.data.data.map(item => ({assetId: item.assetId, serialNumber: item.serialNumber == null ? "---" : item.serialNumber, UserAssetID: item.userAssetId, price: item.recentAveragePrice, selected: false}))
            const sortedItems = shrinkedItems.sort((a, b) => b.price - a.price)
            const filteredItems = sortedItems.filter((item) => item.price >= 500)
            setSmalls(sortedItems.filter((item) => item.price < 500).sort((a, b) => a - b))
            setItems(filteredItems)
        })()
    });
    
    
    return ( 
        <Modal
            isOpen={open}
            overlayClassName="over18Overlay"
            className = "over18ModalContainer"
            >
                <div className="over18ModalContainer">
                    <p className = "over18Heading">DEPOSIT</p>
                    {/* <div className="modalInputContainer">
                        <input className="modalInput" placeholder={"Filter"} value = {filter} onChange={e => setFilter(e.target.value)}/>
                    </div> */}
                    {smalls.length < 2 ?
                        <div className="modalError">
                            {
                                smalls.length == 0 ? "You need smalls (limiteds < R$500) to send a trade offer" :
                                "You need 2 smalls minimum (4 or 5 recommended), if you don't have enough, the bot may not be able to send your winnings."
                            }
                        </div> 
                    : null}
                    <div className="depositItemsContainer">
                    {
                        items.map((item, index) => 
                            <DepositItem 
                                id = {item.assetId} 
                                price={item.price} 
                                selected = {item.selected}
                                key = {index} 
                                onClick = {() => {
                                    if (!item.selected && items.filter(item => item.selected).length === 3) return;
                                    const newItems = items.slice(0, items.length);
                                    newItems[index].selected = !item.selected;
                                    setItems(newItems)
                                }}  
                            />)
                    }
                    
                    </div>

                    <div className = "modalButtonContainer">
                        <p className = "acceptButton" 
                            onClick={async () => {
                                // get new Prices
                                const newItems = await axios.get(`https://yacdn.org/proxy/https://inventory.roblox.com/v1/users/${userId}/assets/collectibles?sortOrder=Asc&limit=100`)
                                const shrinkedItems = newItems.data.data.map(item => ({assetId: item.assetId, serialNumber: item.serialNumber == null ? "---" : item.serialNumber, UserAssetID: item.userAssetId, price: item.recentAveragePrice, selected: false}))
                                const sortedItems = shrinkedItems.sort((a, b) => b.price - a.price)
                                const filteredItems = sortedItems.filter((item) => item.price >= 500)

                                const newPricedItems = items.map((item, index) => ({assetId: item.assetId, serialNumber: item.serialNumber, UserAssetID: item.UserAssetID, price: filteredItems[index].price, selected: item.selected}))
                                
                                const selectedItems = newPricedItems.filter(item => item.selected);
                                const refreshedSmalls = sortedItems.filter((item) => item.price < 500).sort((a, b) => a - b)
                                
                                if (refreshedSmalls.length < 2) return;
                                if (selectedItems.length === 0) return;
                                accept(selectedItems, refreshedSmalls[0])
                            }}
                        >
                        DEPOSIT
                        </p>
                        <p className = "cancelButton" onClick={cancel}>CANCEL</p>
                    </div>
                </div>
            </Modal>

    )
}