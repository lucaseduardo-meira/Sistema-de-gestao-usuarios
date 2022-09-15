// Delete user

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.btn-delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/${id}`,
      method: "DELETE",
    };

    if (confirm("Você deseja cancelar esse dado?")) {
      $.ajax(request).done(function (response) {
        alert("Deletado");
        location.reload();
      });
    }
  });
}

// Logout

if (window.location.pathname == "/") {
  $onlogout = $("#logout");
  $onlogout.click(function () {
    var request = {
      url: "http://localhost:3000/logout",
      method: "POST",
    };
    if (confirm("Deseja deslogar da pagina?")) {
      $.ajax(request).done(function (response) {
        location.reload();
      });
    }
  });
}

// Validation form
function validate() {
  var valid_gender = false;
  var gender_input = document.myform.gender;

  for (var i = 0; i < gender_input.length; i++) {
    if (gender_input[i].checked) {
      valid_gender = true;
      var valid_status = false;
      var status_input = document.myform.status;

      for (var j = 0; j < status_input.length; j++) {
        if (status_input[j].checked) {
          valid_status = true;
          break;
        }
      }
    }
  }
  if (!valid_gender || !valid_status) {
    console.log("MISSING");
    alert("Selecione todos os campos");
    return false;
  }
}
