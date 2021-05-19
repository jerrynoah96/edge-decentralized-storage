import React from 'react';
import ownedByEveryone from '../images/Owned-by-everyone.png';
import fasterAndCheaper from '../images/Faster-and-cheaper.png';
import environmentallyFriendly from '../images/Environmentally-friendly.png';
import globalResearch from '../images/Global-Research.png';




const HeaderCards=()=> {
    return (
        <div className="header-cards">
            <div className="header-card">
                <img src={ownedByEveryone} alt="logo" className="card-img"/>

                <h3>
                    File Storage
                </h3>

                <p>
                Mirax Storage is a distributed file-storage technology, accessible through the Mirax P2P Network and available for storing arbitrary files,
                </p>

            </div>

            <div className="header-card">
                <img src={fasterAndCheaper} alt="logo" className="card-img"/>

                <h3>
                    Mirax Access
                </h3>

                <p>
                Mirax Access provides a platform for third-party services of any kind that enables smartphone-like friendly interfaces for decentralized apps and smart contracts.
                </p>

            </div>


            <div className="header-card">
                <img src={environmentallyFriendly} alt="logo" className="card-img"/>

                <h3>
                    Mirax Virtual Machine
                </h3>

                <p>
                The Mirax Virtual Machine is a dedicated smart contract execution engine built on WASM.
                </p>

            </div>

            <div className="header-card">
                <img src={globalResearch} alt="logo" className="card-img"/>

                <h3>
                    DNS
                </h3>

                <p>
                Mirax DNS is a service for assigning human-readable names to accounts, smart contracts, services, and network nodes.
                </p>

            </div>



        </div>

    )
}
export default HeaderCards;