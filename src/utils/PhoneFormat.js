var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
function PhoneFormat(phoneInput) {
  var OK = re.exec(phoneInput.value);
  var out = document.querySelector('#out');
  if (!OK) {
    out.textContent = `${phoneInput.value} isn't a phone number with area code!`;
  } else {
    out.textContent = `Thanks, your phone number is ${OK[0]}`;
  }
}

export default PhoneFormat;
