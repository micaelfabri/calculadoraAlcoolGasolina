
function calcular(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do link

    let alcoolInput = document.getElementById('alcool').value;
    let gasolinaInput = document.getElementById('gasolina').value;
    let contentResult = document.getElementById('content-result');
    let textResult = document.getElementById('text-result');
    
    let alcoolSpan = document.getElementById('alcool-result');
    let gasolinaSpan = document.getElementById('gasolina-result');

    /*
    Cálculo: alcool / gasolina
    Se o resultado for menor que 0.7 compensa usar alcool
    */

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7) {
       textResult.innerHTML = "Compensa usar Álcool"; 
    }
    else{
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    alcoolSpan.innerHTML = "Álcool R$" + alcoolInput;
    gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput;

    contentResult.classList.remove('hide');
};