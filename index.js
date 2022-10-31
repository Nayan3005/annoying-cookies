const modal = document.getElementById("modal")
const consentForm = document.getElementById("consent-form")
const moadalText = document.getElementById("modal-text")
const modalCloseBtn = document.getElementById("modal-close-btn")
const declineBtn = document.getElementById("decline-btn")
const modalChoiceBtns = document.getElementById("modal-choice-btns")

setTimeout(function(){
    modal.style.display = "inline"
},1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseenter',function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})

consentForm.addEventListener('submit',function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const name = consentFormData.get("fullName")
    
    moadalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        uploadText.innerText = `Making the sale...`
        sucker()
    }, 1500)


function sucker(){
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML =
        `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        `
    modalCloseBtn.disabled = false
    },2000)
}
})