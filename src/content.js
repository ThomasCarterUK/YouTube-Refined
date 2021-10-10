console.log("Better YouTube loaded!");

docReady(documentReady);

function documentReady() {
    const body = document.querySelector("body");
    const config = { attributes: false, childList: true };
    const observer = new MutationObserver(youtubeLoading);
    observer.observe(body, config)
}

function youtubeLoading() {
    const relatedVideos = document.querySelectorAll("ytd-watch-next-secondary-results-renderer #items ytd-compact-video-renderer");
    if (relatedVideos) doRelatedVideos();
}

// RELATED VIDEOS

function doRelatedVideos() {
    const relatedVideos = document.querySelectorAll("ytd-watch-next-secondary-results-renderer #items ytd-compact-video-renderer");

    for (let video of relatedVideos) {
        if (video.querySelector("ytd-thumbnail-overlay-resume-playback-renderer")) {
            video.classList.add("previously-watched-video");

            // const videoBadges = video.querySelectorAll("ytd-badge-supported-renderer .badge");

            // for (let badge of videoBadges) {
            //     const badgeText = badge.querySelector("span.ytd-badge-supported-renderer").innerHTML;

            //     console.log("text:" + badgeText)

            //     switch (badgeText) {
            //         case "New":
            //             video.classList.add("new-video");
            //             break;
            //     }
            // }
        }
    }
}