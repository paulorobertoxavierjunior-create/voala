function v(id) {
  return document.getElementById(id).value.trim();
}

function gerarContrato() {
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

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, CPF ${cpfContratante}. Endereço: ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF ${cpfContratada}, residente na ${endContratada}.</p>

    <p class="partes">
      As partes acima identificadas têm entre si, justo e acertado, o presente Contrato de Prestação de Serviço, que se regerá pelas cláusulas seguintes:
    </p>

    <p class="clausula-titulo">| Cláusula 1ª: Objeto</p>
    <p class="clausula-texto">
      Prestação de serviço de ${descricaoServ.toUpperCase()} em ${dataEvento}, às ${horaEvento}, no endereço: ${localEvento}, para ${numConvidados}.
    </p>

    <p class="clausula-titulo">| Cláusula 2ª: Responsabilidades</p>
    <p class="clausula-texto">
      A CONTRATANTE fornecerá espaço adequado com pia, geladeira/freezer e fogão.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo primeiro:</span> ${tipoCardapio}. <span class="destaque">Salgados:</span> ${cardSalgado}. <span class="destaque">Doces:</span> ${cardDoce}.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo segundo:</span> Serviço por 4 horas. Antecedência de 1h para montagem.
    </p>
    <p class="clausula-texto">
      <span class="destaque">Parágrafo terceiro:</span> Hora extra: R$ ${horaExtra} por funcionário, mediante acordo entre as partes.
    </p>

    <p class="clausula-titulo">| Cláusula 3ª: Material</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá material para servir (mesa principal, descartáveis e guardanapos). Não inclui mobiliário ou ornamentação.
    </p>

    <p class="clausula-titulo">| Cláusula 4ª: Equipe</p>
    <p class="clausula-texto">
      1 crepeiro, 1 auxiliar e, se necessário, 1 garçom (a critério da CONTRATADA).
    </p>

    <p class="clausula-titulo">| Cláusula 5ª: Remuneração (R$ ${valorTotal})</p>
    <p class="clausula-texto">
      Valor total de R$ ${valorTotal} (${valorExtenso}). Forma de pagamento: 20% na assinatura, 50% até 3 dias antes e 30% no dia do evento.
    </p>

    <p class="clausula-titulo">| Cláusula 6ª: Rescisão</p>
    <p class="clausula-texto">
      Comunicação formal com 7 dias de antecedência. Reembolsos: 100% (se a CONTRATADA rescindir), 80% (se a CONTRATANTE rescindir dentro do prazo), e sem reembolso em caso de rescisão fora do prazo.
    </p>

    <p class="clausula-titulo">| Cláusula 7ª e 8ª: Limpeza e Consumo</p>
    <p class="clausula-texto">
      Limpeza apenas dos resíduos do buffet. Consumo à vontade no local. Margem de 10% para convidados excedentes, sem direito às sobras.
    </p>

    <p class="clausula-titulo">| Cláusula 10ª: Danos</p>
    <p class="clausula-texto">
      Quebra de material: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}, cobrados ao final do evento.
    </p>

    <p class="clausula-titulo">| Cláusula 11ª: Foro</p>
    <p class="clausula-texto">
      Fica eleito o foro da comarca de ${cidade}, para dirimir quaisquer controvérsias oriundas do presente contrato.
    </p>

    <p class="fecho">
      Por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor.
    </p>
    <p class="fecho">
      ${cidade}, ${dataAssinatura}.
    </p>

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
    margin:       [5, 5, 5, 5],          // margens internas do PDF
    filename:     "contrato-voala.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 3, useCORS: true }, // mais nítido
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opcoes).from(elemento).save();
}