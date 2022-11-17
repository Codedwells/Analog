const hour = document.getElementById("hourHand");
const minutes = document.getElementById("minutesHand");
const seconds = document.getElementById("secondsHand");
const digital = document.querySelector(".digital");

const getTime = () => {
	const now = new Date();
	const h = now.getHours();
	const m = now.getMinutes();
	const s = now.getSeconds();

	hour.style.transform = `rotate(${h * 30 + m / 2}deg)`;
	minutes.style.transform = `rotate(${m * 6 + s / 10}deg)`;
	seconds.style.transform = `rotate(${s * 6}deg)`;

	digital.innerText = `${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${
		s < 10 ? "0" + s : s
	}`;
};

setInterval(()=>{
	getTime()
},100)
