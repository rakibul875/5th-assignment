import React, { use } from 'react';
import DataCard from '../DataCard/DataCard';

const ProdactsSection = ({DataP}) => {
    const AllData=use(DataP)
    
    return (
        <div className='grid grid-cols-3 my-10 gap-10 w-[1200px] mx-auto'>
            {
                AllData.map(data=><DataCard key={data.id} data={data}></DataCard>)
            }
        </div>
    );
};

export default ProdactsSection;