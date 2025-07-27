window.onload = function () {
  //Background image change
  const backgroundImg = [
    'https://images.unsplash.com/photo-1482015527294-7c8203fc9828?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508881136857-d1781947f4d6?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509838174235-432f709c7bfd?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1534330318816-04d10b49f478?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1592887714077-1c2ca9cdcf48?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1479968129048-7372423067cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGZhbGx8ZW58MHx8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1490633874781-1c63cc424610?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGZhbGx8ZW58MHx8MHx8fDI%3D',
  ]

  let index = 0
  const layers = document.querySelectorAll('.bg-layer')

  function changeBackground() {
    index = (index + 1) % backgroundImg.length

    const inactiveLayer = Array.from(layers).find((layer) => !layer.classList.contains('active'))
    const activeLayer = Array.from(layers).find((layer) => layer.classList.contains('active'))

    inactiveLayer.style.backgroundImage = `url('${backgroundImg[index]}')`
    inactiveLayer.classList.add('active')
    activeLayer.classList.remove('active')
  }

  setInterval(changeBackground, 5000)

  //Countdown logic
  const countDownDate = new Date('Sep 23, 2025 23:59:59').getTime()

  let x = setInterval(function () {
    let now = new Date().getTime()

    let distance = countDownDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.querySelector('.counter').innerHTML =
      'Only ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's left until Fall.'

    if (distance < 0) {
      clearInterval(x)
      const heading = document.querySelector('h1')
      heading.remove()
      document.querySelector('.counter').innerHTML = ' &#127881; FALL IS HERE!!!  &#127881;'
    }
  }, 1000)

  //Fall sound
  const sound = document.getElementById('fallSound')
  const toggleButton = document.querySelector('.rain-sound')
  let isPlaying = false
  let btnImage = document.createElement('img')
  toggleButton.append(btnImage)
  btnImage.setAttribute('src', '/assets/noto_play-button.png')

  function toggleSound() {
    if (isPlaying) {
      sound.pause()
      btnImage.setAttribute('src', '/assets/noto_play-button.png')
    } else {
      sound.play()
      btnImage.setAttribute('src', '/assets/noto_pause-button.png')
    }
    isPlaying = !isPlaying
  }

  toggleButton.addEventListener('click', toggleSound)
}
