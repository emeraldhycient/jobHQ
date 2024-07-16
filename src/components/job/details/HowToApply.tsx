import { Utils } from '@/lib/utils';
import { FC } from 'react';

interface HowToApplyProps {
    instructions: string;
}

const HowToApply: FC<HowToApplyProps> = ({ instructions }) => {
    const utils = new Utils();

    return (
        <div className="p-4 bg-gray-2 rounded-lg">
            <h3 className="mb-2 text-base font-semibold">How to Apply</h3>
            <p
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: utils.convertToLinks(instructions) }}
            />
        </div>
    );
};

export default HowToApply;
