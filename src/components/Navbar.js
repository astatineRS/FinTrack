import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { background } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <div className='flex flex-row w-screen h-fit p-4 justify-between bg-hero' style={{ background: " linear-gradient(to right, #5c258d, #4389a2)" }} >
            <p className='font-bold text-white text-3xl'> Fintrack </p>
            <ConnectButton />
        </div>
    );
}

export default Navbar;