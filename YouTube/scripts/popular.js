
  var path = document.getElementById("trying");
  async function searchVideo() {
    try {
      let video_query = document.getElementById("video").value;
      let response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video_query}&type=video&key=AIzaSyADux_2GXt7ibeIiVzH6hEcIxu9KE1ztho&maxResults=20`
      );
      let data = await response.json();

      let videos = data.items;
      console.log("videos", videos);

      display(videos);
    } catch (e) {
      console.log("e:", e);
    }
  }
  let display = (data) => {
    path.innerHTML = null;
    data.forEach(({ snippet, id: { videoId } }) => {
      // let {
      //   snippet,

      //   id: { videoId },
      // } = ele;    // instead of this we can right directly on place of argument(ele)
      //console.log("videoId", videoId);
      console.log("snippet", snippet);
      var data_to_send = {
        // if key name and value name is same then only give this name
        snippet,
        videoId,
      };
      var thumDiv = document.createElement("div");
      thumDiv.onclick = () => {
        localStorage.setItem("clicked_videos", JSON.stringify(data_to_send));
        window.location.href = "newVideo.html";
      };
      var title = document.createElement("p");
      title.textContent = snippet.title;

      var thumb = document.createElement("img");
      thumb.src = snippet.thumbnails.high.url;

      thumDiv.append(thumb, title);
      path.append(thumDiv);
    });
  };
  // GET
  async function myPropular() {
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyADux_2GXt7ibeIiVzH6hEcIxu9KE1ztho&maxResults=20`
    );
    let dataPop = await response.json();
    console.log("dataPop", dataPop);
    displayPOP(dataPop.items);
  }
  myPropular();
   let displayPOP = (data) => {
    path.innerHTML = null;
    data.forEach(({ snippet, id }) => {
      // let {
      //   snippet,

      //   id: { videoId },
      // } = ele;    // instead of this we can right directly on place of argument(ele)
      //console.log("videoId", videoId);
      console.log("snippet", snippet);
      var data_to_send = {
        // if key name and value name is same then only give this name
        snippet,
        id,
      };
      var thumDiv = document.createElement("div");
      thumDiv.onclick = () => {
        localStorage.setItem("clicked_pop", JSON.stringify(data_to_send));
        window.location.href = "popularvideo.html";
      };
      var title = document.createElement("p");
      title.textContent = snippet.title;

      var thumb = document.createElement("img");
      thumb.src = snippet.thumbnails.high.url;

      thumDiv.append(thumb, title);
      path.append(thumDiv);
    });
  };

