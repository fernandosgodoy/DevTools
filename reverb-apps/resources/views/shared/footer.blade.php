            </div>
                <div id="column">
                    @include("shared/menuLateral")
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="wrapper col5">
  <div id="footer">
    <div class="box1">
      <h2>Ferramentas de Desenvolvimento Online</h2>
      <img class="imgl" src="http://reverb.tec.br/wp-content/uploads/2020/09/logo-reverb.png" 
        alt="Reverb Tecnologia" />
      <p class="natural-paragraph">
        A Reverb é uma empresa que está preocupada sempre com a qualidade 
        de suas entregas e serviços. Temos a cultura de sempre buscar 
        inovar com responsabilidade em tudo que fazemos.   
      </p>
    </div>
    <div class="box contactdetails">
      <h2>Crie seu projeto conosco!</h2>
      <ul>
        <li>Reverb</li>
        <li>São Paulo - Brasil</li>
        <li>Tel: +55 (12) 98188-0975</li>
        <li>Email: atendimento@reverb.tec.br</li>
        <li class="last">LinkedIn: 
            <a target="_blank" href="https://www.linkedin.com/company/reverb-tecnologia">
                Nosso Perfil no LinkedIn</a>
        </li>
      </ul>
    </div>
    <br class="clear" />
  </div>
</div>
<div class="wrapper col6">
  <div id="copyright">
    <?php
        $date = date('Y')
    ?>
    <p class="fl_left">Copyright &copy; {{$date}} - Todos os direitos reservados - <a href="http://www.reverb.tec.br">Reverb</a></p>
    <p class="fl_right">Tema por <a target="_blank" href="http://www.fsdeveloper.com.br" 
        title="Tema desenvolvido por Luiz Fernando Santana">Luiz Fernando de Santana</a></p>
    <br class="clear" />
  </div>
</div>

        <script src="{{@url('')}}/dist/scripts.min.js"></script>
    </body>
</html>