const isIntersecting =(entry) =>{
    return entry.isIntersecting
}

const loadImage = (entry) =>{
    console.log("holis")
    // const nodo = entry.target
    const container = entry.target
    const image = container.firstChild
    const url = image.dataset.src

    image.src = url

    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})


export const registerImage = (image)=>{
    observer.observe(image)
}