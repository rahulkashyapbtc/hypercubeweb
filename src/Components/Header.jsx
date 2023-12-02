import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Button from './Button'

const Header = () => {
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

  
  
  return (
  
  
<>
<div style={{display:'flex',backgroundColor:'', alignItems:'center', justifyContent:'space-around' , color:'white'}}>
 <h2 style={{fontFamily:'monospace', cursor:'pointer'}}>HyperCube</h2>

 <div>
<ul style={{display:'flex', gap:'20px', cursor:'pointer'}}>

<div>Home</div>
<div>Technologies</div>
<div>Wallet</div>
<div>Blockchain</div>
<div>Developers</div>
<div>Work</div>
<div>About</div>
<div>Help</div>

</ul>
</div>

<div>

 <Button onClick={connectMetaMask} name="Connect Wallet" ></Button>
</div>


</div>

</>
  
  
    )
}

export default Header