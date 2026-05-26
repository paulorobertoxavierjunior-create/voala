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
    <div class="titulo">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</div>
    <div class="subtitulo">${tituloContrato}</div>

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, CPF nº ${cpfContratante}, residente em ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF nº ${cpfContratada}, com endereço em ${endContratada}.</p>

    <p class="partes">
      As partes acima identificadas têm entre si, justo e acertado, o presente Contrato de Prestação de Serviços, que se regerá pelas cláusulas e condições a seguir expostas.
    </p>

    <p class="clausula-titulo">Cláusula 1ª – Objeto</p>
    <p class="clausula-texto">
      O presente contrato tem por objeto a prestação, pela CONTRATADA, de serviços de ${tipoServico}, em evento a ser realizado na data de ${dataEvento}, às ${horaEvento}, no endereço ${localEvento}, para atendimento de aproximadamente ${numConvidados}.
    </p>
    <p class="clausula-texto">
      Detalhes específicos do cardápio, bebidas, itens adicionais e horários poderão ser definidos e ajustados entre as partes por meio de mensagens eletrônicas (como WhatsApp, e-mail ou similares), as quais passam a integrar o presente contrato para todos os fins.
    </p>

    <p class="clausula-titulo">Cláusula 2ª – Estrutura e condições do local</p>
    <p class="clausula-texto">
      A CONTRATANTE se compromete a disponibilizar o espaço do evento em condições adequadas de higiene, segurança e limpeza, devendo providenciar, quando necessário, ponto de energia, pia para lavagem de utensílios, área para montagem e espaço suficiente para a equipe da CONTRATADA trabalhar.
    </p>

    <p class="clausula-titulo">Cláusula 3ª – Materiais e itens fornecidos</p>
    <p class="clausula-texto">
      A CONTRATADA fornecerá o material essencial para a execução do serviço contratado, incluindo equipamentos próprios de preparo e utensílios básicos para serviço dos alimentos.
    </p>
    <p class="clausula-texto">
      Itens como decoração, mobiliário (mesas, cadeiras), louças, taças de vidro, toalhas especiais, estruturas extras e demais elementos não mencionados expressamente neste instrumento não estão incluídos no serviço padrão, salvo se houver expressa pactuação entre as partes, preferencialmente por escrito.
    </p>

    <p class="clausula-titulo">Cláusula 4ª – Equipe</p>
    <p class="clausula-texto">
      A CONTRATADA colocará à disposição da CONTRATANTE equipe compatível com o porte do evento, incluindo profissionais de cozinha e atendimento, em quantidade adequada ao serviço contratado.
    </p>

    <p class="clausula-titulo">Cláusula 5ª – Valor e forma de pagamento</p>
    <p class="clausula-texto">
      Pelo serviço ora contratado, a CONTRATANTE pagará à CONTRATADA o valor total de R$ ${valorTotal} (${valorExtenso}), nas condições acordadas entre as partes, podendo ser dividido, a título exemplificativo, em sinal/reserva de data e parcelas complementares até a data do evento.
    </p>
    <p class="clausula-texto">
      As condições específicas de pagamento (percentuais, datas de vencimento e forma de pagamento) poderão ser definidas em proposta comercial, conversa de WhatsApp ou outro meio eletrônico adotado entre as partes, integrando este contrato.
    </p>

    <p class="clausula-titulo">Cláusula 6ª – Hora extra</p>
    <p class="clausula-texto">
      Caso haja necessidade de prorrogação do horário originalmente combinado para o evento, a continuidade do serviço ficará condicionada à concordância da CONTRATADA e à disponibilidade de equipe, podendo ser cobrado o valor adicional de R$ ${horaExtra} por funcionário, por hora extra ou fração, a ser pago ao final do evento ou na forma combinada entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 7ª – Cancelamento e remarcação</p>
    <p class="clausula-texto">
      Em caso de cancelamento por iniciativa da CONTRATANTE, deverá haver comunicação formal à CONTRATADA, preferencialmente por escrito ou mensagem eletrônica. Valores eventualmente pagos poderão ser retidos, parcial ou totalmente, a título de multa ou compensação de custos já assumidos, conforme condições previamente ajustadas entre as partes.
    </p>
    <p class="clausula-texto">
      Na hipótese de remarcação do evento, as partes envidarão esforços para encontrar nova data que seja possível para ambas, podendo haver atualização de valores, conforme tabela vigente da CONTRATADA à época da remarcação.
    </p>

    <p class="clausula-titulo">Cláusula 8ª – Limpeza e responsabilidade pelo espaço</p>
    <p class="clausula-texto">
      A CONTRATADA se responsabiliza pela organização e limpeza dos materiais e equipamentos por ela utilizados, bem como pela retirada de resíduos diretamente relacionados ao serviço prestado, não se responsabilizando, entretanto, pela limpeza completa do local ou por danos causados por convidados ou terceiros.
    </p>

    <p class="clausula-titulo">Cláusula 9ª – Consumo, sobras e excedentes</p>
    <p class="clausula-texto">
      O consumo de alimentos e bebidas será limitado às quantidades contratadas e adequadas ao número de convidados informado. Eventuais sobras de alimentos e bebidas, quando houver, poderão ser tratadas conforme política interna da CONTRATADA e/ou acordo específico entre as partes.
    </p>

    <p class="clausula-titulo">Cláusula 10ª – Danos a materiais</p>
    <p class="clausula-texto">
      A CONTRATANTE será responsável por danos causados pelos convidados aos equipamentos, utensílios e materiais da CONTRATADA, devendo arcar com os custos de reposição ou reparo. A título de referência, poderão ser utilizados valores como: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}, podendo ser ajustados conforme a tabela vigente da CONTRATADA.
    </p>

    <p class="clausula-titulo">Cláusula 11ª – Comunicação eletrônica</p>
    <p class="clausula-texto">
      As partes reconhecem como válidas, para fins de complementação e ajuste deste contrato, as comunicações realizadas por meio de aplicativos de mensagem (como WhatsApp), e-mail ou outros meios eletrônicos utilizados habitualmente entre CONTRATANTE e CONTRATADA.
    </p>

    <p class="clausula-titulo">Cláusula 12ª – Foro</p>
    <p class="clausula-texto">
      Para dirimir quaisquer controvérsias oriundas deste contrato, as partes elegem o foro da comarca de ${cidade}, renunciando a qualquer outro, por mais privilegiado que seja.
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
  gerarContrato(); // atualiza o conteúdo na tela

  const elemento = document.getElementById("conteudo");
  const opcoes = {
    margin:       [0, 0, 0, 0],               // A página já está em A4 via CSS
    filename:     "contrato-voala.pdf",
    image:        { type: "jpeg", quality: 0.98 },
    html2canvas:  { scale: 3, useCORS: true },
    jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf().set(opcoes).from(elemento).save();
}