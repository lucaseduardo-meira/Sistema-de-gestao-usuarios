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
        alert("Deleted");
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
      method: "DELETE",
    };
    if (confirm("Deseja deslogar da pagina?")) {
      $.ajax(request).done();
    }
  });
}
