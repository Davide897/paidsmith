// Manual da Paidsmith usado pelo assistente de IA. Escrito a partir dos ecrãs reais da app.
// Regra: se uma função não está aqui, a app não a tem.
export const MANUAL = `
# Paidsmith — manual completo

## O que é
A Paidsmith é uma app de faturação para trabalhadores independentes e pequenas empresas: cria faturas em PDF, regista despesas com fotografia do recibo, mostra prazos de pagamento num calendário e faz o resumo do ano. Funciona no navegador do computador, Android e iPhone, e pode ser instalada como app. Idiomas: português, espanhol e inglês (Definições > Língua da aplicação; os botões PT/ES/EN também estão no ecrã de entrada). Moedas: euro (€) e libra (£).

## Conta e entrada
- Criar conta: escrever email e password (mínimo 8 caracteres), marcar "Li e aceito os Termos e a Política de Privacidade", passar a caixa "Confirme que é humano" e tocar em "Criar conta". Chega um email de confirmação; é preciso abri-lo antes de entrar. Se não aparecer, procurar na pasta de spam/lixo e marcar como "não é spam".
- Entrar: email + password + caixa "Confirme que é humano" + "Entrar" (ou Enter). "Lembrar o meu email" guarda o email; a password pode ser guardada pelo gestor de passwords do telemóvel/navegador (Face ID, Google).
- Esqueci-me da password: escrever o email no ecrã de entrada e tocar em "Esqueci-me da password"; chega um email com um link para criar uma password nova.
- Mudar password: Definições > Mudar password.
- Sair: botão "Sair" no topo.
- Usar no telemóvel e no PC: entrar com a mesma conta nos dois; os dados são os mesmos.

## Instalar como app
- iPhone: abrir o site no Safari > Partilhar > "Adicionar ao ecrã principal".
- Android: abrir no Chrome > menu ⋮ > "Adicionar ao ecrã principal" ou "Instalar app".
- PC (Chrome/Edge): ícone "Instalar" na barra de endereço.
Depois de instalada funciona sem internet.

## Separadores (barra em baixo)
Faturas · Calendário · Despesas · Clientes · Resumo · Definições. O botão redondo dourado "+" (canto inferior direito) cria um item novo no separador onde estás (fatura, despesa ou cliente). O ícone de balão de conversa no topo abre a Ajuda (este assistente e o envio de bugs/sugestões).

## Faturas
- Lista com o total "Por receber", número de faturas e quantas estão em atraso. Filtros: empresa e "Todas / Não pagas / Pagas". As faturas aparecem agrupadas por empresa, com o estado PAGA, NÃO PAGA ou ATRASADA.
- Criar: botão "+" no separador Faturas. Campos: Cliente/Empresa, Número, Data, Início e Fim do trabalho (o calendário pinta os dias entre eles), Prazo de pagamento (terça-feira da semana seguinte, 7, 14, 30, 45, 60 dias ou outro nº de dias) — mostra "Vence a" com a data calculada.
- Linhas: descrição, quantidade, preço e moeda (EUR ou GBP) por linha; "+ Linha" para acrescentar.
- Linhas predefinidas: "💾 Guardar estas linhas como predefinidas" guarda as linhas atuais com um nome; podem ficar ligadas a um cliente e entram sozinhas em cada fatura nova desse cliente (só mudas o valor). "📋 Usar linhas predefinidas…" para as pôr à mão. Gerir em Definições > Linhas predefinidas.
- IVA: "Sem IVA" ou "Com IVA" com a taxa em %. A taxa por defeito muda-se em Definições.
- Faturas com libras: opção "Mostrar total convertido £ → € (câmbio de hoje)" e "Valor a pagar no PDF": só o total convertido em € ou os 2 valores (€ + £). O câmbio é indicativo.
- Conta bancária para receber: escolhe qual das tuas contas aparece no PDF.
- Notas: texto livre que aparece no PDF.
- Guardar; Marcar PAGA ✓ / Marcar NÃO paga; Apagar fatura.
- PDF: "⬇ Descarregar PDF".
- Enviar: "✉ Enviar por email" abre a partilha do telemóvel com o PDF e o texto prontos (escolher Mail e destinatários). No PC: descarregar o PDF e usar "✉ Abrir Mail só com texto" (já leva os destinatários do cliente).
- Despesas na fatura: "+ Juntar despesas por faturar deste cliente" acrescenta as despesas cobráveis como linhas. Com despesas ligadas aparece "⬇ Recibos das despesas (PDF)" para mandar a prova ao cliente.
- Prazo automático: o prazo vem das Definições (prazo por defeito e regras pelo número da fatura, ex.: número com "PD" → terça-feira seguinte). Pode sempre ser mudado na fatura.

## Calendário
Mostra o mês com as faturas: paga (verde), a vencer (amarelo), em atraso (vermelho) e dia de pagamento previsto (tracejado). Mostra também a semana do ano e o total por receber este mês. Setas ‹ › para mudar de mês. Os dias entre o início e o fim do trabalho de uma fatura ficam pintados.

## Despesas
- Topo: "Por receber dos clientes" (despesas que um cliente te tem de pagar).
- Filtros: empresa e "Por receber / Pagas / Minhas (não cobrar) / Todas".
- Nova despesa: "+". "📷 Tirar foto ao recibo" ou "🖼 Escolher da galeria / ficheiro" (aceita imagens e PDF; várias fotos por despesa). Campos: Descrição, Valor, Moeda, Data, Categoria (Combustível, Refeições, Alojamento, Viagem/transporte, Peças/material, Ferramentas, Portagens/estacionamento, Outro), Cliente a quem cobrar, "O cliente tem de me pagar isto" (fica POR RECEBER), Notas.
- Estados: POR RECEBER, NA FATURA, PAGA, MINHA.
- Marcar PAGA sem fatura: botão "Marcar PAGA ✓" na despesa.
- Faturar despesas: com um cliente escolhido no filtro e "Por receber", aparece "🧾 Criar fatura com N despesas por faturar".
- PDF de fotos de UMA despesa: abrir a despesa e tocar em "⬇ Fotos desta despesa (PDF)".
- PDF de fotos de VÁRIAS despesas, num só ficheiro: 1) separador Despesas; 2) tocar no botão "☑ Escolher fotos para PDF" (aparece por baixo dos filtros); 3) tocar em cada despesa que se quer (ou "Todas"); 4) tocar em "⬇ PDF (n)" na barra de baixo. O PDF tem uma página de resumo e depois uma página por foto. "Cancelar" sai da seleção.
- As fotos ficam primeiro no aparelho e são enviadas quando houver internet. Máximo 10 MB por ficheiro e 300 ficheiros por conta.
- Desligar despesas nas faturas: Definições > Despesas > "Juntar despesas às faturas".

## Clientes
Criar com "+". Campos: Empresa, Nome de contacto, Emails (vários, separados por vírgula), Morada e NIF/VAT (opcionais, aparecem no PDF), Língua dos emails e da fatura (Português, Espanhol ou Inglês — o PDF e o email saem nessa língua), Texto do email para este cliente com variáveis {numero} {total} {vencimento} {empresa} {cliente}. Apagar cliente: as faturas ficam sem cliente associado.

## Resumo
Resumo do ano escolhido: Total faturado, Já pago (com %), A receber no prazo, Em atraso, Faturado este mês e Por empresa. Os valores são somados em €; as faturas em £ são convertidas ao câmbio de hoje. O ano conta pela data de emissão.

## Definições
- Subscrição: estado (período experimental, ativa até, pagamento por confirmar) e botão Subscrever.
- Língua da aplicação.
- Os teus dados (aparecem em todos os PDFs): Nome/Empresa, Morada, NIF, Linha extra no rodapé, Taxa de IVA por defeito.
- Prazos de pagamento: prazo por defeito e regras pelo número da fatura.
- Contas bancárias: nome da conta, titular, banco, IBAN, SWIFT/BIC, linha extra (ex.: sort code). Várias contas; escolhe-se na fatura.
- Linhas predefinidas, Despesas, Mudar password, ligações para Termos e Privacidade.

## Sem internet
A app funciona offline: o que guardares fica no aparelho e é enviado quando a ligação voltar. No topo aparece "Offline" ou "N por sincronizar". Não sair da conta com alterações por sincronizar.

## Preço e pagamento
- 30 dias grátis em cada conta nova, sem dados de pagamento.
- Depois: 6,99 € por mês (ou 5,99 £). Isento de IVA (art. 53.º do CIVA).
- Pagar: Definições > Subscrição > Subscrever, ou a barra dourada no topo. Por agora só por transferência bancária: escolher 1, 3 ou 12 meses, transferir o valor para o IBAN mostrado com a referência PS-… no descritivo e tocar em "Já fiz a transferência". A confirmação é manual (até 2 dias úteis) e entretanto mantém-se o acesso. Cartão/Apple Pay/Google Pay: brevemente.
- A transferência não se renova sozinha.
- Sem subscrição ativa: continua-se a ver, descarregar e apagar tudo; não se pode criar nem alterar.
- Desistência: consumidores têm 14 dias; pedir por email.

## Limites e coisas que a app NÃO faz
- Não é software de faturação certificado pela Autoridade Tributária portuguesa nem por outra administração fiscal. Em Portugal, quem está obrigado a software certificado ou ao Portal das Finanças continua a ter de emitir a fatura oficial lá. Cada utilizador é responsável pelas regras fiscais do seu país.
- Não envia emails diretamente: usa a partilha/Mail do aparelho.
- Não exporta para Excel/CSV, não liga a bancos, não faz contabilidade nem declarações de impostos, não faz assinaturas digitais.
- Só euro e libra.
Se pedirem algo que não existe: dizer que ainda não existe e sugerir enviar a ideia em Ajuda > Enviar mensagem (Sugestão).

## Contactos
Ajuda > Enviar mensagem (Bug, Sugestão, Pergunta) — resposta pela equipa. Email: davide_sobral@outlook.pt. Termos e Privacidade: links no fundo das Definições.
`;

// Nomes reais dos botões e ecrãs em cada língua (gerado a partir da app).
export const GLOSSARY = `
Faturas = ES: Facturas = EN: Invoices
Calendário = ES: Calendario = EN: Calendar
Despesas = ES: Gastos = EN: Expenses
Clientes = ES: Clientes = EN: Clients
Resumo = ES: Resumen = EN: Summary
Definições = ES: Ajustes = EN: Settings
Nova fatura = ES: Nueva factura = EN: New invoice
⬇ Descarregar PDF = ES: ⬇ Descargar PDF = EN: ⬇ Download PDF
✉ Enviar por email = ES: ✉ Enviar por email = EN: ✉ Send by email
✉ Abrir Mail só com texto (destinatários preenchidos) = ES: ✉ Abrir Mail solo con texto (destinatarios rellenados) = EN: ✉ Open Mail with text only (recipients pre-filled)
Marcar PAGA ✓ = ES: Marcar PAGADA ✓ = EN: Mark as PAID ✓
Marcar NÃO paga = ES: Marcar NO pagada = EN: Mark as UNPAID
+ Linha = ES: + Línea = EN: + Line
💾 Guardar estas linhas como predefinidas = ES: 💾 Guardar estas líneas como predefinidas = EN: 💾 Save these lines as a preset
📋 Usar linhas predefinidas… = ES: 📋 Usar líneas predefinidas… = EN: 📋 Use preset lines…
⬇ Recibos das despesas (PDF) = ES: ⬇ Recibos de los gastos (PDF) = EN: ⬇ Expense receipts (PDF)
+ Juntar despesas por faturar deste cliente ({n}) = ES: + Añadir gastos por facturar de este cliente ({n}) = EN: + Add this client's uninvoiced expenses ({n})
📷 Tirar foto ao recibo = ES: 📷 Hacer foto al recibo = EN: 📷 Take photo of receipt
🖼 Escolher da galeria / ficheiro = ES: 🖼 Elegir de la galería / archivo = EN: 🖼 Choose from gallery / file
☑ Escolher fotos para PDF = ES: ☑ Elegir fotos para PDF = EN: ☑ Pick photos for PDF
⬇ Fotos desta despesa (PDF) = ES: ⬇ Fotos de este gasto (PDF) = EN: ⬇ Photos of this expense (PDF)
Marcar PAGA ✓ = ES: Marcar COBRADO ✓ = EN: Mark as PAID ✓
Por receber = ES: Por cobrar = EN: Owed
Pagas = ES: Cobrados = EN: Paid
Minhas (não cobrar) = ES: Míos (no cobrar) = EN: Mine (not charged)
Todas = ES: Todas = EN: All
Subscrever = ES: Suscribirse = EN: Subscribe
Já fiz a transferência = ES: Ya he hecho la transferencia = EN: I have made the transfer
Ajuda, bugs e sugestões = ES: Ayuda, errores y sugerencias = EN: Help, bugs and ideas
Enviar = ES: Enviar = EN: Send
Bug = ES: Error = EN: Bug
Sugestão = ES: Sugerencia = EN: Idea
Pergunta = ES: Pregunta = EN: Question
Prazos de pagamento = ES: Plazos de pago = EN: Payment terms
Contas bancárias = ES: Cuentas bancarias = EN: Bank accounts
Linhas predefinidas = ES: Líneas predefinidas = EN: Preset lines
Mudar password = ES: Cambiar contraseña = EN: Change password
Esqueci-me da password = ES: He olvidado mi contraseña = EN: Forgot password
Criar conta = ES: Crear cuenta = EN: Create account
Entrar = ES: Entrar = EN: Sign in
Lembrar o meu email = ES: Recordar mi email = EN: Remember my email
Língua da aplicação = ES: Idioma de la aplicación = EN: App language
Os teus dados (aparecem em todos os PDFs) = ES: Tus datos (aparecen en todos los PDF) = EN: Your details (shown on every PDF)
Prazo de pagamento = ES: Plazo de pago = EN: Payment terms
Mostrar total convertido £ → € (câmbio de hoje) = ES: Mostrar total convertido £ → € (cambio de hoy) = EN: Show converted total £ → € (today's rate)
Valor a pagar no PDF = ES: Importe a pagar en el PDF = EN: Amount due on the PDF
Conta bancária para receber (aparece no PDF) = ES: Cuenta bancaria para cobrar (aparece en el PDF) = EN: Bank account to receive payment (shown on the PDF)
🧾 Criar fatura com {n} despesas por faturar = ES: 🧾 Crear factura con {n} gastos por facturar = EN: 🧾 Create invoice with {n} uninvoiced expenses
Juntar despesas às faturas = ES: Añadir gastos a las facturas = EN: Add expenses to invoices
Língua dos emails e da fatura = ES: Idioma de los emails y de la factura = EN: Language for emails and the invoice
Texto do email para este cliente (escreves uma vez, fica gravado) = ES: Texto del email para este cliente (lo escribes una vez y queda guardado) = EN: Email text for this client (write it once, it stays saved)
Resumo do ano = ES: Resumen del año = EN: Year summary
`;
