

export default function swDev() {

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl)
        .then(response => {
            console.log("response", response)
            return response.pushManager.getSubscription()
                .then(subscription => {
                    return response.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: 'BFik7XVkVDd7b6hhwdjnblZFZE5eqcR7Mgr0Lrk90wmu3NjRPGP_fRS2MG2hpQVmQOGVhsJJQMK_cNwA222nGqg'
                        // vapid public key
                    })
                })
        })
}