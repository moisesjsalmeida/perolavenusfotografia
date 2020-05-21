document.addEventListener('DOMContentLoaded', (event) => {
    uploadInput = document.querySelector("#id_path");
    imgPreview = document.querySelector(".readonly img");

    function imgPreviewer(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = e => imgPreview.src = e.target.result;

            reader.readAsDataURL(input.files[0]);
        }
    }

    uploadInput.onchange = function () {
        imgPreviewer(this);
    }
});


