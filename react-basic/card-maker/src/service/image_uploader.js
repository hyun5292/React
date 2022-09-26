class ImageUploader { 
    async upload(file) { 
        const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
        const form = document.querySelector("form");

        form.addEventListener("submit", (e) => {
        e.preventDefault();

        const files = document.querySelector("[type=file]").files;
        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            data.append("file", file);
            data.append("upload_preset", "docs_upload_example_us_preset");

            fetch(url, {
            method: "POST",
            body: data
            })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                document.getElementById("data").innerHTML += data;
            });
        }
        });
    }
}

export default ImageUploader;