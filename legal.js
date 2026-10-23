// Termos de Utilização e Política de Privacidade da Paidsmith (PT / ES / EN).
// Os dados do responsável vêm de OP.
const OP = {
  name: 'Davide Sobral',
  nif: '251228320',
  address: 'Rua da Ti Augusta, s/n, 2965 Setúbal, Portugal',
  email: 'davide_sobral@outlook.pt',
  vat: {pt: 'isento de IVA ao abrigo do artigo 53.º do Código do IVA',
        es: 'exento de IVA en virtud del artículo 53.º del Código del IVA portugués',
        en: 'exempt from VAT under Article 53 of the Portuguese VAT Code'},
  updated: '2026-10-23'
};
const PRICE = '6,99 € / mês (ou 5,99 £ / mês)';
const PRICE_EN = '€6.99 / month (or £5.99 / month)';

const DOCS = {
terms: {
pt: { title: 'Termos de Utilização', body: `
<h2>1. Quem presta o serviço</h2>
<p>A Paidsmith é prestada por <b>${OP.name}</b>, NIF ${OP.nif}, com sede em ${OP.address} ("nós"). Contacto: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. O que é a Paidsmith</h2>
<p>A Paidsmith é uma aplicação web para criar faturas em PDF, registar despesas com fotografia do recibo, acompanhar prazos de pagamento e guardar os dados dos teus clientes. Funciona no navegador do computador, do Android e do iPhone.</p>
<p><b>Importante (Portugal):</b> a Paidsmith <b>não é um programa de faturação certificado pela Autoridade Tributária</b>. Se estás obrigado a emitir faturas através de software certificado ou do Portal das Finanças, os documentos gerados pela Paidsmith não substituem essas faturas. Noutros países és tu o responsável por cumprir as regras fiscais e de faturação que se aplicam à tua atividade.</p>
<h2>3. A tua conta</h2>
<ul><li>Tens de ter pelo menos 18 anos e usar a Paidsmith para a tua atividade profissional.</li>
<li>Os dados que indicas devem ser verdadeiros. És responsável por manter a tua password segura e por tudo o que é feito com a tua conta.</li>
<li>Uma conta é pessoal. Não podes criar contas em massa nem usar a Paidsmith para fins ilegais, fraude ou envio de spam.</li></ul>
<h2>4. Período experimental, preço e pagamento</h2>
<ul><li>Cada conta nova tem <b>30 dias grátis</b>, sem pedir dados de pagamento.</li>
<li>Depois, o preço é <b>${PRICE}</b>, ${OP.vat.pt}.</li>
<li>O pagamento é feito <b>antecipadamente</b>, por transferência bancária para os dados indicados na aplicação (1, 3 ou 12 meses) ou, quando disponível, por cartão. O pagamento por transferência <b>não se renova sozinho</b>.</li>
<li>Depois de comunicares a transferência, tens 7 dias de acesso enquanto a confirmamos. Se a transferência não chegar, o acesso volta ao estado anterior.</li>
<li>Se a subscrição terminar, continuas a poder <b>ver, descarregar e apagar</b> os teus dados. Só deixas de poder criar ou alterar faturas, despesas e clientes.</li>
<li>Podemos alterar o preço com pelo menos 30 dias de aviso. A alteração não afeta períodos já pagos.</li></ul>
<h2>5. Direito de livre resolução</h2>
<p>Se fores consumidor, tens 14 dias para desistir de um pagamento. Como o serviço começa logo, ao pagares pedes expressamente que comece de imediato; se desistires dentro dos 14 dias, devolvemos o valor proporcional aos dias que faltam. Para desistir, escreve para ${OP.email}.</p>
<h2>6. Os teus dados e conteúdos</h2>
<ul><li>Tudo o que introduzes (faturas, clientes, despesas, fotografias) é teu. Não o usamos para outros fins além de prestar o serviço.</li>
<li>Podes descarregar as tuas faturas e recibos em PDF a qualquer momento e pedir a eliminação da conta.</li>
<li>Em relação aos dados pessoais dos <b>teus clientes</b>, tu és o responsável pelo tratamento e nós agimos como <b>subcontratante</b> (artigo 28.º do RGPD): tratamos esses dados só para te prestar o serviço, segundo as tuas instruções, com as medidas de segurança e os subcontratantes descritos na Política de Privacidade, e apagamo-los quando eliminares a conta.</li></ul>
<h2>7. Disponibilidade e responsabilidade</h2>
<ul><li>Fazemos o possível para manter a Paidsmith disponível e segura, mas não garantimos funcionamento sem interrupções nem sem erros.</li>
<li>Os câmbios mostrados são indicativos. És tu quem confirma valores, impostos e dados antes de enviar uma fatura.</li>
<li>Dentro do que a lei permite, a nossa responsabilidade por danos indiretos (por exemplo, lucros perdidos) fica excluída, e a responsabilidade total fica limitada ao valor que pagaste nos 12 meses anteriores. Nada disto limita os direitos que a lei te dá como consumidor.</li></ul>
<h2>8. Fim do serviço</h2>
<p>Podes deixar de usar a Paidsmith quando quiseres. Podemos suspender contas que violem estes termos. Se decidirmos encerrar o serviço, avisamos com pelo menos 60 dias para descarregares os teus dados.</p>
<h2>9. Alterações</h2>
<p>Podemos atualizar estes termos. Alterações importantes são avisadas na aplicação ou por email antes de entrarem em vigor.</p>
<h2>10. Lei aplicável e litígios</h2>
<p>Aplica-se a lei portuguesa. Se fores consumidor, podes recorrer a uma entidade de resolução alternativa de litígios de consumo (lista em <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener">consumidor.gov.pt</a>) e ao <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">Livro de Reclamações Eletrónico</a>, sem prejuízo dos tribunais competentes.</p>` },
es: { title: 'Términos de Uso', body: `
<h2>1. Quién presta el servicio</h2>
<p>Paidsmith lo presta <b>${OP.name}</b>, NIF ${OP.nif}, con domicilio en ${OP.address} ("nosotros"). Contacto: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Qué es Paidsmith</h2>
<p>Paidsmith es una aplicación web para crear facturas en PDF, registrar gastos con foto del recibo, seguir los plazos de pago y guardar los datos de tus clientes. Funciona en el navegador del ordenador, de Android y del iPhone.</p>
<p><b>Importante:</b> Paidsmith <b>no es un programa de facturación homologado o certificado</b> por ninguna administración tributaria (por ejemplo, no es un sistema Verifactu ni un software certificado por la AT portuguesa). Eres responsable de cumplir las normas fiscales y de facturación que se apliquen a tu actividad en tu país.</p>
<h2>3. Tu cuenta</h2>
<ul><li>Debes tener al menos 18 años y usar Paidsmith para tu actividad profesional.</li>
<li>Los datos que indiques deben ser veraces. Eres responsable de mantener segura tu contraseña y de todo lo que se haga con tu cuenta.</li>
<li>La cuenta es personal. No puedes crear cuentas en masa ni usar Paidsmith para fines ilegales, fraude o spam.</li></ul>
<h2>4. Periodo de prueba, precio y pago</h2>
<ul><li>Cada cuenta nueva tiene <b>30 días gratis</b>, sin pedir datos de pago.</li>
<li>Después, el precio es <b>${PRICE}</b>, ${OP.vat.es}.</li>
<li>El pago es <b>por adelantado</b>, por transferencia bancaria a los datos indicados en la aplicación (1, 3 o 12 meses) o, cuando esté disponible, con tarjeta. El pago por transferencia <b>no se renueva automáticamente</b>.</li>
<li>Tras comunicar la transferencia, tienes 7 días de acceso mientras la confirmamos. Si la transferencia no llega, el acceso vuelve al estado anterior.</li>
<li>Si la suscripción termina, puedes seguir <b>viendo, descargando y borrando</b> tus datos. Solo dejas de poder crear o modificar facturas, gastos y clientes.</li>
<li>Podemos cambiar el precio con al menos 30 días de aviso. El cambio no afecta a periodos ya pagados.</li></ul>
<h2>5. Derecho de desistimiento</h2>
<p>Si eres consumidor, tienes 14 días para desistir de un pago. Como el servicio empieza de inmediato, al pagar solicitas expresamente que empiece ya; si desistes dentro de los 14 días, te devolvemos la parte proporcional de los días que falten. Para desistir, escribe a ${OP.email}.</p>
<h2>6. Tus datos y contenidos</h2>
<ul><li>Todo lo que introduces (facturas, clientes, gastos, fotos) es tuyo. No lo usamos para nada más que prestar el servicio.</li>
<li>Puedes descargar tus facturas y recibos en PDF en cualquier momento y pedir que se elimine la cuenta.</li>
<li>Respecto a los datos personales de <b>tus clientes</b>, tú eres el responsable del tratamiento y nosotros actuamos como <b>encargado del tratamiento</b> (artículo 28 del RGPD): solo los tratamos para prestarte el servicio, según tus instrucciones, con las medidas de seguridad y los subencargados descritos en la Política de Privacidad, y los borramos cuando eliminas la cuenta.</li></ul>
<h2>7. Disponibilidad y responsabilidad</h2>
<ul><li>Hacemos lo posible para que Paidsmith esté disponible y sea segura, pero no garantizamos un funcionamiento sin interrupciones ni errores.</li>
<li>Los tipos de cambio son orientativos. Eres tú quien confirma importes, impuestos y datos antes de enviar una factura.</li>
<li>En la medida en que la ley lo permita, se excluye nuestra responsabilidad por daños indirectos (por ejemplo, lucro cesante) y la responsabilidad total se limita a lo que hayas pagado en los 12 meses anteriores. Nada de esto limita tus derechos como consumidor.</li></ul>
<h2>8. Fin del servicio</h2>
<p>Puedes dejar de usar Paidsmith cuando quieras. Podemos suspender cuentas que incumplan estos términos. Si decidimos cerrar el servicio, avisaremos con al menos 60 días para que descargues tus datos.</p>
<h2>9. Cambios</h2>
<p>Podemos actualizar estos términos. Los cambios importantes se avisan en la aplicación o por email antes de entrar en vigor.</p>
<h2>10. Ley aplicable y litigios</h2>
<p>Se aplica la ley portuguesa, sin perjuicio de las normas imperativas de protección del consumidor de tu país de residencia. Si eres consumidor, puedes acudir a la plataforma europea de resolución de litigios y a los organismos de consumo de tu país.</p>` },
en: { title: 'Terms of Use', body: `
<h2>1. Who provides the service</h2>
<p>Paidsmith is provided by <b>${OP.name}</b>, tax ID ${OP.nif}, of ${OP.address} ("we"). Contact: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. What Paidsmith is</h2>
<p>Paidsmith is a web app to create PDF invoices, record expenses with a photo of the receipt, track payment due dates and keep your clients' details. It runs in the browser on computers, Android and iPhone.</p>
<p><b>Important:</b> Paidsmith is <b>not invoicing software certified by any tax authority</b> (for example, it is not certified by the Portuguese Tax Authority and is not an HMRC Making Tax Digital product). You are responsible for complying with the tax and invoicing rules that apply to your business in your country.</p>
<h2>3. Your account</h2>
<ul><li>You must be at least 18 and use Paidsmith for your professional activity.</li>
<li>The details you provide must be accurate. You are responsible for keeping your password safe and for everything done with your account.</li>
<li>An account is personal. You may not create accounts in bulk or use Paidsmith for illegal purposes, fraud or spam.</li></ul>
<h2>4. Free trial, price and payment</h2>
<ul><li>Every new account gets a <b>30-day free trial</b>, with no payment details required.</li>
<li>After that the price is <b>${PRICE_EN}</b>, ${OP.vat.en}.</li>
<li>Payment is made <b>in advance</b>, by bank transfer to the details shown in the app (1, 3 or 12 months) or, when available, by card. Payment by transfer <b>does not renew automatically</b>.</li>
<li>After you report a transfer, you keep access for 7 days while we confirm it. If the transfer does not arrive, access returns to its previous state.</li>
<li>If your subscription ends you can still <b>view, download and delete</b> your data; you just can no longer create or edit invoices, expenses and clients.</li>
<li>We may change the price with at least 30 days' notice. Changes do not affect periods already paid.</li></ul>
<h2>5. Right of withdrawal</h2>
<p>If you are a consumer, you have 14 days to withdraw from a payment. Because the service starts straight away, by paying you expressly ask for it to start immediately; if you withdraw within the 14 days we refund the part of the period not yet used. To withdraw, email ${OP.email}.</p>
<h2>6. Your data and content</h2>
<ul><li>Everything you enter (invoices, clients, expenses, photos) belongs to you. We only use it to provide the service.</li>
<li>You can download your invoices and receipts as PDF at any time and ask for your account to be deleted.</li>
<li>For the personal data of <b>your clients</b>, you are the controller and we act as your <b>processor</b> (Article 28 GDPR): we process that data only to provide the service, on your instructions, with the security measures and sub-processors listed in the Privacy Policy, and we delete it when you delete your account.</li></ul>
<h2>7. Availability and liability</h2>
<ul><li>We do our best to keep Paidsmith available and secure, but we do not guarantee uninterrupted or error-free operation.</li>
<li>Exchange rates shown are indicative. You are responsible for checking amounts, taxes and details before sending an invoice.</li>
<li>To the extent permitted by law, we are not liable for indirect losses (such as lost profits), and our total liability is limited to what you paid in the previous 12 months. Nothing here limits your statutory rights as a consumer.</li></ul>
<h2>8. Ending the service</h2>
<p>You can stop using Paidsmith at any time. We may suspend accounts that breach these terms. If we decide to close the service, we will give at least 60 days' notice so you can download your data.</p>
<h2>9. Changes</h2>
<p>We may update these terms. Significant changes are announced in the app or by email before they take effect.</p>
<h2>10. Governing law and disputes</h2>
<p>Portuguese law applies, without prejudice to the mandatory consumer protection rules of your country of residence. Consumers may also use the consumer dispute bodies available in their country.</p>` }
},
privacy: {
pt: { title: 'Política de Privacidade', body: `
<h2>1. Responsável</h2>
<p><b>${OP.name}</b>, NIF ${OP.nif}, ${OP.address}. Para qualquer questão sobre os teus dados: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Que dados tratamos</h2>
<ul><li><b>Conta:</b> email e password (guardada só em forma cifrada, que nem nós conseguimos ler).</li>
<li><b>O que introduzes:</b> dados do teu negócio, dos teus clientes, faturas, contas bancárias, despesas e fotografias de recibos.</li>
<li><b>Pagamentos da subscrição:</b> período, valor, moeda, referência e estado. Não guardamos dados de cartões.</li>
<li><b>No teu dispositivo:</b> uma cópia dos teus dados e as fotografias ainda por enviar ficam guardadas localmente no navegador, para a aplicação funcionar sem internet. Não usamos cookies de publicidade nem de estatísticas.</li></ul>
<h2>3. Para quê e com que fundamento</h2>
<ul><li>Prestar o serviço e gerir a tua conta e subscrição: execução do contrato (art. 6.º, n.º 1, al. b) do RGPD).</li>
<li>Cumprir obrigações legais, por exemplo fiscais: obrigação legal (al. c).</li>
<li>Proteger o serviço contra abusos e contas falsas: interesse legítimo (al. f).</li></ul>
<h2>4. Quem nos ajuda a prestar o serviço</h2>
<ul><li><b>Supabase</b>: base de dados, autenticação e ficheiros, alojados em Frankfurt (UE).</li>
<li><b>Brevo</b> (França): envio dos emails de confirmação e de recuperação de password.</li>
<li><b>GitHub Pages</b> (EUA): alojamento das páginas da aplicação; regista dados técnicos de acesso, como o endereço IP.</li>
<li><b>jsDelivr</b>: entrega das bibliotecas usadas pela aplicação.</li>
<li><b>Cloudflare Turnstile</b>: proteção contra robôs no registo e na entrada.</li>
<li><b>OpenRouter</b> (EUA) e o fornecedor do modelo de IA: só quando usas o assistente de Ajuda. O texto que escreves no assistente é-lhes enviado e pode ser guardado ou usado por eles para melhorar os modelos. Não escrevas dados pessoais, de clientes ou bancários no assistente.</li>
<li><b>frankfurter.dev e open.er-api.com</b>: taxas de câmbio, sem envio de dados pessoais.</li></ul>
<p>Quando um destes serviços trata dados fora do Espaço Económico Europeu, a transferência é feita com as garantias do RGPD (Quadro de Privacidade de Dados UE-EUA ou cláusulas contratuais-tipo). Não vendemos os teus dados.</p>
<h2>5. Durante quanto tempo</h2>
<p>Enquanto a conta existir. Depois de pedires a eliminação, apagamos os dados no prazo de 30 dias, exceto os registos de pagamentos que a lei fiscal nos obriga a guardar (até 10 anos).</p>
<h2>6. Os teus direitos</h2>
<p>Tens direito de acesso, retificação, apagamento, limitação, portabilidade e oposição. Escreve para ${OP.email}. Se considerares que os teus direitos não foram respeitados, podes reclamar à <a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a> ou à autoridade de proteção de dados do teu país.</p>
<h2>7. Segurança</h2>
<p>As ligações são cifradas (HTTPS), cada utilizador só tem acesso aos seus próprios dados (regras aplicadas no servidor) e as passwords são guardadas cifradas.</p>
<h2>8. Menores</h2><p>A Paidsmith não se destina a menores de 18 anos.</p>
<h2>9. Alterações</h2><p>Se alterarmos esta política de forma importante, avisamos na aplicação ou por email.</p>` },
es: { title: 'Política de Privacidad', body: `
<h2>1. Responsable</h2>
<p><b>${OP.name}</b>, NIF ${OP.nif}, ${OP.address}. Para cualquier consulta sobre tus datos: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Qué datos tratamos</h2>
<ul><li><b>Cuenta:</b> email y contraseña (guardada solo de forma cifrada, ni nosotros podemos leerla).</li>
<li><b>Lo que introduces:</b> datos de tu negocio, de tus clientes, facturas, cuentas bancarias, gastos y fotos de recibos.</li>
<li><b>Pagos de la suscripción:</b> periodo, importe, moneda, referencia y estado. No guardamos datos de tarjetas.</li>
<li><b>En tu dispositivo:</b> una copia de tus datos y las fotos pendientes de subir se guardan localmente en el navegador para que la aplicación funcione sin internet. No usamos cookies de publicidad ni de estadísticas.</li></ul>
<h2>3. Para qué y con qué base legal</h2>
<ul><li>Prestar el servicio y gestionar tu cuenta y suscripción: ejecución del contrato (art. 6.1.b RGPD).</li>
<li>Cumplir obligaciones legales, por ejemplo fiscales: obligación legal (art. 6.1.c).</li>
<li>Proteger el servicio frente a abusos y cuentas falsas: interés legítimo (art. 6.1.f).</li></ul>
<h2>4. Quién nos ayuda a prestar el servicio</h2>
<ul><li><b>Supabase</b>: base de datos, autenticación y archivos, alojados en Fráncfort (UE).</li>
<li><b>Brevo</b> (Francia): envío de los emails de confirmación y recuperación de contraseña.</li>
<li><b>GitHub Pages</b> (EE. UU.): alojamiento de las páginas de la aplicación; registra datos técnicos de acceso, como la dirección IP.</li>
<li><b>jsDelivr</b>: entrega de las bibliotecas que usa la aplicación.</li>
<li><b>Cloudflare Turnstile</b>: protección contra robots en el registro y el acceso.</li>
<li><b>OpenRouter</b> (EE. UU.) y el proveedor del modelo de IA: solo cuando usas el asistente de Ayuda. El texto que escribes en el asistente se les envía y pueden guardarlo o usarlo para mejorar sus modelos. No escribas datos personales, de clientes ni bancarios en el asistente.</li>
<li><b>frankfurter.dev y open.er-api.com</b>: tipos de cambio, sin envío de datos personales.</li></ul>
<p>Cuando alguno de estos servicios trata datos fuera del Espacio Económico Europeo, se hace con las garantías del RGPD (Marco de Privacidad de Datos UE-EE. UU. o cláusulas contractuales tipo). No vendemos tus datos.</p>
<h2>5. Durante cuánto tiempo</h2>
<p>Mientras exista la cuenta. Tras pedir su eliminación, borramos los datos en un plazo de 30 días, salvo los registros de pagos que la ley fiscal nos obliga a conservar (hasta 10 años).</p>
<h2>6. Tus derechos</h2>
<p>Tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición. Escribe a ${OP.email}. Si crees que no se han respetado tus derechos, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">AEPD</a> o la autoridad de protección de datos de tu país.</p>
<h2>7. Seguridad</h2>
<p>Las conexiones están cifradas (HTTPS), cada usuario solo accede a sus propios datos (reglas aplicadas en el servidor) y las contraseñas se guardan cifradas.</p>
<h2>8. Menores</h2><p>Paidsmith no está dirigida a menores de 18 años.</p>
<h2>9. Cambios</h2><p>Si cambiamos esta política de forma importante, lo avisaremos en la aplicación o por email.</p>` },
en: { title: 'Privacy Policy', body: `
<h2>1. Controller</h2>
<p><b>${OP.name}</b>, tax ID ${OP.nif}, ${OP.address}. For any question about your data: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. What data we process</h2>
<ul><li><b>Account:</b> email and password (stored only in hashed form, which not even we can read).</li>
<li><b>What you enter:</b> your business details, your clients' details, invoices, bank accounts, expenses and receipt photos.</li>
<li><b>Subscription payments:</b> period, amount, currency, reference and status. We do not store card details.</li>
<li><b>On your device:</b> a copy of your data and photos waiting to upload are stored locally in the browser so the app works offline. We do not use advertising or analytics cookies.</li></ul>
<h2>3. Why, and on what legal basis</h2>
<ul><li>To provide the service and manage your account and subscription: performance of a contract (Art. 6(1)(b) GDPR).</li>
<li>To meet legal obligations, such as tax rules: legal obligation (Art. 6(1)(c)).</li>
<li>To protect the service against abuse and fake accounts: legitimate interest (Art. 6(1)(f)).</li></ul>
<h2>4. Who helps us provide the service</h2>
<ul><li><b>Supabase</b>: database, authentication and file storage, hosted in Frankfurt (EU).</li>
<li><b>Brevo</b> (France): sending account confirmation and password reset emails.</li>
<li><b>GitHub Pages</b> (USA): hosting of the app pages; logs technical access data such as IP address.</li>
<li><b>jsDelivr</b>: delivery of the libraries used by the app.</li>
<li><b>Cloudflare Turnstile</b>: bot protection on sign-up and sign-in.</li>
<li><b>OpenRouter</b> (USA) and the AI model provider: only when you use the Help assistant. What you type into the assistant is sent to them and may be stored or used to improve their models. Do not type personal, client or bank details into the assistant.</li>
<li><b>frankfurter.dev and open.er-api.com</b>: exchange rates; no personal data is sent.</li></ul>
<p>Where any of these services processes data outside the European Economic Area, this is done with GDPR safeguards (EU-US Data Privacy Framework or standard contractual clauses). We do not sell your data.</p>
<h2>5. How long</h2>
<p>For as long as your account exists. After you ask for deletion, we delete your data within 30 days, except payment records that tax law requires us to keep (up to 10 years).</p>
<h2>6. Your rights</h2>
<p>You have the right of access, rectification, erasure, restriction, portability and objection. Email ${OP.email}. If you believe your rights have not been respected, you can complain to the Portuguese authority (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>), the UK <a href="https://ico.org.uk" target="_blank" rel="noopener">ICO</a>, or the data protection authority in your country.</p>
<h2>7. Security</h2>
<p>Connections are encrypted (HTTPS), each user can only access their own data (rules enforced on the server) and passwords are stored hashed.</p>
<h2>8. Children</h2><p>Paidsmith is not intended for anyone under 18.</p>
<h2>9. Changes</h2><p>If we change this policy in a significant way, we will tell you in the app or by email.</p>` }
}};
