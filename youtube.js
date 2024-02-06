const API_KEY = "AIzaSyASLrY_Iy991zuLtrQP066_fNSsBD-Lqdo";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

window.addEventListener("DOMContentLoaded", () => {
    fetchVideos("Learn JS", 10);
});

async function fetchVideos(searchQuery, maxResults) {
    const response = await fetch(
        `${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
    );
    const data = await response.json();
    console.log(data);
    displayVideos(data.items);
}

function displayVideos(videos) {
    const container = document.getElementById("video-gallery");
    container.innerHTML = '';

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.high.url;

        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <a href="video.html?videoId=${videoId}">
                <img src="${thumbnail}" alt="${title}">
                <h3>${title}</h3>
            </a>
        `;
        container.appendChild(videoCard);
    });
// }
// searchButton.addEventListener("click", () => {
//     const searchValue = searchInput.value.trim(); // Trim whitespace from the search query
//     if (searchValue) {
//         fetchVideos(searchValue);
//     } else {
//       alert("Please enter a valid search query");
//     }
//   });
//   async function fetchSearchResults(searchString) {
//     // searchString will the input entered by the user
//     const endpoint = `${baseUrl}/search?key=${API_KEY}&q=${searchString}&part=snippet&maxResults=50`;
//     try {
//       const response = await fetch(endpoint);
//       const result = await response.json();
  
//       for (let i = 0; i < result.items.length; i++) {
  
//         let videoId = result.items[i].id.videoId;
//         let channelId = result.items[i].snippet.channelId;
//         console.log(videoId);
//         console.log(channelId);
  
//         let statistics = await getVideoStatistics(videoId);
//         let channelLogo = await fetchChannelLogo(channelId);
  
//         result.items[i].statistics = statistics;
//         result.items[i].channelLogo = channelLogo;
//       }
  
//       renderVideosOntoUI(result.items); // 2
//     } catch (error) {
//       alert("Some error occured");
//     }
  }