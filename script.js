const firstSection = document.getElementById("first-section")
const secondSection = document.getElementById("second-section")
const thirdSection = document.getElementById("third-section")
const options1 = {
    rootMargin: "0px",
    threshold: 0.3
}
const options2 = {
    rootMargin: "300px",
    threshold: 0.1
}

const observer1 = new IntersectionObserver(
    callBackFunction,
    options1
)
const observer2 = new IntersectionObserver(
    callBackFunction,
    options2
)

function callBackFunction(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // if (entry.target.if === 'third-section') {
                
            // }

            observer1.unobserve(entry.target)
            observer2.unobserve(entry.target)
        }
    })
}


observer1.observe(firstSection)
observer2.observe(secondSection)
observer1.observe(thirdSection)