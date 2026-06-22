const upload = document.getElementById("upload-imagem");
const preview = document.getElementById("preview-imagem");

upload.addEventListener("change", function(){
    const arquivo = this.files[0];
    if(arquivo){
        preview.src = URL.createObjectURL(arquivo);
        preview.style.display = "block";
    }
});
