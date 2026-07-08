// Função auxiliar para pegar o valor limpo dos inputs
function v(id) {
  return document.getElementById(id).value.trim();
}

// Gera a Proposta Visual (Estilo Canva) na tela
function gerarPropostaVisual() {
  const nomeContratante = v("nomeContratante");
  const dataEvento      = v("dataEvento");
  const horaEvento      = v("horaEvento");
  const localEvento     = v("localEvento");
  const numConvidados   = v("numConvidados");
  const tipoServico     = v("tipoServico");
  const valorTotal      = v("valorTotal");

  const htmlOrçamento = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; padding: 10px;">
      
      <!-- CABEÇALHO PREMIUM -->
      <div style="text-align: center; border-bottom: 2px solid #d4a373; padding-bottom: 15px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 26px; color: #1b1b1b; letter-spacing: 2px;">VOALÁ! BUFFET</h1>
        <p style="margin: 5px 0 0 0; font-size: 11px; color: #777; text-transform: uppercase; letter-spacing: 3px;">Soluções & Eventos</p>
      </div>

      <!-- APRESENTAÇÃO DO CLIENTE -->
      <div style="margin-bottom: 25px; background: #faf5ef; padding: 15px; border-radius: 4px;">
        <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #d4a373; text-transform: uppercase;">Orçamento Exclusivo</h3>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Cliente:</strong> ${nomeContratante}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Data prevista:</strong> ${dataEvento} às ${horaEvento}</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Convidados:</strong> ${numConvidados} integrais</p>
        <p style="margin: 4px 0; font-size: 13px;"><strong>Local:</strong> ${localEvento}</p>
      </div>

      <!-- DIRETRIZES DO SERVIÇO -->
      <h3 style="font-size: 13px; color: #1b1b1b; border-bottom: 1px solid #eee; padding-bottom: 4px; margin-top: 20px; text-transform: uppercase;">Sugestão de Serviço</h3>
      <p style="font-size: 12px; line-height: 1.6; color: #55px;">
        <strong>Da acolhida:</strong> Iniciaremos o atendimento com a recepção e orientação dos convidados. Acomodados e cientes, serviremos as bebidas e aguardaremos o seu "OK" para iniciarmos as ofertas do cardápio selecionado.
      </p>

      <!-- CARDÁPIO SELECIONADO DINAMICAMENTE -->
      <h3 style="font-size: 13px; color: #1b1b1b; border-bottom: 1px solid #eee; padding-bottom: 4px; margin-top: 20px; text-transform: uppercase;">O Cardápio Escolhido</h3>
      <div style="background: #fff; border: 1px solid #eedecf; padding: 12px; border-radius: 4px; margin-top: 8px;">
        <h4 style="margin: 0 0 6px 0; font-size: 13px; color: #d4a373;">${tipoServico}</h4>
        <p style="font-size: 12px; line-height: 1.5; margin: 0; color: #444;">
          Preparados com ingredientes selecionados. Inclui logística completa, equipe especializada de atendimento e de cozinha liderada pelo <strong>Chefe Paulo Xavier</strong>.
        </p>
      </div>

      <p style="font-size: 11px; color: #888; margin-top: 10px; font-style: italic;">
        *Levamos inclusos no pacote os kits de louças simples (pratos, taças e talheres) e todo o material descartável necessário.
      </p>

      <!-- LOGÍSTICA DE BEBIDAS -->
      <h3 style="font-size: 13px; color: #1b1b1b; border-bottom: 1px solid #eee; padding-bottom: 4px; margin-top: 25px; text-transform: uppercase;">Das Bebidas Inclusas</h3>
      <p style="font-size: 12px; line-height: 1.5; color: #555; margin: 5px 0;">
        Servidas constantemente pela equipe: Água sem gás, Sucos (2 sabores) e Refrigerantes de linha (Coca-Cola, Guaraná Antarctica e Fanta).
      </p>

      <!-- QUEBRA DE PÁGINA PARA ESTILO PORTFÓLIO (75% / 25%) -->
      <div class="html2pdf__page-break"></div>

      <!-- PÁGINA 2: FECHAMENTO DE VALORES -->
      <div style="text-align: center; margin-top: 30px; background: #1b1b1b; color: #fff; padding: 25px; border-radius: 4px;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #d4a373;">Investimento Total do Evento</span>
        <h2 style="margin: 10px 0 0 0; font-size: 28px; font-weight: bold; color: #fff;">R$ ${valorTotal}</h2>
        <p style="margin: 5px 0 0 0; font-size: 11px; color: #aaa;">Validade desta proposta: 30 dias</p>
      </div>

      <!-- CONTATOS E ASSINATURA DO CHEFE -->
      <div style="margin-top: 60px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
        <p style="margin: 0; font-size: 14px; font-weight: bold; color: #1b1b1b;">Chefe Paulo Xavier</p>
        <p style="margin: 3px 0; font-size: 12px; color: #666;">Voalá! Buffet — Soluções & Eventos</p>
        <p style="margin: 15px 0 0 0; font-size: 11px; color: #999;">Whats/fone: (92) 98847-2009 | CNPJ: 40.623.321/0001-20</p>
      </div>

    </div>
  `;

  document.getElementById("conteudo").innerHTML = htmlOrçamento;
}

// Executa o processo de confirmação de pedido duplo (Baixa o PDF Premium + Abre o WhatsApp)
function confirmarPedido() {
  // 1. Atualiza e monta o HTML do orçamento visual na div invisível de preview
  gerarPropostaVisual();

  const elemento = document.getElementById("conteudo");
  const nomeContratante = v("nomeContratante");
  const tipoServico     = v("tipoServico");
  const dataEvento      = v("dataEvento");

  // Nome do arquivo idêntico ao padrão que organizamos antes
  const nomeFormatado = nomeContratante.toLowerCase().replace(/\s+/g, '_');
  const nomeFinalDoArquivo = `orcamento_${nomeFormatado}_Voalá!.pdf`;

  const opcoes = {
    margin:      [15, 15, 15, 15],
    filename:    nomeFinalDoArquivo,
    image:       { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF:       { unit: "mm", format: "a4", orientation: "portrait" },
    pagebreak:   { mode: ['css', 'legacy'] }
  };

  // 2. Gera e baixa o PDF automaticamente no dispositivo do usuário
  html2pdf()
    .set(opcoes)
    .from(elemento)
    .outputPdf("blob")
    .then(function(blob) {
      const url  = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href     = url;
      link.download = nomeFinalDoArquivo;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // 3. DISPARA O WHATSAPP IMEDIATAMENTE DEPOIS DO DOWNLOAD
      // Monta o texto perfeito para o fechamento
      const textoMensagem = `Olá Chefe Paulo! Gostaria de *CONFIRMAR O PEDIDO* do evento de *${nomeContratante}*.\n\n` +
                            `• *Serviço:* ${tipoServico}\n` +
                            `• *Data:* ${dataEvento}\n\n` +
                            `Já baixei o PDF do orçamento oficial estilizado aqui no meu dispositivo e estou te enviando em anexo para fecharmos!`;

      const textoCodificado = encodeURIComponent(textoMensagem);
      const numeroWhats = "5592988472009"; // Seu número configurado padrão[span_2](start_span)[span_2](end_span)
      
      // Abre a aba do WhatsApp
      window.open(`https://api.whatsapp.com/send?phone=${numeroWhats}&text=${textoCodificado}`, '_blank');
    });
}

// Vincula o carregamento da tela para exibir o layout inicial do orçamento
window.onload = gerarPropostaVisual;
