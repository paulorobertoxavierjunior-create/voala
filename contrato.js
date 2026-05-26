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

    <p class="partes"><span class="destaque">CONTRATANTE:</span> ${nomeContratante}, CPF ${cpfContratante}. Endereço: ${endContratante}.</p>
    <p class="partes"><span class="destaque">CONTRATADA:</span> VOALÁ! BUFFET, representada por ${nomeContratada}, CPF ${cpfContratada}, residente na ${endContratada}.</p>
    <p class="partes">As partes acima identificadas têm entre si, justo e acertado, o presente Contrato de Prestação de Serviço, que se regerá pelas cláusulas seguintes:</p>

    <p class="clausula-titulo">| Cláusula 1ª: Objeto</p>
    <p class="clausula-texto">Prestação de serviço de ${tipoServico} em ${dataEvento}, às ${horaEvento}, no endereço: ${localEvento}, para ${numConvidados}. O cardápio detalhado será definido entre as partes via proposta e mensagens eletrônicas, que passam a integrar este contrato.</p>

    <p class="clausula-titulo">| Cláusula 2ª: Responsabilidades</p>
    <p class="clausula-texto">A CONTRATANTE fornecerá espaço adequado com pia, geladeira/freezer e fogão.</p>
    <p class="clausula-texto"><span class="destaque">Parágrafo segundo:</span> Serviço por 4 horas. Antecedência de 1h para montagem.</p>
    <p class="clausula-texto"><span class="destaque">Parágrafo terceiro:</span> Hora extra: R$ ${horaExtra} por funcionário, mediante acordo entre as partes.</p>

    <p class="clausula-titulo">| Cláusula 3ª: Material</p>
    <p class="clausula-texto">A CONTRATADA fornecerá material para servir (mesa principal, descartáveis e guardanapos). Não inclui mobiliário ou ornamentação.</p>

    <p class="clausula-titulo">| Cláusula 4ª: Equipe</p>
    <p class="clausula-texto">1 crepeiro, 1 auxiliar e, se necessário, 1 garçom (a critério da CONTRATADA).</p>

    <p class="clausula-titulo">| Cláusula 5ª: Remuneração (R$ ${valorTotal})</p>
    <p class="clausula-texto">Valor total de R$ ${valorTotal} (${valorExtenso}). Forma de pagamento: 20% na assinatura, 50% até 3 dias antes e 30% no dia do evento.</p>

    <p class="clausula-titulo">| Cláusula 6ª: Rescisão</p>
    <p class="clausula-texto">Comunicação formal com 7 dias de antecedência. Reembolsos: 100% (se a CONTRATADA rescindir), 80% (se a CONTRATANTE rescindir dentro do prazo), e sem reembolso em caso de rescisão fora do prazo.</p>

    <p class="clausula-titulo">| Cláusula 7ª e 8ª: Limpeza e Consumo</p>
    <p class="clausula-texto">Limpeza apenas dos resíduos do buffet. Consumo à vontade no local. Margem de 10% para convidados excedentes, sem direito às sobras.</p>

    <p class="clausula-titulo">| Cláusula 10ª: Danos</p>
    <p class="clausula-texto">Quebra de material: taça R$ ${precoTaça}; prato R$ ${precoPrato}; talher R$ ${precoTalher}, cobrados ao final do evento.</p>

    <p class="clausula-titulo">| Cláusula 11ª: Foro</p>
    <p class="clausula-texto">Fica eleito o foro da comarca de ${cidade}, para dirimir quaisquer controvérsias oriundas do presente contrato.</p>

    <p class="fecho">Por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor.</p>
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
        <div>CONTRATADA</div>
      </div>
    </div>
  `;

  document.getElementById("conteudo").innerHTML = html;
}

function gerarPDF() {
  gerarContrato();

  // Abre janela de impressão — o que você vê é o que sai no PDF
  const conteudo = document.getElementById("conteudo").innerHTML;
  const janela = window.open("", "_blank");
  janela.document.write(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8"/>
      <title>Contrato VOALÁ</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @page {
          size: A4;
          margin: 0;
        }

        body {
          width: 210mm;
          height: 297mm;
          margin: 0;
          padding: 0;
          background: #fff;
          font-family: "Times New Roman", serif;
        }

        #pagina {
          width: 210mm;
          height: 297mm;
          padding: 14mm 20mm 12mm 20mm;
          overflow: hidden;

          /* FONTE – o que você muda aqui sai no PDF */
          font-size: 9pt;
          line-height: 1.25;

          text-align: justify;
          color: #000;
        }

        .titulo {
          text-align: center;
          font-weight: bold;
          font-size: 11pt;
          margin-bottom: 6px;
        }

        .partes { margin-bottom: 4px; }

        .clausula-titulo {
          font-weight: bold;
          margin-top: 6px;
          margin-bottom: 1px;
        }

        .clausula-texto { margin-bottom: 3px; }

        .destaque { font-weight: bold; }

        .fecho { margin-top: 8px; }

        .assinaturas {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
          gap: 30px;
        }

        .assinatura-bloco {
          flex: 1;
          text-align: center;
          font-size: 9pt;
        }

        .assinatura-linha {
          border-top: 1px solid #000;
          margin-top: 22px;
          margin-bottom: 3px;
        }
      </style>
    </head>
    <body>
      <div id="pagina">${conteudo}</div>
      <script>
        window.onload = function() {
          window.print();
          window.onafterprint = function() { window.close(); };
        };
      <\/script>
    </body>
    </html>
  `);
  janela.document.close();
}