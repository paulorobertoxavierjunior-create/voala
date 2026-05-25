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

  const html = `
    <div class="titulo">CONTRATO DE PRESTAÇÃO DE SERVIÇO</div>
    <div class="subtitulo">${tituloContrato}</div>

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, inscrito(a) no CPF sob o nº ${cpfContratante}, residente e domiciliado(a) em ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF nº ${cpfContratada}, com endereço em ${endContratada}.</p>

    <p class="partes">
      As partes acima identificadas resolvem firmar o presente Contrato de Prestação de Serviço, que será regido pelas cláusulas e condições a seguir.
    </p>

    <p class="clausula-titulo">| Cláusula 1ª – Objeto</p>
    <p class="clausula-texto">
      O presente contrato tem por objeto a prestação, pela CONTRATADA, do serviço de ${descricaoServ} em evento a ser realizado em ${dataEvento}, às ${horaEvento}, no endereço ${localEvento}, para ${numConvidados}.
    </p>

    <p class="clausula-titulo">| Cláusula 2ª – Responsabilidades</p>
    <p class="clausula-texto">
      A CONTRATANTE se responsabiliza por disponibilizar espaço adequado em condições de higiene e limpeza, incluindo pia, geladeira/freezer, fogão e área para armazenamento dos insumos.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> O cardápio contratado é o ${tipoCardapio}. <span class="destaque">Salgados:</span> ${cardSalgado}. <span class="destaque">Doces:</span> ${cardDoce}.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> A CONTRATADA chegará ao local com antecedência mínima de 1 (uma) hora do horário de início do evento, prestando o serviço por 4 (quatro) horas consecutivas.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo terceiro:</span> Havendo necessidade de prorrogação do horário, poderá ser cobrada hora extra ao valor de R$ ${horaExtra} por funcionário, condicionada a acordo entre as partes.
    </p>

    <p class="clausula-titulo">| Cláusula 3ª – Material</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá todo o material necessário para o serviço de buffet, incluindo mesa principal, descartáveis e guardanapos, não estando incluídos móveis, toalhas, taças de vidro, pratos de porcelana, talheres de metal ou ornamentação do ambiente.
    </p>

    <p class="clausula-titulo">| Cláusula 4ª – Equipe</p>
    <p class="clausula-texto">
      Para execução do serviço, a CONTRATADA disponibilizará ao menos 1 (um) crepeiro e 1 (um) auxiliar, podendo acrescentar garçom(garçons) conforme necessidade do evento.
    </p>

    <p class="clausula-titulo">| Cláusula 5ª – Remuneração</p>
    <p class="clausula-texto">
      Pelo serviço contratado, a CONTRATANTE pagará à CONTRATADA o valor total de R$ ${valorTotal} (${valorExtenso}), da seguinte forma: 20% (vinte por cento) na assinatura deste contrato, 50% (cinquenta por cento) até 3 (três) dias antes do evento e 30% (trinta por cento) restantes no dia do evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo único:</span> Caso o número de convidados ultrapasse o contratado (${numConvidados}), será cobrado valor adicional por convidado excedente, conforme ajuste entre as partes.
    </p>

    <p class="clausula-titulo">| Cláusula 6ª – Rescisão</p>
    <p class="clausula-texto">
      O presente contrato poderá ser rescindido por qualquer das partes, mediante comunicação formal por escrito, com antecedência mínima de 7 (sete) dias corridos da data prevista para o evento.
    </p>
    <p class="clausula-texto">
      <span class="destaque">§ 1º:</span> Se a rescisão partir da CONTRATADA, observados os prazos acima, será devolvido à CONTRATANTE 100% (cem por cento) de todos os valores eventualmente pagos.
    </p>
    <p class="clausula-texto">
      <span class="destaque">§ 2º:</span> Se a rescisão partir da CONTRATANTE dentro do prazo estabelecido, a CONTRATADA devolverá 80% (oitenta por cento) do valor pago até então, retendo 20% (vinte por cento) a título de custos administrativos e de reserva de data.
    </p>
    <p class="clausula-texto">
      <span class="destaque">§ 3º:</span> Se a rescisão ocorrer fora do prazo mínimo de 7 (sete) dias corridos anteriores ao evento, os valores pagos não serão devolvidos.
    </p>

    <p class="clausula-titulo">| Cláusula 7ª e 8ª – Limpeza, Consumo e Sobras</p>
    <p class="clausula-texto">
      A CONTRATADA se responsabiliza apenas pela limpeza dos resíduos diretamente decorrentes de seu serviço. Todo o cardápio e bebidas fornecidos poderão ser consumidos à vontade no local do evento.
    </p>
    <p class="clausula-texto">
      A CONTRATADA considera margem de 10% (dez por cento) de convidados excedentes para fins de dimensionamento. As sobras de alimentos e bebidas não permanecerão com a CONTRATANTE, salvo ajuste específico entre as partes.
    </p>

    <p class="clausula-titulo">| Cláusula 10ª – Danos</p>
    <p class="clausula-texto">
      A CONTRATANTE responderá pelos danos causados pelos convidados ao material do buffet, sendo devidos, a título de indenização, os valores de referência: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}, cobrados ao final do evento.
    </p>

    <p class="clausula-titulo">| Cláusula 11ª – Foro</p>
    <p class="clausula-texto">
      Para dirimir quaisquer controvérsias oriundas deste contrato, as partes elegem o foro da comarca de ${cidade}, com renúncia a qualquer outro, por mais privilegiado que seja.
    </p>

    <div class="bloco-final">
      <p class="fecho">
        E, por estarem assim justas e contratadas, firmam o presente instrumento em duas vias de igual teor.
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
        <div class="assinatura-linha"></div>
        <div><strong>${nomeContratada}</strong></div>
        <div>CONTRATADA</div>
      </div>
    </div>
  `;

  document.getElementById("conteudo").innerHTML = html;
}

function gerarPDF() {
  gerarContrato(); // garante conteúdo atualizado

  const elemento = document.getElementById("conteudo");

  const opcoes = {
    margin:       [5, 5, 5, 5],
    filename:     "contrato-voala.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 3, useCORS: true },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opcoes).from(elemento).save();
}