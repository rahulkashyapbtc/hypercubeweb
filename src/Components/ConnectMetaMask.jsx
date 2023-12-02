import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const ConnectMetaMask = () => {
  const [account, setAccount] = useState(null);


  
    const connectMetaMask = async () => {
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });

          // Get the current account
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);

          // Listen for account changes
          window.ethereum.on('accountsChanged', (newAccounts) => {
            setAccount(newAccounts[0]);
          });
        } else {
          console.error('MetaMask not found!');
        }
      } catch (error) {
        console.error('Error connecting MetaMask:', error);
      }
    };

    // connectMetaMask();
  

  return (
  <>
  
  <button onClick={connectMetaMask}>Connect Now</button>
  
  
  </>
  );
};

export default ConnectMetaMask;
