$(document).ready(function(){
	$('#consultate form').validate({
			rules: {
				name: {
					required: true,
					minlength: 4
				},
				phone: "required",
				email: {
					required: true,
					email: true
				},
				messages: {
					name: {
						required: "We need your email address to contact you",
						minlength: jQuery.validator.format("Введите{0} символов")
					},
					email: {
					required: "We need your email address to contact you",
					email: "Не верно введен адрес почты"
				}
				}


			}
		});
		$('#consultation-form').validate({
			rules: {
				name: {
					required: true,
					minlength: 4
				},
				phone: "required",
				email: {
					required: true,
					email: true
				},
				messages:{
					name:'please',
					minlength: jQuery.validator.format('введите{0} символов')
				}
				 
	
	
			}
		});
		$('#order form').validate();
	});
