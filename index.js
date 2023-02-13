let timeToRing = Number(prompt("Kolik vteřin má uplynout, něž minutka začne zvonit?"))

const timeIsUp = () => {
    document.querySelector(".alarm").classList.add("alarm--ring");
    document.querySelector("audio").play();
}

const timer = setTimeout(timeIsUp, timeToRing * 1000);

const stop = () => {
    if (timer) {
        clearTimeout(timer);
        timer = 0;
    }
}

const buttonElm = document.querySelector('.button')
buttonElm.addEventListener('click', stop)

