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
  const tipoServico     = v("tipoServico");

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

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, CPF ${cpfContratante}, residente em ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF ${cpfContratada}, com endereço em ${endContratada}.</p>

    <p class="partes">
      As partes acima identificadas firmam o presente Contrato de Prestação de Serviço, regido pelas cláusulas seguintes.
    </p>

    <p class="clausula-titulo">Cláusula 1ª – Objeto</p>
    <p class="clausula-texto">
      O objeto deste contrato é a prestação, pela CONTRATADA, de ${tipoServico} em evento a realizar-se em ${dataEvento}, às ${horaEvento}, no(a) ${localEvento}, para aproximadamente ${numConvidados}.
    </p>
    <p class="clausula-texto">
      Detalhes de cardápio, bebidas e itens adicionais serão ajustados entre as partes por mensagens eletrônicas (WhatsApp, e-mail ou similar), que passam a integrar este contrato.
    </p>

    <p class="clausula-titulo">Cláusula 2ª – Local e estrutura</p>
    <p class="clausula-texto">
      A CONTRATANTE se responsabiliza por disponibilizar espaço adequado, limpo e seguro, com acesso à energia elétrica e, quando necessário, pia e área suficiente para montagem e trabalho da equipe da CONTRATADA.
    </p>

    <p class="clausula-titulo">Cláusula 3ª – Materiais</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá os equipamentos e utensílios básicos necessários à execução do serviço.
    </p>
    <p class="clausula-texto">
      Mobiliário, decoração, louças especiais, taças de vidro, toalhas diferenciadas e demais itens não descritos expressamente não estão incluídos, salvo ajuste específico entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 4ª – Equipe</p>
    <p class="clausula-texto">
      A CONTRATADA disponibilizará equipe compatível com o porte do evento, composta por profissionais de produção e atendimento em número adequado ao serviço contratado.
    </p>

    <p class="clausula-titulo">Cláusula 5ª – Valor e pagamento</p>
    <p class="clausula-texto">
      Pelo serviço contratado, a CONTRATANTE pagará à CONTRATADA o valor total de R$ ${valorTotal} (${valorExtenso}), nas condições de pagamento acordadas entre as partes, podendo incluir sinal de reserva de data e parcelas complementares até o dia do evento.
    </p>
    <p class="clausula-texto">
      Condições específicas (percentuais, datas e forma de pagamento) poderão constar em proposta ou mensagens eletrônicas, consideradas parte integrante deste contrato.
    </p>

    <p class="clausula-titulo">Cláusula 6ª – Hora extra</p>
    <p class="clausula-texto">
      A prorrogação do horário previsto dependerá de concordância da CONTRATADA e de disponibilidade de equipe, podendo ser cobrado o valor adicional de R$ ${horaExtra} por funcionário, por hora ou fração, a ser pago conforme ajuste entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 7ª – Cancelamento e remarcação</p>
    <p class="clausula-texto">
      O cancelamento por iniciativa da CONTRATANTE deverá ser informado à CONTRATADA por escrito ou meio eletrônico. Valores pagos poderão ser retidos, parcial ou totalmente, a título de multa e ressarcimento de custos já assumidos, conforme combinado entre as partes.
    </p>
    <p class="clausula-texto">
      A remarcação do evento dependerá de disponibilidade de agenda da CONTRATADA e poderá implicar atualização de valores.
    </p>

    <p class="clausula-titulo">Cláusula 8ª – Limpeza e conservação</p>
    <p class="clausula-texto">
      A CONTRATADA se responsabiliza pela organização e limpeza dos materiais e equipamentos que utilizar, retirando os resíduos diretamente decorrentes de sua atuação, não sendo responsável pela limpeza geral do local nem por danos causados por convidados.
    </p>

    <p class="clausula-titulo">Cláusula 9ª – Consumo e sobras</p>
    <p class="clausula-texto">
      O consumo de alimentos e bebidas limita-se às quantidades contratadas e adequadas ao número de convidados informado. O tratamento de eventuais sobras seguirá a política interna da CONTRATADA e o que vier a ser acordado entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 10ª – Danos a materiais</p>
    <p class="clausula-texto">
      A CONTRATANTE responderá por danos causados pelos convidados a equipamentos, utensílios e materiais da CONTRATADA, devendo arcar com os custos de reposição ou reparo. A título de referência, poderão ser adotados os valores: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}, sujeitos a atualização.
    </p>

    <p class="clausula-titulo">Cláusula 11ª – Comunicações eletrônicas</p>
    <p class="clausula-texto">
      As partes reconhecem como válidas, para fins de complementação e prova deste contrato, as comunicações realizadas por aplicativos de mensagem, e-mail ou outros meios eletrônicos usualmente utilizados entre CONTRATANTE e CONTRATADA.
    </p>

    <p class="clausula-titulo">Cláusula 12ª – Foro</p>
    <p class="clausula-texto">
      Para dirimir eventuais controvérsias decorrentes deste contrato, as partes elegem o foro da comarca de ${cidade}, renunciando a qualquer outro, por mais privilegiado que seja.
    </p>

    <p class="fecho">
      E, por estarem assim justas e contratadas, firmam o presente instrumento em duas vias de igual teor.
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
        <div>CONTRATADA – VOALÁ! BUFFET</div>
      </div>
    </div>
  `;

  document.getElementById("conteudo").innerHTML = html;
}

function gerarPDF() {
  gerarContrato(); // garante conteúdo atualizado

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