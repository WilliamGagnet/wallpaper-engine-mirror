const videoElement = document.getElementById('webcam')

navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.log("Error accessing webcam: ", error)
    });