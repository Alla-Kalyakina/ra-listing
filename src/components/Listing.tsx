interface ListingType {
listing_id: number;
url: string;
MainImage : MainImageType;
title: string;
currency_code: string;
price: string;
quantity: number;
}
interface MainImageType {
    url_570xN : string
}

export interface ListingProps {
    cards: Array<ListingType>
}

export default function Listing({cards}: ListingProps){
    console.log(cards)
    return ( 
        <div className="product_wrapper">
            {cards.map((elem,index) => 
            <div key={index} className="item-list">
                <div className="item">
                    <div className="item-image">
                    <a href={elem.url}>
                        <img src={elem.MainImage.url_570xN}/>
                    </a>
                    </div>
                <div className="item-details">
                    <p className="item-title">{(elem.title.length > 50) ? elem.title.slice(0, 50) + '...' : elem.title}</p>
                    <p className="item-price">{elem.currency_code + " " + elem.price}</p>
                    <p className={`item-quantity level-${(elem.quantity <= 10)?'low': (elem.quantity <= 20)? 'medium' : 'high'}`}>{elem.quantity + " left"}</p>
                </div>
                </div>
            </div>)}
        </div>
    )
}