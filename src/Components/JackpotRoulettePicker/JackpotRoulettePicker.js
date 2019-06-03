import React, {useState, useEffect, useMemo, createRef} from 'react'
import './JackpotRoulettePicker.css'
import { isTemplateElement } from '@babel/types';



export default  ({roundInfo}) => {
	const [itemReference] = useState(createRef());
	const [listReference] = useState(createRef());
	const [jackpotItems, setJackpotItems] = useState([])
	const [isReferenceSet, setIsReferenceSet] = useState(false)
	const [transform, setTransform] = useState(0)

	useEffect(() => {
		setJackpotItems(getJackpotItems(roundInfo));
		if (isReferenceSet) {
			setTransform(itemReference.current.offsetLeft - listReference.current.offsetWidth / 2)
		}
	}, [roundInfo.round])

	useEffect(() => {
		if (itemReference.current != null && transform == 0) {
			setTransform(itemReference.current.offsetLeft - listReference.current.offsetWidth / 2)
		}
	}, [isReferenceSet])

	return (
		<div className="jackpotPlayers">
			<div className="jackpotPlayersList" ref = {listReference} style={jackpotItems.length > 0 && isReferenceSet ? {transform:`translate3d(-${transform}px, 0, 0)`} : {}}>
				{jackpotItems.map(user =>
					<img src = {`https://www.roblox.com/headshot-thumbnail/image?userId=${user.userId}&width=420&height=420&format=png`} 
						alt="" 
						className="jackpotUserImage" 
						ref={user.selected ? itemReference : null} 
						onLoad={() => {
							if (!isReferenceSet && user.selected) {
								setIsReferenceSet(true)
							}
						}}/>
				)}				
			</div>
		</div>
	)
}


function getJackpotItems(roundInfo){
	const users = [];
	roundInfo.roundInfo.map(item => {
        if (users.findIndex(user => user.userId == item.userId) == -1) {
            users.push({userId: item.userId, percentage: 0})
        } 

		const index = users.findIndex(user => user.userId == item.userId);
        users[index].percentage = users[index].percentage + (Number(item.limitedValue) /Number(roundInfo.numberOfTickets))
    })
	
	// creates array the size of 300 with the users we need, then randomizes it
	const usersArray = users.map(user => {
		return Array.from({length: Math.round(user.percentage * 300)}, () => ({userId: user.userId, selected: false}))
	});
	const randomJackpotItems = shuffle(usersArray.flat(1))
	// selects random item over random number we choose to start with

	for(let i = Math.round(Math.random() * (170 - 130) + 130); i < randomJackpotItems.length; i++) {
		if (randomJackpotItems[i].userId === roundInfo.winner) {
			randomJackpotItems[i].selected = true
			break;
		}
	}
	return randomJackpotItems
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}