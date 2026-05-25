function v(id) {
  return document.getElementById(id).value.trim();
}

function gerarContrato() {
  const nomeContratante = v('nomeContratante');
  const cpfContratante  = v('cpfContratante');
  const endContratante  = v('endContratante');
  const nomeContratada  = v('nomeContratada');
  const cpfContratada   = v('cpfContratada');
  const endContratada   = v('endContratada');
  const dataEvento      = v('dataEvento');
  const horaEvento      = v('horaEvento');
  const localEvento     = v('localEvento');
  const numConvidados   = v('numConvidados');
  const salgado         = v('cardapioSalgado');
  const doce            = v('cardapioDoce');
  const valorTotal      = v('valorTotal');
  const valorExtenso    = v('valorExtenso');
  const precoTaça       = v('precoTaça');
  const precoPrato      = v('precoPrato');
  const precoTalher     = v('precoTalher');
  const cidade          = v('cidade');
  const dataAssinatura  = v('dataAssinatura');

  document.getElementById('conteudo').innerHTML = `
    <div class="titulo">Contrato de Prestação de Serviço</div>

    <p class="partes">
      <strong>CONTRATANTE:</strong> ${nomeContratante}, CPF nº ${cpfContratante}, residente na ${endContratante}.
    </p>

    <p class="partes">
      <strong>CONTRATADA:</strong> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF nº ${cpfContratada}, residente na ${endContratada}.
    </p>

    <p class="partes">
      As partes identificadas acima têm entre si, justo e acertado, o presente Contrato de Prestação de Serviços, que se regerá pelas cláusulas seguintes:
    </p>

    <p class="clausula">
      <strong>Cláusula 1ª:</strong> É objeto deste contrato a prestação, pela CONTRATADA à CONTRATANTE, do serviço de CREPE FRANCÊS em evento que se realizará na data de ${dataEvento}, às ${horaEvento}, no ${localEvento}, para ${numConvidados}.
    </p>

    <p class="clausula">
      <strong>Cláusula 2ª:</strong> A CONTRATANTE fica responsável por oferecer o espaço do evento em condições adequadas de higiene e limpeza, onde deverá ser disponibilizada uma pia para lavar os utensílios, geladeira com freezer, um fogão para o aquecimento dos recheios e um espaço para armazenar os insumos.
    </p>

    <p class="clausula">
      <strong>Parágrafo primeiro:</strong> O cardápio escolhido pela CONTRATANTE é o EXECUTIVO. Crepes salgados: ${salgado}. Crepes doces: ${doce}.
    </p>

    <p class="clausula">
      <strong>Parágrafo segundo:</strong> A CONTRATADA chegará ao evento com antecedência de uma hora do horário estabelecido na Cláusula 1ª e oferecerá o serviço de buffet por 4 (quatro) horas a partir do horário estabelecido para o início do evento.
    </p>

    <p class="clausula">
      <strong>Parágrafo terceiro:</strong> Caso haja necessidade de ultrapassar o horário de encerramento do evento, será cobrado o valor de R$ 30,00 para cada funcionário, a título de hora extra. Somente será possível mediante acordo entre as partes, com o objetivo único de manter a excelência no atendimento aos convidados.
    </p>

    <p class="clausula">
      <strong>Cláusula 3ª:</strong> A CONTRATADA fornecerá todo o material necessário para servir os crepes: mesa principal, descartáveis e guardanapos.
    </p>

    <p class="clausula">
      <strong>Parágrafo único:</strong> A CONTRATADA não oferece toalhas, taças para vinhos/espumantes, pratos de sobremesa, mesas e cadeiras, ornamentação do salão, bem como qualquer outro item que não esteja especificado neste contrato.
    </p>

    <p class="clausula">
      <strong>Cláusula 4ª:</strong> A CONTRATADA fornecerá, no seu corpo de funcionários, para a prestação dos serviços: 1 (um) crepeiro e 1 (um) auxiliar.
    </p>

    <p class="clausula">
      <strong>Cláusula 5ª:</strong> O serviço contratado no presente instrumento será remunerado pela quantia de R$ ${valorTotal} (${valorExtenso}), que deverá ser pago da seguinte forma: 20% na assinatura do contrato, 50% até 3 dias antes do evento e 30% no dia do evento.
    </p>

    <p class="clausula">
      <strong>Parágrafo primeiro:</strong> O valor referente a 20% do total deverá ser pago na assinatura do contrato.
    </p>

    <p class="clausula">
      <strong>Parágrafo segundo:</strong> Caso exceda o número de convidados estipulado na Cláusula 1ª deste contrato, será cobrado o valor que for acordado por convidado excedente.
    </p>

    <p class="clausula">
      <strong>Cláusula 6ª:</strong> O presente contrato poderá ser rescindido unilateralmente por qualquer uma das partes, desde que haja comunicação formal por escrito, justificando o motivo. Deverá acontecer, além disso, até 7 (sete) dias corridos antes da data prevista para o evento.
    </p>

    <p class="clausula">
      <strong>Parágrafo primeiro:</strong> Caso a CONTRATADA rescinda o contrato dentro das regras e prazo estabelecidos no caput desta cláusula, a mesma reembolsará a CONTRATANTE, devolvendo-lhe integralmente o montante pago até a data da rescisão.
    </p>

    <p class="clausula">
      <strong>Parágrafo segundo:</strong> Caso a CONTRATANTE rescinda o contrato dentro das regras e prazo estabelecidos no caput desta cláusula, a CONTRATADA a reembolsará, devolvendo-lhe 80% do montante pago até a data da rescisão.
    </p>

    <p class="clausula">
      <strong>Parágrafo terceiro:</strong> Caso a CONTRATANTE rescinda o contrato fora das regras e prazo estabelecidos no caput desta cláusula, não haverá reembolso do montante pago até a data da rescisão.
    </p>

    <p class="clausula">
      <strong>Cláusula 7ª:</strong> A CONTRATADA não se responsabiliza pela limpeza do local antes ou após o evento, retirando apenas os resíduos por ela provocados.
    </p>

    <p class="clausula">
      <strong>Cláusula 8ª:</strong> Todo o cardápio e bebidas já descritos serão fornecidos pela CONTRATADA, podendo ser consumidos à vontade no local do evento.
    </p>

    <p class="clausula">
      <strong>Parágrafo primeiro:</strong> A CONTRATADA considera uma margem de 10% para convidados excedentes, sendo assim as sobras dos suprimentos descritos no caput desta cláusula não poderão ficar com a CONTRATANTE sob qualquer pretexto.
    </p>

    <p class="clausula">
      <strong>Parágrafo segundo:</strong> A CONTRATADA não se responsabiliza pela insuficiência de alimentos e bebidas, caso exceda a margem de convidados estipulada no parágrafo primeiro desta cláusula.
    </p>

    <p class="clausula">
      <strong>Cláusula 10ª:</strong> A quebra ou perda de material do buffet, por parte dos convidados, será cobrada à parte, devendo a CONTRATANTE realizar o pagamento no final do evento, conforme valores a seguir: taça de refrigerante: R$ ${precoTaça}; prato: R$ ${precoPrato}; talher: R$ ${precoTalher}.
    </p>

    <p class="clausula">
      <strong>Cláusula 11ª:</strong> Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de ${cidade}/AM.
    </p>

    <p class="fecho" style="text-align:center;">
      ${cidade}, ${dataAssinatura}.
    </p>

    <div class="assinaturas">
      <div class="assinatura-bloco">
        <div class="linha"></div>
        <p><strong>${nomeContratante}</strong></p>
        <p>CONTRATANTE</p>
      </div>
      <div class="assinatura-bloco">
        <div class="linha"></div>
        <p><strong>${nomeContratada}</strong></p>
        <p>CONTRATADA – VOALÁ! BUFFET</p>
      </div>
    </div>
  `;
}

function gerarPDF() {
  gerarContrato();
  const elemento = document.getElementById('conteudo');
  const opcoes = {
    margin:       [10, 15, 10, 15],
    filename:     'contrato-voala-buffet.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opcoes).from(elemento).save();
}