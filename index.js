axios.get("https://api.blockchain.info/v2/apikey/request/")
    .then(res => {
        console.log('this is a res', res)
    })
    .catch(err => {
        console.log(err);
    })