function v(id) {
  return document.getElementById(id).value.trim();
}

function gerarContrato() {
  const tituloContrato  = v("tituloContrato");
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
    <p class="partes">As partes acima identificadas firmam o presente Contrato de Prestação de Serviço, que se regerá pelas cláusulas seguintes.</p>

    <p class="clausula-titulo">Cláusula 1ª – Objeto</p>
    <p class="clausula-texto">Prestação, pela CONTRATADA, de ${tipoServico}, em evento a ser realizado em ${dataEvento}, às ${horaEvento}, no(a) ${localEvento}, para aproximadamente ${numConvidados}.</p>
    <p class="clausula-texto">Cardápio, bebidas e demais detalhes serão definidos em proposta e mensagens eletrônicas (WhatsApp, e-mail ou similares), que passam a integrar este contrato.</p>

    <p class="clausula-titulo">Cláusula 2ª – Local e condições</p>
    <p class="clausula-texto">A CONTRATANTE deverá disponibilizar espaço adequado, limpo e seguro, com acesso à energia elétrica e, quando necessário, pia e área para montagem e trabalho da equipe da CONTRATADA.</p>

    <p class="clausula-titulo">Cláusula 3ª – Materiais fornecidos</p>
    <p class="clausula-texto">A CONTRATADA fornecerá os equipamentos e utensílios básicos para execução do serviço. Mobiliário, decoração, louças especiais, taças de vidro, toalhas diferenciadas e outros itens não citados não estão incluídos, salvo ajuste específico entre as partes.</p>

    <p class="clausula-titulo">Cláusula 4ª – Equipe</p>
    <p class="clausula-texto">A CONTRATADA disponibilizará equipe compatível com o porte do evento, composta por profissionais de produção e atendimento em número suficiente ao serviço contratado.</p>

    <p class="clausula-titulo">Cláusula 5ª – Valor e forma de pagamento</p>
    <p class="clausula-texto">Pelo serviço contratado, a CONTRATANTE pagará à CONTRATADA o valor total de R$ ${valorTotal} (${valorExtenso}), nas condições acordadas entre as partes, podendo incluir sinal de reserva e parcelas complementares até o dia do evento.</p>

    <p class="clausula-titulo">Cláusula 6ª – Hora extra</p>
    <p class="clausula-texto">A eventual prorrogação do horário dependerá de concordância da CONTRATADA e disponibilidade de equipe, podendo ser cobrado R$ ${horaExtra} por funcionário, por hora ou fração, conforme ajuste entre as partes.</p>

    <p class="clausula-titulo">Cláusula 7ª – Cancelamento e remarcação</p>
    <p class="clausula-texto">O cancelamento por iniciativa da CONTRATANTE deverá ser comunicado por escrito ou meio eletrônico. Valores pagos poderão ser retidos, parcial ou totalmente, conforme combinado entre as partes. A remarcação dependerá de disponibilidade de agenda e poderá implicar atualização de valores.</p>

    <p class="clausula-titulo">Cláusula 8ª – Limpeza e conservação</p>
    <p class="clausula-texto">A CONTRATADA se responsabiliza pela limpeza dos materiais e equipamentos que utilizar, retirando os resíduos gerados pelo serviço. A limpeza geral do local e danos causados por convidados não são de responsabilidade da CONTRATADA.</p>

    <p class="clausula-titulo">Cláusula 9ª – Consumo e sobras</p>
    <p class="clausula-texto">O consumo limita-se às quantidades contratadas. O tratamento de eventuais sobras seguirá a política interna da CONTRATADA e o que for acordado entre as partes, não havendo obrigação de destinação de excedentes à CONTRATANTE.</p>

    <p class="clausula-titulo">Cláusula 10ª – Danos a materiais</p>
    <p class="clausula-texto">A CONTRATANTE responderá por danos causados pelos convidados a equipamentos e materiais da CONTRATADA, devendo arcar com os custos de reposição ou reparo. Valores de referência: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}.</p>

    <p class="clausula-titulo">Cláusula 11ª – Comunicações eletrônicas</p>
    <p class="clausula-texto">As partes reconhecem como válidas as comunicações realizadas por aplicativos de mensagem, e-mail ou outros meios eletrônicos utilizados entre CONTRATANTE e CONTRATADA, para fins de complementação e prova deste contrato.</p>

    <p class="clausula-titulo">Cláusula 12ª – Foro</p>
    <p class="clausula-texto">Para dirimir eventuais controvérsias, as partes elegem o foro da comarca de ${cidade}, renunciando a qualquer outro, por mais privilegiado que seja.</p>

    <p class="fecho">E, por estarem assim justas e contratadas, firmam o presente instrumento em duas vias de igual teor.</p>
    <p class="fecho">${cidade}, ${dataAssinatura}.</p>

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
  gerarContrato();

  const elemento = document.getElementById("conteudo");

  const opcoes = {
    margin:      [0, 0, 0, 0],
    filename:    "Contrato_Voalá_Buffet.pdf",
    image:       { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF:       { unit: "mm", format: "a4", orientation: "portrait" }
  };

  // Gera o Blob e força o download — funciona no Android e iOS
  html2pdf()
    .set(opcoes)
    .from(elemento)
    .outputPdf("blob")
    .then(function(blob) {
      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href     = url;
      link.download = "contrato-voala.pdf";
      link.target   = "_blank"; // fallback: abre nova aba se o download bloquear
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
    });
}