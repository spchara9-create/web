function upDate(previewPic) {
    console.log("Event triggered");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);

    // đổi text của div #image
    document.querySelector("#image").innerHTML = previewPic.alt;

    // đổi background-image
    document.querySelector("#image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // trả background về rỗng
    document.querySelector("#image").style.backgroundImage = "url('')";

    // trả text về mặc định
    document.querySelector("#image").innerHTML = "Hover over an image below to display here.";
}
