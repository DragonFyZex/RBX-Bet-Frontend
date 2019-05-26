import React, {useState, useEffect, createRef} from 'react'
import './JackpotRoulettePicker.css'

export default  ({roundInfo}) => {
	const [itemReference] = useState(createRef());
	const [listReference] = useState(createRef());
	const [jackpotItems, setJackpotItems] = useState([])

	const [timeLeft, setTimeLeft] = useState(0);
    useEffect(() => {
        if (timeLeft >= 2) return
        const interval = setInterval( () => {
            setTimeLeft(timeLeft + 1)
        }, 1000) 

        return () => clearInterval(interval)
	})

	// gets the users and assigns them a percentage then shuffles them
    
	if (jackpotItems.length === 0) {
		setJackpotItems(getJackpotItems(roundInfo));
	}
		


	return (
		<div className="jackpotPlayers">
			<div className="jackpotPlayersList" ref = {listReference} style={itemReference.current != null ?{transform:`translate3d(-${itemReference.current.offsetLeft - listReference.current.offsetWidth / 2 + itemReference.current.offsetWidth/2}px, 0, 0)`} : {}}>
				{jackpotItems.map(user =>
					<img src = {`https://www.roblox.com/headshot-thumbnail/image?userId=${user.userId}&width=420&height=420&format=png`} alt="" className="jackpotUserImage" ref={user.selected ? itemReference : null}/>
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
