function v(id) {
  return document.getElementById(id).value.trim();
}

function gerarContrato() {
  const tituloContrato = v("tituloContrato");

  const nomeContratante = v("nomeContratante");
  const cpfContratante  = v("cpfContratante");
  const endContratante  = v("endContratante");

  const nomeContratada  = v("nomeContratada");
  const cpfContratada   = v("cpfContratada");
  const endContratada   = v("endContratada");

  const dataEvento      = v("dataEvento");
  const horaEvento      = v("horaEvento");
  const localEvento     = v("localEvento");
  const numConvidados   = v("numConvidados");
  const descricaoServ   = v("descricaoServico");

  const tipoCardapio    = v("tipoCardapio");
  const cardSalgado     = v("cardapioSalgado");
  const cardDoce        = v("cardapioDoce");

  const valorTotal      = v("valorTotal");
  const valorExtenso    = v("valorExtenso");
  const horaExtra       = v("horaExtra");

  const precoTaça       = v("precoTaça");
  const precoPrato      = v("precoPrato");
  const precoTalher     = v("precoTalher");

  const cidade          = v("cidade");
  const dataAssinatura  = v("dataAssinatura");

  // COLUNA ESQUERDA – até Cláusula 8
  const colunaEsquerda = `
    <div class="titulo">CONTRATO DE PRESTAÇÃO DE SERVIÇO</div>
    <div class="subtitulo">${tituloContrato}</div>

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, CPF ${cpfContratante}, residente em ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF ${cpfContratada}, residente em ${endContratada}.</p>

    <p class="partes">
      As partes acima identificadas têm entre si, justo e acertado, o presente Contrato de Prestação de Serviços, que se regerá pelas cláusulas seguintes:
    </p>

    <p class="clausula-titulo">Cláusula 1ª – Objeto</p>
    <p class="clausula-texto">
      É objeto deste contrato a prestação, pela CONTRATADA à CONTRATANTE, do serviço de ${descricaoServ} em evento a ser realizado na data de ${dataEvento}, às ${horaEvento}, no ${localEvento}, para ${numConvidados}.
    </p>

    <p class="clausula-titulo">Cláusula 2ª – Estrutura e condições do local</p>
    <p class="clausula-texto">
      A CONTRATANTE fica responsável por oferecer o espaço do evento em condições adequadas de higiene e limpeza, devendo ser disponibilizados: pia para lavagem de utensílios, geladeira com freezer, fogão para aquecimento dos recheios e espaço para armazenamento dos insumos.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> O cardápio escolhido é o ${tipoCardapio.toUpperCase()}. Crepes salgados: ${cardSalgado}. Crepes doces: ${cardDoce}.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> A CONTRATADA chegará ao evento com antecedência de 1 (uma) hora do horário estabelecido na Cláusula 1ª e oferecerá o serviço de buffet por 4 (quatro) horas a partir do horário de início do evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo terceiro:</span> Caso haja necessidade de ultrapassar o horário de encerramento do evento, será cobrado o valor de R$ ${horaExtra} por funcionário, a título de hora extra, mediante acordo entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 3ª – Materiais fornecidos</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá todo o material necessário para servir os crepes: mesa principal, descartáveis e guardanapos.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo único:</span> A CONTRATADA não oferece toalhas, taças para vinhos/espumantes, pratos de sobremesa, mesas, cadeiras, ornamentação do salão ou qualquer outro item não especificado neste contrato.
    </p>

    <p class="clausula-titulo">Cláusula 4ª – Equipe</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá, para a prestação dos serviços, 1 (um) crepeiro e 1 (um) auxiliar.
    </p>

    <p class="clausula-titulo">Cláusula 5ª – Valor e forma de pagamento</p>
    <p class="clausula-texto">
      O serviço contratado será remunerado no valor total de R$ ${valorTotal} (${valorExtenso}), a ser pago da seguinte forma: 20% na assinatura do contrato, 50% até 3 (três) dias antes do evento e 30% no dia do evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> O valor referente a 20% do total deverá ser pago na assinatura do contrato.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> Caso exceda o número de convidados estipulado na Cláusula 1ª, será cobrado o valor que for acordado por convidado excedente.
    </p>

    <p class="clausula-titulo">Cláusula 6ª – Rescisão</p>
    <p class="clausula-texto">
      O presente contrato poderá ser rescindido unilateralmente por qualquer uma das partes, desde que haja comunicação formal por escrito, com justificativa do motivo, com antecedência mínima de 7 (sete) dias corridos da data prevista para o evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> Caso a CONTRATADA rescinda o contrato dentro das regras e prazo estabelecidos, reembolsará integralmente a CONTRATANTE, devolvendo todo o montante pago até a data da rescisão.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> Caso a CONTRATANTE rescinda o contrato dentro das regras e prazo estabelecidos, a CONTRATADA devolverá 80% do montante pago até a data da rescisão.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo terceiro:</span> Caso a CONTRATANTE rescinda o contrato fora do prazo mencionado, não haverá reembolso dos valores pagos.
    </p>

    <p class="clausula-titulo">Cláusula 7ª – Limpeza</p>
    <p class="clausula-texto">
      A CONTRATADA não se responsabiliza pela limpeza do local antes ou após o evento, retirando apenas os resíduos por ela provocados.
    </p>

    <p class="clausula-titulo">Cláusula 8ª – Consumo e sobras</p>
    <p class="clausula-texto">
      Todo o cardápio e bebidas descritos serão fornecidos pela CONTRATADA, podendo ser consumidos à vontade no local do evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> A CONTRATADA considera margem de 10% para convidados excedentes. As sobras dos suprimentos não poderão ficar com a CONTRATANTE, sob qualquer pretexto.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> A CONTRATADA não se responsabiliza pela insuficiência de alimentos e bebidas caso o número de convidados exceda a margem prevista.
    </p>
  `;

  // COLUNA DIREITA – cláusulas 10 e 11 + fecho e assinaturas
  const colunaDireita = `
    <p class="clausula-titulo">Cláusula 10ª – Quebra ou perda de materiais</p>
    <p class="clausula-texto">
      A quebra ou perda de material do buffet por parte dos convidados será cobrada à parte, devendo a CONTRATANTE realizar o pagamento ao final do evento, nos seguintes valores: taça de refrigerante R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}.
    </p>

    <p class="clausula-titulo">Cláusula 11ª – Foro</p>
    <p class="clausula-texto">
      Para dirimir quaisquer controvérsias oriundas deste contrato, as partes elegem o foro da comarca de ${cidade}.
    </p>

    <div class="bloco-final">
      <p class="fecho">
        Por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor.
      </p>
      <p class="fecho">
        ${cidade}, ${dataAssinatura}.
      </p>
    </div>

    <div class="assinaturas">
      <div class="assinatura-bloco">
        <div class="assinatura-linha"></div>
        <div><strong>${nomeContratante}</strong></div>
        <div>CONTRATANTE</div>
      </div>
      <div class="assinatura-bloco">
        <div><strong>&nbsp;</strong></div>
        <div>&nbsp;</div>
      </div>
    </div>

    <div class="assinaturas">
      <div class="assinatura-bloco">
        <div class="assinatura-linha"></div>
        <div><strong>${nomeContratada}</strong></div>
        <div>CONTRATADA – VOALÁ! BUFFET</div>
      </div>
    </div>
  `;

  document.getElementById("coluna-esquerda").innerHTML = colunaEsquerda;
  document.getElementById("coluna-direita").innerHTML  = colunaDireita;
}

function gerarPDF() {
  gerarContrato();

  const elemento = document.getElementById("conteudo");
  const opcoes = {
    margin:       [0, 0, 0, 0],
    filename:     "contrato-voala.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 3, useCORS: true },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opcoes).from(elemento).save();
}