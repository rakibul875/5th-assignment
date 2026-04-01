import { CircleCheck } from 'lucide';
import PricingFeature from './PricingFeature';
import { useState } from 'react';
const DataCard = ({ data }) => {
    const [isCard, setCard] = useState(false)
    const { icon, name, price, tag, features, description } = data
    const handelAdd = () => {
        setCard(true)
    }
    return (
        <div>
            <div className="w-96 space-y-5 bg-gray-100 shadow-xl h-full py-8 px-5 flex flex-col flex-1">
                <div className="flex justify-between">
                    <img src={icon} alt="" />
                    <p>{tag}</p>
                </div>
                <div className="flex-1">
                    <h2 className='text-3xl font-bold'>{name}</h2>
                    <p className='text-xl'>{description}</p>
                    <p className='text-2xl font-bold'>{price}<span>/month</span></p>
                    {
                        features.map((featur, index) => <PricingFeature key={index} featur={featur} />)
                    }
                    <button className={`btn w-full rounded-full ${isCard? 'btn-success':'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'}`} onClick={handelAdd}>{isCard ? "Added to Cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default DataCard;