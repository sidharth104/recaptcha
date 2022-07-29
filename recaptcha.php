function add_google_recaptcha($submit_field) {
    $submit_field['submit_field'] = '<br><div id="captch" class="g-recaptcha" data-sitekey="6LeFaSEUAAAAANl7JovITcgR6cZ5yfAwyAnyfFZo" data-callback="recaptchaCallback"></div>  <span id="none" class="msg-error error"></span><br>' . $submit_field['submit_field'];
    return $submit_field;
}
if (!is_user_logged_in()) {
    add_filter('comment_form_defaults','add_google_recaptcha');
}

