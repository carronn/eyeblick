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
      img.src = '../assets/img/quote.svg'
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

  console.log(subject)
  console.log(message)

  window.location.href = 'mailto:maria@eyeblick.se?subject=' + subject + '&body=' + message + '%0D%0A %0D%0A'
}

calculateAspect()
renderReviews()

window.addEventListener('resize', (e) => {
  calculateAspect()
})
