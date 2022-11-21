const modalButton = document.querySelector(".fa-bars-ctn");
const modalContainer = document.querySelector(".modal-container");
const closeButton = document.querySelector(".modal-header-icon");
const copyButton = document.querySelector(".copy-button");
const link = document.querySelector(".link");

modalButton.addEventListener("click", () => {
    modalButton.classList.remove("show");
    modalContainer.classList.remove("closed");
})
closeButton.addEventListener("click", () => {
    modalButton.classList.add("show");
    modalContainer.classList.add("closed");
})

copyButton.addEventListener("click", () => {
    link.select();
    if(document.execCommand("copy")){
        copyButton.classList.add("active");
        copyButton.innerText = "Copied!";
        copyButton.style.background = "#4caf50";
        copyButton.style.transition = "all .3s";
        setTimeout(() => {
            window.getSelection().removeAllRanges();
            copyButton.classList.remove("active");
            copyButton.innerText = "Copy";
            copyButton.style.background = "#7D2AE8";
            copyButton.style.transition = "all .3s";
        }, 3000)
    }
})