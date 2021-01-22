var messageConcatString = 'O texto contém [x] caracteres.';

$(document).ready(function() {
    $("#btnContarString").click(function() {
        contarString();
    });

    $('#btnLimparContarString').click(function() {
        limparDadosTelaContarString();
    });
});

var contarString = function() {
    var txt = $("#result_concatString_txt");

    esconderMsgErroContat();
    esconderResultadoContat();
    modificaLabelConcat('');

    if (txt.val() == '') {
        console.log('err');
        exibirMsgErroContat();
    } else {
        var total = txt.val().length;
        modificaLabelConcat(messageConcatString.replace('[x]', total));
        exibirResultadoContat();
    }
}

var exibirMsgErroContat = function() {
    var errorArea = $("#error_concatString");
    var ctrl = $("#result_concatString_txt");
    errorArea.removeClass("hide");
    errorArea.addClass("show");
    ctrl.addClass("round-error");
}

var esconderMsgErroContat = function() {
    var errorArea = $("#error_concatString");
    var ctrl = $("#result_concatString_txt");
    errorArea.removeClass("show");
    errorArea.addClass("hide");
    ctrl.removeClass("round-error");
}

var exibirResultadoContat = function() {
    var result = $("#result_concatString");
    result.removeClass("hide");
    result.addClass("show");
}

var esconderResultadoContat = function() {
    var result = $("#result_concatString");
    result.addClass("hide");
    result.removeClass("show");
}

var modificaLabelConcat = function(texto) {
    var label = $("#result_concatString_label");
    label.html(texto);
}

var limparDadosTelaContarString = function() {
    var txt = $("#result_concatString_txt");
    esconderResultadoContat();
    esconderMsgErroContat();
    txt.val('');
}