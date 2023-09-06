interface VideoPlayerElelements {
    videoPlayer: HTMLVideoElement,
    playButton: HTMLButtonElement
    stopButton: HTMLButtonElement
}

interface VideoPlayerProtocol {
    playToggle(): void,
    stop(): void,
    iniciarEvento(): void
}


export default class VideoPlayer implements VideoPlayerProtocol {
    private readonly videoPlayer: HTMLVideoElement,
    private readonly playButton: HTMLButtonElement
    private readonly stopButton: HTMLButtonElement
    constructor(videoPlayerElements: VideoPlayerElelements) {
        this.videoPlayer = videoPlayerElements.videoPlayer
        this.playButton = videoPlayerElements.playButton
        this.stopButton = videoPlayerElements.stopButton
    }

    playToggle(): void {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play()
            this.playButton.innerHTML = 'Pause'
        } else {
            this.videoPlayer.pause()
            this.playButton.innerHTML = 'Start'
        }
        }
    stop(): void {}
    iniciarEvento(): void {
        this.playButton.addEventListener('click', () => {
            this.playToggle()
        })
    }
}

const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video') as HTMLVideoElement,
    playButton: document.querySelector('') as HTMLButtonElement,
    stopButton: document.querySelector('') as HTMLButtonElement
})
