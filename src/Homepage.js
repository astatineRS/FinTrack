import React from 'react';
import Framework from '@superfluid-finance/sdk-core';
import Footer from './components/Footer';
import { background } from '@chakra-ui/react';

const Homepage = () => {
    return (
        <div className='flex flex-col w-screen h-screen bg-hero items-center justify-center text-white' >
            <label className='text-5xl font-extrabold text-white' >FinTrack 💰</label>
            <label className='text-xl font-medium mt-2 mb-10' >Payment Streams tooling for DAOs/Org </label>
            <div className='flex flex-row w-[60%] h-fit justify-between mt-10' >
                {<div className='flex flex-col w-[30%] h-full p-4 border-2 border-opacity-20 rounded-xl border-white' style={{ background: " linear-gradient(to right, #4776e6, #8e54e9)" }}  >
                    <p className='text-xl font-semibold mb-3'>Batch Transactions </p>
                    <p>Consolidate the transactions of 50 members over a period of 12 months into one single transaction, and commence streaming.</p>
                </div>}

                {<div className='flex flex-col w-[30%] h-full p-4 border-2 border-opacity-20 rounded-xl border-white' style={{ background: " linear-gradient(to right, #4776e6, #8e54e9)" }} >
                    <p className='text-xl font-semibold mb-3'>Under-collateral Loans </p>
                    <p>Payment stream recepients enjoy P2P undercollateral lending based on their streaming amount</p>
                </div>}

                {<div className='flex flex-col w-[30%] h-full p-4 border-2 border-opacity-20 rounded-xl border-white' style={{ background: " linear-gradient(to right, #4776e6, #8e54e9)" }} >
                    <p className='text-xl font-semibold mb-3'>Editable Rates </p>
                    <p>Change your streaming rates the way you like. Pay yourself per days, weeks or months</p>
                </div>}

            </div>
            <p className='text-2xl font-bold mt-14' >Get Started with Streaming</p>
            <div className='flex flex-row h-fit w-fit mt-5'  >
                <a href='/Onboarding' ><button className='p-3 bg-white text-slate-900 text-xl font-medium rounded-full' >Onboard as Organization 🌐</button></a>
                <a href='/individual' ><button className='p-3 bg-white text-slate-900 text-xl font-medium rounded-full ml-4' >Onboard as an Individual 👤 </button></a>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;