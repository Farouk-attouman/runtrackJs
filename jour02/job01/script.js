function citation() {
    const element = document.getElementById("citation");
    console.log(element.textContent);
}

document.getElementById("button").addEventListener("click", citation);