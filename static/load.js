window.onload = () => {
  if (typeof user === 'function'){
    user()
  }
  if (typeof home === 'function'){
    home()
  }
  if (typeof pwcomplexity === 'function'){
    pwcomplexity()
  }
}
