function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;

        const colElement = document.createElement('div');
        colElement.className = 'col-md-4';
        colElement.appendChild(imgElement);

        document.getElementById('gallery').appendChild(colElement);
    };

    reader.readAsDataURL(file);
}
