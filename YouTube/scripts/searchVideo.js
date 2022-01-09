let { videoId } = JSON.parse(localStorage.getItem("clicked_videos"));
  let iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.height = "100%";
  iframe.width = "100%";

  iframe.allowfullscreen = "true";

  iframe.setAttribute("allowfullscreen", true);
  document.querySelector("#playing_video").append(iframe);