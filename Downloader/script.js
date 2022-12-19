const fileInput = document.querySelector("input")
const downloadBtn = document.querySelector("button")

downloadBtn.addEventListener('click',e =>{
    
        e.preventDefault();
        downloadBtn.innerText = "Downloading file...";
        fetchFile(fileInput.value);
   
})

let typed = new Typed(".auto-input",{
    strings:["Parham Alizade","OGparham"],
    typeSpeed:100,
    backSpeed: 100,
    loop:true
})



function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file)
        let aTag =  document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = "filename";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove()
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download"
    }).catch(()=>{
        downloadBtn.innerText = "Download";
        alert("Failed to download file!")
    })
}