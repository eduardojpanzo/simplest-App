let buttonCapture = document.querySelector(".btn-capture");

var teste;

buttonCapture.addEventListener("click", async () => {
  const previewElement = document.getElementById("preview");

  if (previewElement.srcObject) {
    let tracks = previewElement.srcObject.getTracks();

    tracks.forEach((track) => track.stop());
    previewElement.srcObject = null;

    buttonCapture.innerHTML = "capture";
    buttonCapture.classList.remove("btn-stop-capturing");
  } else {
    const options = {
      video: {
        cursor: "always",
      },
      audio: true,
    };

    const stream = await navigator.mediaDevices.getDisplayMedia(options);

    previewElement.srcObject = stream;

    const recoder = new MediaRecorder(stream);
    recoder.start();

    const [video] = stream.getVideoTracks();
    video.addEventListener("ended", () => {
      recoder.stop();
    });

    buttonCapture.classList.add("btn-stop-capturing");
    buttonCapture.innerHTML = "stop capturing";

    recoder.addEventListener("dataavailable", (evt) => {
      // const a = document.createElement("a");
      // a.href = URL.createObjectURL(evt.data);
      // a.download = "capture.webm";
      // a.click();
      teste = evt.data;
      previewElement.innerHTML = `
        <source src="${URL.createObjectURL(evt.data)}" type="video/webm">
      `;
    });
  }
});

setInterval(() => {
  console.log(teste);
}, 2000);
