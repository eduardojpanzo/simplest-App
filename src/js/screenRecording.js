let RECORD_STATUS = false;
let blob,
  mediaRecorder = null,
  deviceRecorder;
let chunks = [];

let buttonCapture = document.querySelector(".btn-capture");

let teste;

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

async function StartRecord() {
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
}

async function StopRecord() {}

setInterval(() => {
  console.log(teste);
}, 2000);

let recordingToggle = document.getElementById("recording-toggle");

recordingToggle.addEventListener("click", async function () {
  RECORD_STATUS = !RECORD_STATUS;
  if (RECORD_STATUS) {
    recordingToggle.innerHTML = "Stop Recording";
    await startRecording();
  } else {
    recordingToggle.innerHTML = "Start Recording";
    stopRecording();
  }
});

async function startRecording() {
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video: { mediaSource: "screen" },
    audio: true,
  });

  deviceRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

  deviceRecorder.ondataavailable = (e) => {
    if (e.data.size > 0) {
      chunks.push(e.data);
    }
  };
  deviceRecorder.onstop = () => {
    chunks = [];
  };
  deviceRecorder.start(250);
}

function stopRecording() {
  var filename = window.prompt("File name", "video"); // Ask the file name

  deviceRecorder.stop(); // Stopping the recording
  blob = new Blob(chunks, { type: "video/webm" });
  chunks = []; // Resetting the data chunks
  var dataDownloadUrl = URL.createObjectURL(blob);

  // Downloadin it onto the user's device
  let a = document.createElement("a");
  a.href = dataDownloadUrl;
  a.download = `${filename}.webm`;
  a.click();

  URL.revokeObjectURL(dataDownloadUrl);
}
