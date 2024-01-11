function checkIt() {
  if (document.forms.mailer.Name.value == "") { 
      alert('Заполните поле "ФИО"'); 
      document.forms.mailer.Name.focus(); 
      return false;
  }

  if (document.forms.mailer.Phone.value == "") { 
      alert('Заполните поле "Телефон"'); 
      document.forms.mailer.Phone.focus(); 
      return false;
  }

  alert('Вы будете перенаправлены на почтовый клиент для отправки письма.');
  return true;
}

function openMailClient() {
  if (checkIt()) {
    var name = document.forms.mailer.Name.value;
    var phone = document.forms.mailer.Phone.value;
    var note = document.forms.mailer.Note.value;
  
    var subject = encodeURIComponent('Запись на приём');
    var body = encodeURIComponent('Имя: ' + name + '\nТелефон: ' + phone + '\nПримечание: ' + note);
  
    window.location.href = 'mailto:Ваша@почта.ру?subject=' + subject + '&body=' + body;
  }
}