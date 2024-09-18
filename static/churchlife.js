function education(){
  const s2 = document.getElementById('toggle-section2')
  const s3 = document.getElementById('toggle-section3')
  const s4 = document.getElementById('toggle-section4')
  s2.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section2').classList.toggle('hidden')
  })
  s3.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section3').classList.toggle('hidden')
  })
  s4.addEventListener("click", function() {
    this.classList.toggle('hidden')
    document.getElementById('section4').classList.toggle('hidden')
  })
}
