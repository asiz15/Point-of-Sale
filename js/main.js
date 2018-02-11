$( document ).ready(function() {
  // Handler for .ready() called.
  $('.chips-autocomplete').material_chip({
    autocompleteOptions: {
      data: {
        'Francisco': null,
        'Lorena': null,
        'Camila': null,
        'Cote': null
      },
      limit: Infinity,
      minLength: 1
    }
  });


  $('select').material_select();





// DEFINE NUMBERS OF SERVICES

var services = 1;

// ADD SERVICE


$("#add-service").click(function () {

  event.preventDefault();

        services++;
        if (services > 1 ) {
          $("#remove-service").removeClass('disabled');
        }


var serviceRow = '<!-- ROW -->'+
'  '+
'                <div class="row row-service row-service' + services + '">' +
''+
'                    <div class="input-field col m4 category">'+
'                      <select>'+
'                        <option value="" disabled selected>Elige una categoría</option>'+
'                        <option value="1">Corte</option>'+
'                        <option value="2">Tintura</option>'+
'                        <option value="3">Depilación</option>'+
'                      </select>'+
'                      <label>Categoría</label>'+
'                    </div>'+
''+
'                    <div class="input-field col m6 service">'+
'                      <select>'+
'                        <option value="" disabled selected>Elige un servicio</option>'+
'                        <option value="1">Corte Hombre</option>'+
'                        <option value="2">Degradado Hombre</option>'+
'                        <option value="3">Corte mujer</option>'+
'                      </select>'+
'                      <label>Categoría</label>'+
'                    </div>'+
''+
'                    <div class="input-field col m2">'+
'                      <input id="subtotal" type="text" class="validate">'+
'                      <label for="first_name">Subtotal</label>'+
'                    </div>'+
''+
'                </div>'+
''+
'                <!-- END ROW -->';

  

        $(".sl-detalle-venta").find('.row-service').last().after(serviceRow);
        $('select').material_select();
        
        return(services);

        enableDelete();


});

// END ADD SERVICE 

// REMOVE SERVICE

$("#remove-service").click(function(event) {
  /* Act on the event */
  $(".row-service:last").remove();
  services--;
  if (services === 1) {
    $("#remove-service").addClass('disabled');
  }
  return(services);
});

// END REMOVE 


//CHECKBOXES

  var paymentData;
  $('.payment-radio').on('change', function() {
    $('.payment-radio').not(this).prop('checked', false);

    });







//ENDCHECKBOXES

});