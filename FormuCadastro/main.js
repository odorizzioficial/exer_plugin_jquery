$(document).ready(function () {
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');
  $('#telefone').mask('(00) 00000-0000')

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
    },
    messages: {
      nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function (form) {
      console.log(form)
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos)
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    },
    highlight: function (element) {
      $(element).addClass('error');
    },
    unhighlight: function (element) {
      $(element).removeClass('error');
    }
  })
});

