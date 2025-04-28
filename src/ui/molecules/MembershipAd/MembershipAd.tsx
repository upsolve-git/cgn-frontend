import React from 'react';
import ActionButton from '../../atoms/buttons/ActionButton/ActionButton';
import { useNavigate } from 'react-router-dom';
import CrossButton from '../../atoms/buttons/CrossButton/CrossButton';

interface MembershipAdProps {
    closeAd: () => void;
}

const MembershipAd: React.FC<MembershipAdProps> = ({
    closeAd
}) => {

    const navigate = useNavigate()

  return (
    <div
    className='w-full h-fit bg-white'>
        <CrossButton 
        callbackFunc={() => closeAd()}
        />
        <div
        className='text-center'>
            <p
            className='font-bold text-lg text-center my-4 text-primary'>
                Get your membership!
            </p>
            <div
            className='text-darkgray'>
                <p className="text-sm">
                    Join us for exclusive benefits!
                </p>
                <p className="text-sm">
                    Sign up now and enjoy premium features.
                </p>
            </div>
        </div>
        <div
        className='w-[70%] mx-auto tablet:w-[20%]'>
            <ActionButton 
            label="Join Now"
            callbackFunc={() => navigate('/membership')}
            />
        </div>
    </div>
  );
};

export default MembershipAd;
