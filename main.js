setInterval(setClock, 1000) // call function every 1000 ms

const hourHand = document.querySelector('[data]')
const minHand = document.querySelector('[data-min]')
const secHand = document.querySelector('[data-sec]')

function setClock() {
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds()/60
    const minRatio = (secRatio + currentDate.getMinutes())/60
    const hourRatio =(minRatio + currentDate.getHours())/12

    hourHand.style.setProperty('--rotation_hand', hourRatio*360)
    minHand.style.setProperty('--rotation_hand', minRatio*360)
    secHand.style.setProperty('--rotation_hand', secRatio*360)

}
setClock()