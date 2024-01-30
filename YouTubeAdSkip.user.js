
// ==UserScript==
// @name            Skip YouTube Ad
// @description     If YouTube ad is detected then its playback rate will be increased and skip automatically when skip button will be available
// @author          Shail Murtaza
// @version         1
// @icon            https://www.youtube.com/s/desktop/697254fd/img/favicon_144x144.png
// @match           http*://*.youtube.com/*
// @match           http*://youtube.com/*
// @match           http*://*.youtu.be/*
// @match           http*://youtu.be/*
// @grant           none
// ==/UserScript==

function skip_ad() {
  const ad_btn = document.querySelector(".ytp-ad-skip-button-modern.ytp-button")
  if (ad_btn) {
    // console.log("Ad Playing")
    const video_stream = document.querySelector(".video-stream.html5-main-video")
    if (video_stream) {
      video_stream.playbackRate = 16
    }
    else {
      console.warning("Ad Skip: YouTube video stream not found but ad is running")
    }
    ad_btn.click()
  }
  /*
  else {
    console.log("Ad Not Playing")
  }
  */
}

setInterval(skip_ad, 700)

