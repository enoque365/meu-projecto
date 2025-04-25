
function SimularPhishing() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const telefone = document.getElementById("telefone").value;
  const conta = document.getElementById("conta").value;
  const cvv = document.getElementById("cvv").value;
  const cidade = document.getElementById("cidade").value;
  const provincia = document.getElementById("provincia").value;
  const pais = document.getElementById("pais").value;
  const mensagem = document.getElementById("mensagem");

  mensagem.style.color = "orange";
  mensagem.textContent = `Bem-vindo, ${usuario}... processando para a compra...`;

  setTimeout(() => {
    alert(`⚠️ ATENÇÃO: Seus dados foram capturados!\n\nUsuário: ${usuario}\nSenha: ${senha}\nTelefone: ${telefone}\nConta: ${conta}\nCVV: ${cvv}\nCidade: ${cidade}\nProvíncia: ${provincia}\nPaís: ${pais}\nNunca insira dados em sites desconhecidos.`);

    mensagem.style.color = "#ff5555";
    mensagem.textContent = "Simulação completa: Este site era falso. Proteja seus dados!";

    // Organizar os dados de forma formatada
    const dados = `
======================== DADOS CAPTURADOS (SIMULAÇÃO) ========================
Usuário   : ${usuario}
Senha     : ${senha}
Telefone  : ${telefone}
Conta     : ${conta}
CVV       : ${cvv}
Cidade    : ${cidade}
Província : ${provincia}
País      : ${pais}
==============================================================================
Data/Hora : ${new Date().toLocaleString()}
`;

    // Criar o arquivo para download
    const blob = new Blob([dados], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "doc.txt";
    link.click();

    // Redirecionar após 2 segundos
    setTimeout(() => {
      window.location.href = "index1.html";
    }, 2000);
  }, 1500);

  console.log("[SIMULADO] Dados capturados:", { usuario, senha, telefone, conta, cvv, cidade, provincia, pais });
}

document.getElementById("form_login").addEventListener("submit", function(e) {
  e.preventDefault();
  SimularPhishing();
});