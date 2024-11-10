function mostrarOpcoes() {
  const tipo = document.getElementById('tipo').value;
  const opcoesAdicionais = document.getElementById('opcoes-adicionais');
  const opcaoDetalhe = document.getElementById('opcao-detalhe');

  // Esconde as opções adicionais inicialmente
  opcoesAdicionais.classList.add('hidden');
  opcaoDetalhe.innerHTML = ''; // Limpa as opções

  if (tipo === 'fachada') {
    opcoesAdicionais.classList.remove('hidden');
    opcaoDetalhe.innerHTML = `
      <option value="fachada-luminosa">Fachada Luminosa</option>
      <option value="fachada-PVC">Fachada PVC</option>
      <option value="fachada-Adesivada">Fachada Adesivada</option>
    `;
  } else if (tipo === 'placa') {
    opcoesAdicionais.classList.remove('hidden');
    opcaoDetalhe.innerHTML = `
      <option value="placa-Adesivada">Placa Adesivada</option>
      <option value="placa-PVC">Placa PVC</option>
      <option value="placa-Luminosa">Placa Luminosa</option>
    `;
  } else if (tipo === 'cortina') {
    opcoesAdicionais.classList.remove('hidden');
    opcaoDetalhe.innerHTML = `
      <option value="cortina-lona">Cortina Transparente</option>
      <option value="cortina-blackout">Cortina Blackout</option>
    `;
  } else if (tipo === 'toldo') {
    opcoesAdicionais.classList.remove('hidden');
    opcaoDetalhe.innerHTML = `
      <option value="toldo-policarbonato">Toldo Policarbonato</option>
      <option value="toldo-lona">Toldo Retrátil</option>
      <option value="toldo-fixo">Toldo Fixo</option>
    `;
  }
}

function mostrarParcelas() {
  const pagamento = document.getElementById('pagamento').value;
  const parcelasContainer = document.getElementById('parcelas-container');

  // Exibe as parcelas somente se for Cartão de Crédito
  if (pagamento === 'cartao') {
    parcelasContainer.classList.remove('hidden');
  } else {
    parcelasContainer.classList.add('hidden');
  }
}

function formatarMoeda(input) {
  let value = input.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
  value = value.replace(/(\d)(\d{2})$/, '$1,$2'); // Formatação de 2 casas decimais
  input.value = value.replace(/(?=(\d{3})+(\.))/g, '$1.');
}

function obterLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const endereco = `${position.coords.latitude}, ${position.coords.longitude}`;
      document.getElementById('endereco').value = endereco;
    });
  } else {
    alert('Geolocalização não é suportada por este navegador.');
  }
}

function enviarWhatsApp() {
  const nome = document.getElementById('nomeCliente').value;
  const tipo = document.getElementById('tipo').value;
  const opcaoDetalhe = document.getElementById('opcao-detalhe').value;
  const dimensao = document.getElementById('dimensao').value;
  const valor = document.getElementById('valor').value;
  const pagamento = document.getElementById('pagamento').value;
  const parcelas = document.getElementById('parcelas').value;
  const endereco = document.getElementById('endereco').value;

  let mensagem = `Pedido Personalizado:
    Nome: ${nome}
    Tipo: ${tipo}
    Detalhes: ${opcaoDetalhe}
    Dimensão: ${dimensao}
    Valor: ${valor}
    Pagamento: ${pagamento}`;

  if (pagamento === 'cartao') {
    mensagem += `\nParcelas: ${parcelas}`;
  }

  mensagem += `\nEndereço: ${endereco}`;

  // Números de WhatsApp
  const whatsappURL1 = `https://wa.me/5531992842106?text=${encodeURIComponent(mensagem)}`;
  const whatsappURL2 = `https://wa.me/5531992051436?text=${encodeURIComponent(mensagem)}`;

  // Abre duas janelas separadas para os dois números
  window.open(whatsappURL1, '_blank');
  window.open(whatsappURL2, '_blank');
}
