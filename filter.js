document.addEventListener("DOMContentLoaded", function() {
    var loaderVideo = document.getElementById('loaderVideo');

    // Simulate a loading process
    setTimeout(function() {
        // Randomly decide if loading was a success or error
        var isSuccess = Math.random() > 2;

        if (isSuccess) {
            loaderVideo.src = 'path/to/success.webm';
        } else {
            loaderVideo.src = 'path/to/error.webm';
        }

        loaderVideo.loop = false; // Stop looping when showing success/error
    }, 3000); // 3 seconds loading simulation
});
