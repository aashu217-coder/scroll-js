const scrollIndicator = document.querySelector('.scroll-indicator .progress');

function updateScrollIndicator(){
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollableHeight = documentHeight-windowHeight;

  scrollIndicator.style.width = scrollPercentage + '%';
}

window.addEventListener('scroll', updateScrollIndicator);

updateScrollIndicator();