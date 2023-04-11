function foo() {

    document.getElementById("formSucribe").value="";
    Swal.fire({
        title: "<i>Gracias por suscribirte</i>", 
        html: "Te enviaremos nuestras novedades",  
        confirmButtonText: "<u>Continuar</u>", 
      });
}