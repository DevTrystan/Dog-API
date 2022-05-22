

const dog_btn = document.getElementById('dog_btn');
const dog_result = document.getElementById('dog_result');
const axeY =document.getElementById('Ymouss');
const axeX =document.getElementById('Xmousse');





function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}


document.onmousemove = function(e)
{
    axeX.innerHTML = e.offsetX;
    axeY.innerHTML = e.offsetY;
};

dog_btn.addEventListener('click', getRandomDog);
