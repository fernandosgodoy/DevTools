@include("shared/header")
            
    <div id="result_toUpperCaseString" class="result-area hide">
        <div id="result_toUpperCaseString_label">&nbsp;</div>
    </div>

    <div id="error_toUpperCaseString" class="result-error hide">
        <span>Preencha corretamente o campo abaixo.</span>
    </div>
    <br class="clear" />

    <textarea id="result_toUpperCaseString_txt" 
        class="form-control textarea-input" rows="10"
        placeholder="cole seu texto aqui e clique no botão para exibir o resultado"></textarea>
  	<br class="clear" />
      <button id="btnUpperCaseString" type="button"
        class="btn btn-dark">UPPERCASE</button>
      <button id="btnLowerCaseString" type="button"
        class="btn btn-dark">lowercase</button>
      <button id="btnReverseString" type="button"
        class="btn btn-dark">Reverse</button>
      <button id="btnLimparUpperCaseString" type="button"
        class="btn">Limpar Campo</button>

@include("shared/footer")