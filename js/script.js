$(function(){
	$(".typed").typed({
		strings: ["Hi, I'm Claire", "Welcome to my portfolio website.", "Let's check it out!"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: false,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

	// Loading page animation
	// // Effect of loading 
	// var loading = anime({
	// 	targets: '#loading-anime .small-circle',
	// 	opacity: function(el, i, l) { let d = 0.25; return 1 - d*i; },
	// 	translateX: [150,0],
	// 	easing: [.91,-0.54,.29,1.56],
	// 	loop: 3,
	// 	duration: 1500,
	// 	delay: function(el, i, l) { return i * 200; }
	// });
	// Hides the loading page
	$('section#loading_page.section.section-0').delay(4800).fadeOut(1000);

});