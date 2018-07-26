var num = 100
for (var i = 100; i <= 200; i++) {
	if (num % 3 === 0 && num % 4 === 0) {
		console.log("LoopyLighthouse"); 
	} else if (num % 3 === 0) {
		console.log("Loopy");  
	} else if (num % 4 === 0) {
		console.log("Lighthouse"); 
	} 

	console.log(i); }

