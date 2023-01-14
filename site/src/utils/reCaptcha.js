grecaptcha.ready(function () {
  grecaptcha
    .execute(`${process.env.RECAPTCHA_SITE_KEY}`, { action: "homepage" })
    .then(function (token) {
      document.getElementById("captchaResponse").value = token;
    });
});
