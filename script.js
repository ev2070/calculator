/*Write a function called fortune that takes one argument (your visitor's name) 
	and prints a random "fortune cookie style" fortune into an element of your page.

Write a function called restyle that applies new CSS styles 
	to the fortune text in a random manner. Modify at least three CSS properties.*/



/*					PART 1
	Javascript code that will take a numeric argument provided
	by the user, divide it by 2, and return the result in an 
	alert, and log a string to the console
*/
function halfNumber(num) {
	let halved = num/2;
	alert(halved);
	console.log("Half of " + num + " is " + halved);
}

let halfButton = document.getElementById("half-button");

halfButton.addEventListener("click", function() {
	let numInput = document.getElementById("half-input").value;
	halfNumber(numInput);
});


/*					PART 2
	Javascript code that will take in the user's name and print 
	a random "fortune cookie style" fortune into an element on 
	the page	
*/
// Source: https://fortuneandframe.com/apps/fortunes/all
let fortunes = ["Don’t hold onto things that require a tight grip.",
				"If you want the rainbow, you gotta put up with the rain!",
				"It's only after we've lost everything that we're free to do anything.",
				"Love all, trust a few, do wrong to none.",
				"The road to success is always under construction.",
				"You are your best thing.",
				"Say yes, then figure it out.",
				"Embrace a new narrative.",
				"Follow what calls you.",
				"Get lost in the right direction.",
				"Trust the wait. Enjoy not knowing.",
				"Turn your life upside down. On purpose.",
				"It's not your job to fix people.",
				"Everything's gonna be cool.",
				"Don't make a wish. Make a decision.",
				"It's time for a good ol' fashioned adventure.",
				"Take nothing personally.",
				"Hurry up and fail so you can win.",
				"Sit around and wait for happiness to find you. Just kidding. Get up and fight for it for dear life.",
				"Enter unknown territory.",
				"Do what people say you can't, just because you can."
			   ]; // 21 fortunes from 0-20

function fortune(username) {
	let randomFortuneIndex = Math.floor(Math.random() * 21); // 0-20 inclusive
	let randomFortune = fortunes[randomFortuneIndex];
	
	let output = username + "... " + randomFortune;

	let outputArea = document.getElementById("fortune-output");
	outputArea.innerText = output;

	restyle(outputArea); // incorporating PART 3 here
}

let fortuneButton = document.getElementById("fortune-button");

fortuneButton.addEventListener("click", function() {
	let nameInput = document.getElementById("fortune-input").value;
	fortune(nameInput);
});



/*					PART 3
	Javascript code that applies new CSS styles to the `fortune` 
	text in a random manner each time it fires.

	The 3 CSS properties modified: font size, background image, 
*/

let fonts = ["Georgia",
			 "Palatino Linotype",
			 "Book Antiqua",
			 "Times New Roman",
			 "Arial",
			 "Helvetica",
			 "Arial Black",
			 "Impact",
			 "Lucida Sans Unicode",
			 "Tahoma",
			 "Verdana",
			 "Courier New",
			 "Lucida Console"
			];

function restyle(fortuneElem) {
	// color and padding are not randomized
	fortuneElem.style.color = "white";
	fortuneElem.style.padding = "10vh 5vh";

	// The below are randomized
	let randomStyleNum = Math.floor(Math.random() * 800) + 1; // 1-800
	fortuneElem.style.fontSize = randomStyleNum + "%";

	randomStyleNum = Math.floor(Math.random() * 13); // 0-12
	fortuneElem.style.fontFamily = fonts[randomStyleNum];

	randomStyleNum = Math.floor(Math.random() * 3) + 1; // 1-3
	fortuneElem.style.backgroundImage = "url(images/starry0" + randomStyleNum + ".jpg)";  
}