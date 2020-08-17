const calculateAspect = () => {
  const elements = document.querySelectorAll('.youtubeVideo')
  for (const element of elements) {
    element.style.width = '100%'
    element.style.height = element.scrollWidth * 9 / 16 + 'px'
  }
}

const renderReviews = () => {
  const reviewContainers = document.querySelectorAll('.reviews')
  for (const reviewContainer of reviewContainers) {
    const reviewElements = reviewContainer.children[0].children
    for (const reviewElement of reviewElements) {
      reviewElement.classList.add('card')
      const img = document.createElement('img')
      img.src = 'assets/img/quote.svg'
      reviewElement.appendChild(img)
    }
    const fadeElement = document.createElement('div')
    const fadeElementLeft = document.createElement('div')
    fadeElement.classList.add('fadeElement')
    fadeElementLeft.classList = 'fadeElement left'

    reviewContainer.appendChild(fadeElement)
    reviewContainer.appendChild(fadeElementLeft)
  }
}

const sendEmail = () => {
  const subject = document.querySelector('#subject').value
  const message = document.querySelector('#message').value
  window.location.href = 'mailto:syntolk.eyeblick@gmail.com?subject=' + subject + '&body=' + message + '%0D%0A %0D%0A'
}

let playing = false
const audio = new window.Audio('./assets/audio/bimse.m4a');

const togglePlayBack = async () => {
  playing = !playing
  if (audio.ended) {
    await replay()
  }

  const element = document.getElementById('playPause')
  const slider = document.getElementById('slider')
  if (playing) {
    element.src = './assets/img/pause.svg'
    slider.style.transitionDuration = audio.duration - audio.currentTime + 's'
    slider.style.width = '100%'
    audio.play()
  } else {
    element.src = './assets/img/play.svg'
    slider.style.width = (audio.currentTime / audio.duration) * 100 + '%'
    audio.pause()
  }
  element.style.animationName = 'bounceIn'
  window.setTimeout(() => {
    element.style.animationName = ''
  }, 200)
}

const replay = () => {
  const slider = document.getElementById('slider')
  audio.currentTime = 0
  slider.style.transition = 0
  slider.style.width = 0
  if (playing) {
    window.setTimeout(() => {
      slider.style.transitionDuration = audio.duration - audio.currentTime + 's'
      slider.style.width = '100%'
    }, 1)
  }
}

calculateAspect()
renderReviews()

window.addEventListener('resize', (e) => {
  calculateAspect()
})
