import React from 'react';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";



export default function Wallet(provider) {
return new Web3Provider(provider);
}


const Dapp => () {
return (
<Web3ReactProvider getLibrary={getLibrary}>
</Web3ReactProvider>

)
}