document.addEventListener('DOMContentLoaded', async () => {

    // all elements with the data-typewriter attribute
    const elements = document.querySelectorAll('[data-typewriter]') as NodeListOf<HTMLElement>


    elements.forEach((element) => {

        const content = element.innerText
        element.innerText = ''

        const intervalMin = parseInt(element.getAttribute('data-interval') || "30") // defau
        const intervalMax = intervalMin + 100

        let i = 0
        let textToAdd = ''

        const iterateChar = () => {
            if (i < content.length) {
                const char = content.charAt(i)
                if (char === ' ') {
                    textToAdd += char
                } else {
                    textToAdd += char
                    element.innerText = textToAdd
                }
                i++

                setTimeout(iterateChar, Math.floor(Math.random() * (intervalMax - intervalMin + 1) + intervalMin))
            }
        }

        iterateChar()
    })
})