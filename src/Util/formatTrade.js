export default (senderID, senderItems, senderValue, recieverID, recieverItem, recieverSerial, recieverValue ) => {
    return ({
        AgentOfferList: [
            {
            AgentID: senderID,
            OfferList: senderItems,
            OfferValue: senderValue
            },
            {
            AgentID: recieverID,
            OfferList: [
                {
                UserAssetID: recieverItem,
                SerialNumber: recieverSerial
                }
            ],
            OfferValue: recieverValue
            }
        ]
    });
}
  