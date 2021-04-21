const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

const wghtmax = 900;


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

	//standard sliders
	$('#flow').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		console.log(value);
		$('#tester').css("--wght", value);

	});

	$('#size').on('input', function(){

		let sizeValue = parseInt($(this).val()); //get slider input value
		console.log(sizeValue);
		$('#tester').css('font-size', sizeValue+'px');

	});


	$('#lineheight').on('input', function(){
		
		let leadingValue = $(this).val(); //get slider input value
		console.log(leadingValue);
		$('#tester').css('line-height', leadingValue);

	});



	//mouseposition
	$('#garden').mousemove(function(event) {

		console.log(event.pageY);

		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingY = Math.floor(cursorY * wghtmax);

console.log(settingY)

		$(".nature").css({
			"--wght": settingY
		});
		
	});


    	//click buttons
	$('#colorchange').click(function(event) {
		// console.log('default clicked');
		$("#content").css({
			"--color": 1,
			"--wght": 400,
			"--XHGT": 0
		});	
	});

	$('#blocked').click(function(event) {
		$("#fullcharset").css({
			"--wght": 100
		});	
	});

	$('#flowing').click(function(event) {
		$("#fullcharset").css({
			"--wght": 900
		});	
	});

	// collect all the divs
var divs = document.getElementsByTagName('img');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}




