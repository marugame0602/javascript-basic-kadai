const done = document.getElementById('btn');

const donedone = document.getElementById('text');

done.addEventListener('click', () => {
  donedone.textContent = 'ボタンをクリックしました';
})