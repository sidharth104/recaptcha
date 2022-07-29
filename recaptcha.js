//*-----captcha validation------*//

	  function recaptchaCallback() {
	$(".msg-error.error").css("display", "none");
}
	
$( document ).ready(function() {
$('#submit').click(function () {
               
                var $captcha = $('#captcha'),
                    response = grecaptcha.getResponse();

                if (response.length === 0) {
                    $('.msg-error').text("Please fill the reCAPTCHA ");
                    if (!$captcha.hasClass("error")) {
                        $captcha.addClass("error");
						return false;
                    }
                } else {
recaptchaCallback()
                }
            });


});

