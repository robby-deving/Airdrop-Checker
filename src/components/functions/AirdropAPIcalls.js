import toast from 'react-hot-toast';
let results = {
    cloud:{},
    wen:{},
};


function CloudAirdrop(userAddresses) {
    var total = 0;
    return Promise.all(userAddresses.map(userAddress => {
        return fetch(`https://worker.jup.ag/jup-claim-proof/CLoUDKc4Ane7HeQcPpE3YHnznRxhMimJ4MyaUqyHFzAu/${userAddress.trim()}`)
            .then(result => {
                if (!result.ok) {
                    throw new Error(`Failed fetching data for ${userAddress}`);
                }
                return result.json();
            })
            .then(data => {
                console.log(data);
                const cloud = data.amount;
                let converted = Math.round((cloud/1000000000) * 100) / 100 ;
                results.cloud[userAddress] = converted;
                
                total += converted;

            })
            .catch(error => {
                results.cloud[userAddress] = '❌';
            });
    })).then(() => {
        results.cloud['total'] = Math.round(total * 100) / 100 ;
    });
}

function wen(userAddresses) {
    var total = 0;
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
                let converted = wen/100000;

                results.wen[userAddress] = converted;

                total += converted;
            })
            .catch(error => {
                results.wen[userAddress] = '❌';
            });
    })).then(()=>{
        results.wen['total'] = total;
    }
    );
}

function AllAirdrop(userAddresses) {
    return Promise.all([
        CloudAirdrop(userAddresses),
        wen(userAddresses)
    ]);
}


export { AllAirdrop , results  }

