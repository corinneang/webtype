const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

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