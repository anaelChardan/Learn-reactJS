const Card = (props) => {
    return (
        <div>
            <img width="75" style={{margin: '1em'}} src={props.avatar_url}/>
            <div style={{display: 'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.companyName}</div>
            </div>
        </div>
    )
}

let data = [
    {
        name: "Loïs", 
        companyName: "Ecole",  
        avatar_url: "https://s1.qwant.com/thumbr/0x0/b/8/d5fab085705f57a1bb6ee9185bbd59/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fprix-soldes.wifeo.com%2Fimages%2Fb%2Fbal%2Fballon_foot.jpg&q=0&b=1&p=0&a=1"
    },
    {
        name: "Anaël", 
        companyName: "Akeneo",
        avatar_url: "https://avatars1.githubusercontent.com/u/6115681?v=3"
    }
]

const CardList = (props) => {
		return (
        
        <div>
            {props.cards.map(card => 
                <Card {...card}/>
                )
            }
        </div>
    )
}


ReactDOM.render(<CardList cards={data}/>, mountNode)