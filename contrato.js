// Função auxiliar para pegar o valor limpo dos inputs
function v(id) {
  return document.getElementById(id).value.trim();
}

// Função para gerar o HTML do contrato dentro do container de visualização
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
    <div class="titulo" style="text-align: center; font-weight: bold; font-size: 14px; margin-bottom: 2px;">CONTRATO DE PRESTAÇÃO DE SERVIÇO</div>
    <div class="subtitulo" style="text-align: center; font-weight: bold; font-size: 11px; margin-bottom: 12px; color: #444;">${tituloContrato}</div>

    <p class="partes" style="margin: 4px 0;"><span class="destaque" style="font-weight: bold;">CONTRATANTE:</span> ${nomeContratante}, CPF ${cpfContratante}, residente em ${endContratante}.</p>
    <p class="partes" style="margin: 4px 0;"><span class="destaque" style="font-weight: bold;">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF ${cpfContratada}, com endereço em ${endContratada}.</p>
    <p class="partes" style="margin: 4px 0 12px 0;">As partes acima identificadas firmam o presente Contrato de Prestação de Serviço, que se regerá pelas cláusulas seguintes.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 1ª – Objeto</p>
    <p class="clausula-texto" style="margin: 0 0 4px 0;">Prestação, pela CONTRATADA, de ${tipoServico}, em evento a ser realizado em ${dataEvento}, às ${horaEvento}, no(a) ${localEvento}, para aproximadamente ${numConvidados}.</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">Cardápio, bebidas e demais detalhes serão definidos em proposta e mensagens eletrônicas (WhatsApp, e-mail ou similares), que passam a integrar este contrato.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 2ª – Local e condições</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A CONTRATANTE deverá disponibilizar espaço adequado, limpo e seguro, com acesso à energia elétrica e, quando necessário, pia e área para montagem e trabalho da equipe da CONTRATADA.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 3ª – Materiais fornecidos</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A CONTRATADA fornecerá os equipamentos e utensílios básicos para execução do serviço. Mobiliário, decoração, louças especiais, taças de vidro, toalhas diferenciadas e outros itens não citados não estão incluídos, salvo ajuste específico entre as partes.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 4ª – Equipe</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A CONTRATADA disponibilizará equipe compatível com o porte do evento, composta por profissionais de produção e atendimento em número suficiente ao serviço contratado.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 5ª – Valor e forma de pagamento</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">Pelo serviço contratado, a CONTRATANTE pagará à CONTRATADA o valor total de R$ ${valorTotal} (${valorExtenso}), nas condições acordadas entre as partes, podendo incluir sinal de reserva e parcelas complementares até o dia do evento.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 6ª – Hora extra</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A eventual prorrogação do horário dependerá de concordância da CONTRATADA e disponibilidade de equipe, podendo ser cobrado R$ ${horaExtra} por funcionário, por hora ou fração, conforme ajuste entre as partes.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 7ª – Cancelamento e remarcação</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">O cancelamento por iniciativa da CONTRATANTE deverá ser comunicado por escrito ou meio eletrônico. Valores pagos poderão ser retidos, parcial ou totalmente, conforme combinado entre as partes. A remarcação dependerá de disponibilidade de agenda e poderá implicar atualização de valores.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 8ª – Limpeza e conservação</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A CONTRATADA se responsabiliza pela limpeza dos materiais e equipamentos que utilizar, retirando os resíduos gerados pelo serviço. A limpeza geral do local e danos causados por convidados não são de responsabilidade da CONTRATADA.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 9ª – Consumo e sobras</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">O consumo limita-se às quantidades contratadas. O tratamento de eventuais sobras seguirá a política interna da CONTRATADA e o que for acordado entre as partes, não havendo obrigação de destinação de excedentes à CONTRATANTE.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 10ª – Danos a materiais</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">A CONTRATANTE responderá por danos causados pelos convidados a equipamentos e materiais da CONTRATADA, devendo arcar com os custos de reposição ou reparo. Valores de referência: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 11ª – Comunicações eletrônicas</p>
    <p class="clausula-texto" style="margin: 0 0 6px 0;">As partes reconhecem como válidas as comunicações realizadas por aplicativos de mensagem, e-mail ou outros meios eletrônicos utilizados entre CONTRATANTE e CONTRATADA, para fins de complementação e prova deste contrato.</p>

    <p class="clausula-titulo" style="font-weight: bold; margin: 6px 0 2px 0;">Cláusula 12ª – Foro</p>
    <p class="clausula-texto" style="margin: 0 0 10px 0;">Para dirimir eventuais controvérsias, as partes elegem o foro da comarca de ${cidade}, renunciando a qualquer outro, por mais privilegiado que seja.</p>

    <p class="fecho" style="margin: 4px 0;">E, por estarem assim justas e contratadas, firmam o presente instrumento em duas vias de igual teor.</p>
    <p class="fecho" style="margin: 4px 0 25px 0; text-align: right;">${cidade}, ${dataAssinatura}.</p>

    <!-- Bloco de assinaturas enxuto para travar em página única -->
    <div class="assinaturas" style="margin-top: 30px; display: flex; justify-content: space-between; text-align: center;">
      <div class="assinatura-bloco" style="width: 45%;">
        <div class="assinatura-linha" style="border-top: 1px solid #000; margin-bottom: 4px;"></div>
        <div><strong>${nomeContratante}</strong></div>
        <div style="font-size: 10px; color: #55px;">CONTRATANTE</div>
      </div>
      <div class="assinatura-bloco" style="width: 45%;">
        <div class="assinatura-linha" style="border-top: 1px solid #000; margin-bottom: 4px;"></div>
        <div><strong>${nomeContratada}</strong></div>
        <div style="font-size: 10px; color: #55px;">CONTRATADA – VOALÁ! BUFFET</div>
      </div>
    </div>
  `;

  document.getElementById("conteudo").innerHTML = html;
}

// Geração e download do PDF otimizado para folha única e mobile
function gerarPDF() {
  // Força a atualização da preview antes de processar
  gerarContrato();

  const elemento = document.getElementById("conteudo");
  const nomeContratante = v("nomeContratante");
  
  // Customização do nome do arquivo padrão solicitado
  // Substitui espaços por underlines e transforma em minúsculas (Ex: jessica_coelho_pacheco_Voalá!.pdf)
  const nomeTratado = nomeContratante.toLowerCase().replace(/\s+/g, '_');
  const nomeDoArquivo = `${nomeTratado}_Voalá!.pdf`;

  // Configurações focadas em puxar todo o conteúdo para o topo e evitar quebras de folha
  const opcoes = {
    margin:      [10, 12, 10, 12], // Margens equilibradas que dão teto de segurança
    filename:    nomeDoArquivo,
    image:       { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF:       { unit: "mm", format: "a4", orientation: "portrait" }
  };

  // Processo via Blob seguro para download em aparelhos móveis
  html2pdf()
    .set(opcoes)
    .from(elemento)
    .outputPdf("blob")
    .then(function(blob) {
      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href     = url;
      link.download = nomeDoArquivo;
      link.target   = "_blank"; // Fallback para abrir no navegador do mobile se bloquear
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(function() { URL.revokeObjectURL(url); }, 5000);
    });
}

// Inicializa a visualização automaticamente no carregamento da página
window.onload = gerarContrato;
