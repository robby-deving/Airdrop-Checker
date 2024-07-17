import toast from 'react-hot-toast';
let results = {
    cloud:{},
    wen:{},
};


function CloudAirdrop(userAddresses) {
    return Promise.all(userAddresses.map(userAddress => {
        return fetch(`https://worker.jup.ag/jup-claim-proof/CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu/${userAddress.trim()}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error(`Failed fetching data for ${userAddress}`);
                }
                return result.json();
            })
            .then(data => {
                const cloud = data.amount;
                results.cloud[userAddress] =Math.round((cloud/1000000000) * 100) / 100 ;
                toast.success(`${userAddress} is eligible`, {
                    position: 'bottom-left'
                });
            })
            .catch(error => {
                results.cloud[userAddress] = '❌';
                toast.error(`${userAddress} is not eligible`, {
                    position: 'bottom-left'
                });
            });
    }));
}

function wen(userAddresses) {
    return Promise.all(userAddresses.map(userAddress => {
        return fetch(`https://worker.jup.ag/jup-claim-proof/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk/${userAddress.trim()}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error(`Failed fetching data for ${userAddress}`);
                }
                return result.json();
            })
            .then(data => {
                const wen = data.amount;
                results.wen[userAddress] = wen/100000;
                toast.success(`${userAddress} is eligible`, {
                    position: 'bottom-left'
                });
            })
            .catch(error => {
                results.wen[userAddress] = '❌';
                toast.error(`${userAddress} is not eligible`, {
                    position: 'bottom-left'
                });
            });
    }));
}

function AllAirdrop(userAddresses) {
    return Promise.all([
        CloudAirdrop(userAddresses),
        wen(userAddresses)
    ]);
}


export { AllAirdrop , results  }

