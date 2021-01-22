var messageConcatString = 'Texto convertido com sucesso. Copie da caixa de texto o resultado.';

$(document).ready(function() {
    $("#btnUpperCaseString").click(function() {
        transformar(1);
    });

    $("#btnLowerCaseString").click(function(){
        transformar(2);
    });

    $("#btnReverseString").click(function(){
        transformar(3);
    });
    
    $("#btnTitleCase").click(function(){
        transformar(4);
    });

    $('#btnLimparUpperCaseString').click(function() {
        limparDadosTelaContarString();
    });
});

var transformar = function(funcaoId) {
    var txt = $("#result_toUpperCaseString_txt");

    esconderMsgErroCase();
    esconderResultadoContat();

    if (txt.val() == "") {
        exibirMsgErroCase();
    } else {
        // var total = txt.val().length;
        var txt = $("#result_toUpperCaseString_txt");
        var textoAtual = txt.val();

        if (funcaoId == 1) {
            var upper = textoAtual.toString().toUpperCase();
            txt.val(upper);
        } else if (funcaoId == 2) {
            var lower = textoAtual.toString().toLowerCase();
            txt.val(lower);
        } else if (funcaoId == 3) {
            txt.val(reverseString(textoAtual));
        } else if (funcaoId == 4) {
            txt.val(titleCase(textoAtual));   
        }

        modificaLabelConcat(messageConcatString);
        exibirResultadoContat();
    }
}

var exibirMsgErroCase = function() {
    var errorArea = $("#error_toUpperCaseString");
    var ctrl = $("#result_toUpperCaseString_txt");
    errorArea.removeClass("hide");
    errorArea.addClass("show");
    ctrl.addClass("round-error");
}

var esconderMsgErroCase = function() {
    var errorArea = $("#error_toUpperCaseString");
    var ctrl = $("#result_toUpperCaseString_txt");
    errorArea.removeClass("show");
    errorArea.addClass("hide");
    ctrl.removeClass("round-error");
}

var exibirResultadoContat = function() {
    var result = $("#result_toUpperCaseString");
    result.removeClass("hide");
    result.addClass("show");
}

var esconderResultadoContat = function() {
    var result = $("#result_toUpperCaseString");
    result.addClass("hide");
    result.removeClass("show");
}

var modificaLabelConcat = function(texto) {
    var label = $("#result_toUpperCaseString_label");
    label.html(texto);
}

var limparDadosTelaContarString = function() {
    var txt = $("#result_toUpperCaseString_txt");
    esconderResultadoContat();
    esconderMsgErroCase();
    txt.val('');
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString;  
}

function titleCase(str) {
    var newString = "";
    var first = true;
    for (var i = 0; i < str.length; i++) { 
        var letra = str[i];
        if (first) {
            letra = letra.toUpperCase();
            first = false;
        }

        if (letra == ' ')
            first = true;

        newString += letra; 
    }
    return newString;  
}
