@include("shared/header")
            
    <textarea id="txt" class="form-control textarea-input" cols="50" rows="20"
        placeholder="cole seu texto aqui e clique no botão para exibir o resultado"></textarea>
  	<br class="clear" />
  	<button class="btn btn-dark">Contar</button>

    <br class="clear" />
    <div id="result" class="result-area hide">
        <label id="result-label">O texto contém xx caracteres.</label>
    </div>
  	

@include("shared/footer")