
    var imageUrls = getRandomImageUrls(); // 从 randomImages.js 获取随机图片URL数组
    var imgElements = document.getElementsByClassName("random-image");

    function getRandomImageUrl() {
        var randomIndex = Math.floor(Math.random() * imageUrls.length);
        return imageUrls[randomIndex];
    }

    for (var i = 0; i < imgElements.length; i++) {
        imgElements[i].src = getRandomImageUrl();
    }
