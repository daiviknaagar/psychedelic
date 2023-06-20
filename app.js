const rand = () => {
    return Math.floor(Math.random() * 255)
}

for (var i = 1; i < 100; i++) {
    setTimeout(() => {
        var a = rand();
        var b = rand();
        var c = rand();
        document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
        document.body.style.color = `rgb(${255 - a}, ${255 - b}, ${255 - c})`;
    }, i * 500)
}

colourChange(4);