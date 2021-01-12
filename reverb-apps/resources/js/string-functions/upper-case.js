var messageConcatString = 'Texto convertido com sucesso. Copie da caixa de texto o resultado.';

$(document).ready(function() {
    $("#btnUpperCaseString").click(function() {
        transformar(1);
    });

    $("#btnLowerCaseString").click(function(){
        transformar(2);
    });

    $('#btnLimparUpperCaseString').click(function() {
        limparDadosTelaContarString();
    });
});

var transformar = function(funcaoId) {
    var txt = $("#result_toUpperCaseString_txt");

    esconderMsgErroContat();
    esconderResultadoContat();

    if (txt.val() == "") {
        exibirMsgErroContat();
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
        }

        modificaLabelConcat(messageConcatString);
        exibirResultadoContat();
    }
}

var exibirMsgErroContat = function() {
    var errorArea = $("#error_toUpperCaseString");
    var ctrl = $("#result_toUpperCaseString_txt");
    errorArea.removeClass("hide");
    errorArea.addClass("show");
    ctrl.addClass("round-error");
}

var esconderMsgErroContat = function() {
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
    label.html(texto);
}

var limparDadosTelaContarString = function() {
    var txt = $("#result_toUpperCaseString_txt");
    esconderResultadoContat();
    esconderMsgErroContat();
    txt.val('');
}