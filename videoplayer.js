// const API_KEY = "AIzaSyBSyegIhJ8oFBvHZh_PS2PcfXjbevLYmN0";
// window.addEventListener("load", ( ) => {
//     let videoId = "3YJvtBqhEJ0";
//     if(YT){
//         new YT.Player('video-container',{
//             height:"500",
//             width:"1000",
//             vdeoId:videoId,
    
//         });
//     }
// })


const apiKey = "add_your_api_key";

const url = "https://www.googleapis.com/youtube/v3/search";

async function fetchVideos() {
  const searchQuery = "Rahul Gandhi";
  const response = await fetch(
    `${url}?key=${apiKey}&q=${searchQuery}&part=snippet&maxResults=20`
  );
  const result = await response.json();
  result.items.forEach((videoItem) => {
    console.log(videoItem.snippet.description);
  });
}

fetchVideos();

