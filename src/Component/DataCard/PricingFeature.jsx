

import { Check } from 'lucide-react';
import React from 'react';

const PricingFeature = ({featur}) => {
    return (
        <div>
            <p className='flex gap-3'><Check/>{featur}</p>
        </div>
    );
};

export default PricingFeature;