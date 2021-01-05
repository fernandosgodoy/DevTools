@include("shared/header")
            
    <textarea id="result_concatString_txt" class="form-control textarea-input" cols="50" rows="20"
        placeholder="cole seu texto aqui e clique no botão para exibir o resultado"></textarea>
  	<br class="clear" />
      <button id="btnContarString" type="button"
        class="btn btn-dark">Contar</button>
        <button id="btnLimparContarString" type="button"
        class="btn">Limpar e fazer nova consulta</button>

    <br class="clear" />
    <div id="result_concatString" class="result-area hide">
        <div id="result_concatString_label">&nbsp;</div>
    </div>

    <div id="error_concatString" class="result-error hide">
        <span>Preencha corretamente o campo acima.</span>
    </div>
  	

@include("shared/footer")