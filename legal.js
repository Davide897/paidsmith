// Termos de Utilização e Política de Privacidade da Paidsmith (9 línguas; PT / ES / EN escritos à mão, as outras traduzidas do EN).
// Os dados do responsável vêm de OP.
const OP = {
  name: 'Davide Sobral',
  nif: '251228320',
  address: 'Rua da Ti Augusta, s/n, 2965 Setúbal, Portugal',
  email: 'davide_sobral@outlook.pt',
  vat: {pt: 'isento de IVA ao abrigo do artigo 53.º do Código do IVA',
        es: 'exento de IVA en virtud del artículo 53.º del Código del IVA portugués',
        en: 'exempt from VAT under Article 53 of the Portuguese VAT Code'},
  updated: '2026-10-24'
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
<p>Se fores consumidor, tens 14 dias para desistir de um pagamento. Como o serviço começa logo, ao pagares pedes expressamente que comece de imediato; se desistires dentro dos 14 dias, devolvemos o valor proporcional aos dias que faltam. A aplicação pede-te esta confirmação numa caixa própria antes de pagares. Para desistir, escreve para ${OP.email}.</p>
<h2>6. Os teus dados e conteúdos</h2>
<ul><li>Tudo o que introduzes (faturas, clientes, despesas, fotografias) é teu. Não o usamos para outros fins além de prestar o serviço.</li>
<li>Podes descarregar as tuas faturas e recibos em PDF e exportar todos os teus dados num ficheiro a qualquer momento (Definições → Os meus dados).</li>
<li>Podes apagar a conta na própria aplicação. Os teus dados e ficheiros são apagados de imediato, exceto o indicado na Política de Privacidade. Antes de apagares, guarda as faturas que a lei do teu país te obriga a conservar.</li>
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
<p>Si eres consumidor, tienes 14 días para desistir de un pago. Como el servicio empieza de inmediato, al pagar solicitas expresamente que empiece ya; si desistes dentro de los 14 días, te devolvemos la parte proporcional de los días que falten. La aplicación te pide esta confirmación en una casilla propia antes de pagar. Para desistir, escribe a ${OP.email}.</p>
<h2>6. Tus datos y contenidos</h2>
<ul><li>Todo lo que introduces (facturas, clientes, gastos, fotos) es tuyo. No lo usamos para nada más que prestar el servicio.</li>
<li>Puedes descargar tus facturas y recibos en PDF y exportar todos tus datos en un archivo en cualquier momento (Ajustes → Mis datos).</li>
<li>Puedes borrar la cuenta en la propia aplicación. Tus datos y archivos se borran de inmediato, salvo lo indicado en la Política de Privacidad. Antes de borrarla, guarda las facturas que la ley de tu país te obliga a conservar.</li>
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
<p>If you are a consumer, you have 14 days to withdraw from a payment. Because the service starts straight away, by paying you expressly ask for it to start immediately; if you withdraw within the 14 days we refund the part of the period not yet used. The app asks you to confirm this in a separate tick box before you pay. To withdraw, email ${OP.email}.</p>
<h2>6. Your data and content</h2>
<ul><li>Everything you enter (invoices, clients, expenses, photos) belongs to you. We only use it to provide the service.</li>
<li>You can download your invoices and receipts as PDF and export all your data to a file at any time (Settings → My data).</li>
<li>You can delete your account in the app. Your data and files are deleted straight away, except as described in the Privacy Policy. Before deleting, keep any invoices the law of your country requires you to retain.</li>
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
<li><b>Mensagens que nos envias:</b> relatos de erros, sugestões e perguntas (com o teu email), e quantas perguntas fazes por dia ao assistente de IA.</li>
<li><b>No teu dispositivo:</b> uma cópia dos teus dados e as fotografias ainda por enviar ficam guardadas localmente no navegador, para a aplicação funcionar sem internet. Essa cópia é apagada do aparelho quando sais da conta. Não usamos cookies de publicidade nem de estatísticas.</li></ul>
<h2>3. Para quê e com que fundamento</h2>
<ul><li>Prestar o serviço e gerir a tua conta e subscrição: execução do contrato (art. 6.º, n.º 1, al. b) do RGPD).</li>
<li>Cumprir obrigações legais, por exemplo fiscais: obrigação legal (al. c).</li>
<li>Proteger o serviço contra abusos e contas falsas: interesse legítimo (al. f).</li></ul>
<h2>4. Quem nos ajuda a prestar o serviço</h2>
<ul><li><b>Supabase</b>: base de dados, autenticação e ficheiros, alojados em Frankfurt (UE).</li>
<li><b>Brevo</b> (França): envio dos emails de confirmação e de recuperação de password, e dos avisos internos ao responsável sobre pagamentos por confirmar e mensagens de suporte (incluem o teu email e o texto da mensagem).</li>
<li><b>Revolut Bank UAB</b> (Lituânia, UE): banco onde recebemos os pagamentos da subscrição. Quando pagas por transferência ou pelo link revolut.me, a Revolut recebe o teu nome, a conta de onde pagas, o valor e a referência. Se pagares com cartão, Apple Pay ou Google Pay pelo link, esses dados são tratados pela Revolut segundo a política de privacidade dela; nós não vemos os dados do cartão.</li>
<li><b>GitHub Pages</b> (EUA): alojamento das páginas da aplicação; regista dados técnicos de acesso, como o endereço IP.</li>
<li><b>jsDelivr</b>: entrega das bibliotecas usadas pela aplicação.</li>
<li><b>Cloudflare Turnstile</b>: proteção contra robôs no registo e na entrada.</li>
<li><b>OpenRouter</b> (EUA) e o fornecedor do modelo de IA: só quando usas o assistente de Ajuda. O texto que escreves no assistente é-lhes enviado e pode ser guardado ou usado por eles para melhorar os modelos. Não escrevas dados pessoais, de clientes ou bancários no assistente.</li>
<li><b>frankfurter.dev e open.er-api.com</b>: taxas de câmbio, sem envio de dados pessoais.</li></ul>
<p>Quando um destes serviços trata dados fora do Espaço Económico Europeu, a transferência é feita com as garantias do RGPD (Quadro de Privacidade de Dados UE-EUA ou cláusulas contratuais-tipo). Não vendemos os teus dados.</p>
<h2>5. Durante quanto tempo</h2>
<p>Enquanto a conta existir. Quando apagas a conta na aplicação, os teus dados e ficheiros são apagados de imediato; pedidos feitos por email são tratados no prazo de 30 dias. Ficam apenas os registos dos pagamentos confirmados (data, valor, moeda, referência e email), que a lei fiscal nos obriga a guardar até 10 anos.</p>
<h2>6. Os teus direitos</h2>
<p>Tens direito de acesso, retificação, apagamento, limitação, portabilidade e oposição. Podes exportar os teus dados e apagar a conta diretamente na aplicação (Definições → Os meus dados) ou escrever para ${OP.email}. Se considerares que os teus direitos não foram respeitados, podes reclamar à <a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a> ou à autoridade de proteção de dados do teu país.</p>
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
<li><b>Mensajes que nos envías:</b> avisos de errores, sugerencias y preguntas (con tu email), y cuántas preguntas haces al día al asistente de IA.</li>
<li><b>En tu dispositivo:</b> una copia de tus datos y las fotos pendientes de subir se guardan localmente en el navegador para que la aplicación funcione sin internet. Esa copia se borra del dispositivo cuando cierras sesión. No usamos cookies de publicidad ni de estadísticas.</li></ul>
<h2>3. Para qué y con qué base legal</h2>
<ul><li>Prestar el servicio y gestionar tu cuenta y suscripción: ejecución del contrato (art. 6.1.b RGPD).</li>
<li>Cumplir obligaciones legales, por ejemplo fiscales: obligación legal (art. 6.1.c).</li>
<li>Proteger el servicio frente a abusos y cuentas falsas: interés legítimo (art. 6.1.f).</li></ul>
<h2>4. Quién nos ayuda a prestar el servicio</h2>
<ul><li><b>Supabase</b>: base de datos, autenticación y archivos, alojados en Fráncfort (UE).</li>
<li><b>Brevo</b> (Francia): envío de los emails de confirmación y recuperación de contraseña, y de los avisos internos al responsable sobre pagos por confirmar y mensajes de soporte (incluyen tu email y el texto del mensaje).</li>
<li><b>Revolut Bank UAB</b> (Lituania, UE): banco donde recibimos los pagos de la suscripción. Cuando pagas por transferencia o con el enlace revolut.me, Revolut recibe tu nombre, la cuenta desde la que pagas, el importe y la referencia. Si pagas con tarjeta, Apple Pay o Google Pay desde el enlace, esos datos los trata Revolut según su propia política de privacidad; nosotros no vemos los datos de la tarjeta.</li>
<li><b>GitHub Pages</b> (EE. UU.): alojamiento de las páginas de la aplicación; registra datos técnicos de acceso, como la dirección IP.</li>
<li><b>jsDelivr</b>: entrega de las bibliotecas que usa la aplicación.</li>
<li><b>Cloudflare Turnstile</b>: protección contra robots en el registro y el acceso.</li>
<li><b>OpenRouter</b> (EE. UU.) y el proveedor del modelo de IA: solo cuando usas el asistente de Ayuda. El texto que escribes en el asistente se les envía y pueden guardarlo o usarlo para mejorar sus modelos. No escribas datos personales, de clientes ni bancarios en el asistente.</li>
<li><b>frankfurter.dev y open.er-api.com</b>: tipos de cambio, sin envío de datos personales.</li></ul>
<p>Cuando alguno de estos servicios trata datos fuera del Espacio Económico Europeo, se hace con las garantías del RGPD (Marco de Privacidad de Datos UE-EE. UU. o cláusulas contractuales tipo). No vendemos tus datos.</p>
<h2>5. Durante cuánto tiempo</h2>
<p>Mientras exista la cuenta. Cuando borras la cuenta en la aplicación, tus datos y archivos se borran de inmediato; las solicitudes por email se atienden en un plazo de 30 días. Solo se conservan los registros de los pagos confirmados (fecha, importe, moneda, referencia y email), que la ley fiscal nos obliga a guardar hasta 10 años.</p>
<h2>6. Tus derechos</h2>
<p>Tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición. Puedes exportar tus datos y borrar la cuenta directamente en la aplicación (Ajustes → Mis datos) o escribir a ${OP.email}. Si crees que no se han respetado tus derechos, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">AEPD</a> o la autoridad de protección de datos de tu país.</p>
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
<li><b>Messages you send us:</b> bug reports, suggestions and questions (with your email), and how many questions a day you ask the AI assistant.</li>
<li><b>On your device:</b> a copy of your data and photos waiting to upload are stored locally in the browser so the app works offline. That copy is removed from the device when you sign out. We do not use advertising or analytics cookies.</li></ul>
<h2>3. Why, and on what legal basis</h2>
<ul><li>To provide the service and manage your account and subscription: performance of a contract (Art. 6(1)(b) GDPR).</li>
<li>To meet legal obligations, such as tax rules: legal obligation (Art. 6(1)(c)).</li>
<li>To protect the service against abuse and fake accounts: legitimate interest (Art. 6(1)(f)).</li></ul>
<h2>4. Who helps us provide the service</h2>
<ul><li><b>Supabase</b>: database, authentication and file storage, hosted in Frankfurt (EU).</li>
<li><b>Brevo</b> (France): sending account confirmation and password reset emails, and internal notices to the controller about payments awaiting confirmation and support messages (these include your email and the message text).</li>
<li><b>Revolut Bank UAB</b> (Lithuania, EU): the bank where we receive subscription payments. When you pay by transfer or through the revolut.me link, Revolut receives your name, the account you pay from, the amount and the reference. If you pay by card, Apple Pay or Google Pay through the link, that data is handled by Revolut under its own privacy policy; we never see card details.</li>
<li><b>GitHub Pages</b> (USA): hosting of the app pages; logs technical access data such as IP address.</li>
<li><b>jsDelivr</b>: delivery of the libraries used by the app.</li>
<li><b>Cloudflare Turnstile</b>: bot protection on sign-up and sign-in.</li>
<li><b>OpenRouter</b> (USA) and the AI model provider: only when you use the Help assistant. What you type into the assistant is sent to them and may be stored or used to improve their models. Do not type personal, client or bank details into the assistant.</li>
<li><b>frankfurter.dev and open.er-api.com</b>: exchange rates; no personal data is sent.</li></ul>
<p>Where any of these services processes data outside the European Economic Area, this is done with GDPR safeguards (EU-US Data Privacy Framework or standard contractual clauses). We do not sell your data.</p>
<h2>5. How long</h2>
<p>For as long as your account exists. When you delete your account in the app, your data and files are deleted straight away; requests made by email are handled within 30 days. Only records of confirmed payments (date, amount, currency, reference and email) are kept, because tax law requires us to keep them for up to 10 years.</p>
<h2>6. Your rights</h2>
<p>You have the right of access, rectification, erasure, restriction, portability and objection. You can export your data and delete your account directly in the app (Settings → My data) or email ${OP.email}. If you believe your rights have not been respected, you can complain to the Portuguese authority (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>), the UK <a href="https://ico.org.uk" target="_blank" rel="noopener">ICO</a>, or the data protection authority in your country.</p>
<h2>7. Security</h2>
<p>Connections are encrypted (HTTPS), each user can only access their own data (rules enforced on the server) and passwords are stored hashed.</p>
<h2>8. Children</h2><p>Paidsmith is not intended for anyone under 18.</p>
<h2>9. Changes</h2><p>If we change this policy in a significant way, we will tell you in the app or by email.</p>` }
}};

// ---- FR / DE / IT / RO / TR / PL (traduzidos do EN; o PT faz fé) ----
Object.assign(OP.vat, {"fr": "exonéré de TVA en vertu de l'article 53 du Code de la TVA portugais", "de": "gemäß Artikel 53 des portugiesischen Mehrwertsteuergesetzes von der Mehrwertsteuer befreit", "it": "esente IVA ai sensi dell'articolo 53 del Codice IVA portoghese", "ro": "scutit de TVA în temeiul articolului 53 din Codul TVA portughez", "tr": "Portekiz KDV Kanunu'nun 53. maddesi uyarınca KDV'den muaftır", "pl": "zwolnione z VAT na podstawie art. 53 portugalskiej ustawy o VAT"});
DOCS.terms.fr = { title: "Conditions d'utilisation", body: `
<h2>1. Qui fournit le service</h2>
<p>Paidsmith est fourni par <b>${OP.name}</b>, numéro fiscal ${OP.nif}, domicilié à ${OP.address} (« nous »). Contact : <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Ce qu'est Paidsmith</h2>
<p>Paidsmith est une application web qui permet de créer des factures en PDF, d'enregistrer des dépenses avec une photo du justificatif, de suivre les échéances de paiement et de conserver les coordonnées de vos clients. Elle fonctionne dans le navigateur sur ordinateur, Android et iPhone.</p>
<p><b>Important :</b> Paidsmith <b>n'est pas un logiciel de facturation certifié par une administration fiscale</b> (par exemple, il n'est pas certifié par l'administration fiscale portugaise, n'est pas une plateforme agréée et n'émet pas de factures électroniques structurées au sens de la réforme française de la facturation électronique). Vous êtes responsable du respect des règles fiscales et de facturation applicables à votre activité dans votre pays.</p>
<h2>3. Votre compte</h2>
<ul><li>Vous devez avoir au moins 18 ans et utiliser Paidsmith dans le cadre de votre activité professionnelle.</li>
<li>Les informations que vous fournissez doivent être exactes. Vous êtes responsable de la sécurité de votre mot de passe et de tout ce qui est fait avec votre compte.</li>
<li>Un compte est personnel. Vous ne pouvez pas créer de comptes en masse ni utiliser Paidsmith à des fins illégales, de fraude ou de spam.</li></ul>
<h2>4. Essai gratuit, prix et paiement</h2>
<ul><li>Chaque nouveau compte bénéficie d'un <b>essai gratuit de 30 jours</b>, sans demande de coordonnées de paiement.</li>
<li>Ensuite, le prix est de <b>${PRICE_EN}</b>, ${OP.vat.fr}.</li>
<li>Le paiement s'effectue <b>à l'avance</b>, par virement bancaire vers les coordonnées indiquées dans l'application (1, 3 ou 12 mois) ou, lorsque cette option est disponible, par carte. Le paiement par virement <b>ne se renouvelle pas automatiquement</b>.</li>
<li>Après avoir signalé un virement, vous conservez l'accès pendant 7 jours, le temps que nous le confirmions. Si le virement n'arrive pas, l'accès revient à son état antérieur.</li>
<li>Si votre abonnement prend fin, vous pouvez toujours <b>consulter, télécharger et supprimer</b> vos données ; vous ne pouvez simplement plus créer ni modifier de factures, de dépenses et de clients.</li>
<li>Nous pouvons modifier le prix moyennant un préavis d'au moins 30 jours. Les modifications n'affectent pas les périodes déjà payées.</li></ul>
<h2>5. Droit de rétractation</h2>
<p>Si vous êtes un consommateur, vous disposez de 14 jours pour vous rétracter d'un paiement. Le service commençant immédiatement, en payant vous demandez expressément qu'il débute sans attendre ; si vous vous rétractez dans les 14 jours, nous vous remboursons la partie de la période non encore utilisée. L'application vous demande de le confirmer dans une case à cocher distincte avant le paiement. Pour vous rétracter, écrivez à ${OP.email}.</p>
<h2>6. Vos données et contenus</h2>
<ul><li>Tout ce que vous saisissez (factures, clients, dépenses, photos) vous appartient. Nous l'utilisons uniquement pour fournir le service.</li>
<li>Vous pouvez à tout moment télécharger vos factures et reçus en PDF et exporter toutes vos données dans un fichier (Paramètres → Mes données).</li>
<li>Vous pouvez supprimer votre compte dans l'application. Vos données et fichiers sont supprimés immédiatement, sauf dans les cas décrits dans la Politique de confidentialité. Avant la suppression, conservez les factures que la loi de votre pays vous oblige à garder.</li>
<li>Pour les données personnelles de <b>vos clients</b>, vous êtes le responsable du traitement et nous agissons en tant que <b>sous-traitant</b> (article 28 du RGPD) : nous traitons ces données uniquement pour fournir le service, selon vos instructions, avec les mesures de sécurité et les sous-traitants ultérieurs décrits dans la Politique de confidentialité, et nous les supprimons lorsque vous supprimez votre compte.</li></ul>
<h2>7. Disponibilité et responsabilité</h2>
<ul><li>Nous faisons de notre mieux pour que Paidsmith reste disponible et sécurisé, mais nous ne garantissons pas un fonctionnement ininterrompu ou exempt d'erreurs.</li>
<li>Les taux de change affichés sont indicatifs. Il vous appartient de vérifier les montants, les taxes et les informations avant d'envoyer une facture.</li>
<li>Dans les limites permises par la loi, nous ne sommes pas responsables des pertes indirectes (comme le manque à gagner), et notre responsabilité totale est limitée au montant que vous avez payé au cours des 12 mois précédents. Rien dans les présentes ne limite les droits que la loi vous accorde en tant que consommateur.</li></ul>
<h2>8. Fin du service</h2>
<p>Vous pouvez cesser d'utiliser Paidsmith à tout moment. Nous pouvons suspendre les comptes qui enfreignent les présentes conditions. Si nous décidons de fermer le service, nous vous préviendrons au moins 60 jours à l'avance afin que vous puissiez télécharger vos données.</p>
<h2>9. Modifications</h2>
<p>Nous pouvons mettre à jour les présentes conditions. Les modifications importantes sont annoncées dans l'application ou par e-mail avant leur entrée en vigueur.</p>
<h2>10. Droit applicable et litiges</h2>
<p>Le droit portugais s'applique, sans préjudice des règles impératives de protection des consommateurs de votre pays de résidence. Les consommateurs peuvent également recourir aux organismes de règlement des litiges de consommation disponibles dans leur pays.</p>` };
DOCS.privacy.fr = { title: "Politique de confidentialité", body: `
<h2>1. Responsable du traitement</h2>
<p><b>${OP.name}</b>, numéro fiscal ${OP.nif}, ${OP.address}. Pour toute question concernant vos données : <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Quelles données nous traitons</h2>
<ul><li><b>Compte :</b> e-mail et mot de passe (conservé uniquement sous forme hachée, que même nous ne pouvons pas lire).</li>
<li><b>Ce que vous saisissez :</b> les informations de votre entreprise et de vos clients, les factures, les comptes bancaires, les dépenses et les photos de justificatifs.</li>
<li><b>Paiements de l'abonnement :</b> période, montant, devise, référence et statut. Nous ne conservons pas les données de carte.</li>
<li><b>Messages que vous nous envoyez :</b> signalements de bugs, suggestions et questions (avec votre e-mail), ainsi que le nombre de questions que vous posez chaque jour à l'assistant IA.</li>
<li><b>Sur votre appareil :</b> une copie de vos données et les photos en attente d'envoi sont stockées localement dans le navigateur afin que l'application fonctionne hors ligne. Cette copie est supprimée de l'appareil lorsque vous vous déconnectez. Nous n'utilisons pas de cookies publicitaires ni de mesure d'audience.</li></ul>
<h2>3. Pourquoi, et sur quelle base légale</h2>
<ul><li>Fournir le service et gérer votre compte et votre abonnement : exécution d'un contrat (art. 6, paragraphe 1, point b), du RGPD).</li>
<li>Respecter nos obligations légales, par exemple fiscales : obligation légale (art. 6, paragraphe 1, point c)).</li>
<li>Protéger le service contre les abus et les faux comptes : intérêt légitime (art. 6, paragraphe 1, point f)).</li></ul>
<h2>4. Qui nous aide à fournir le service</h2>
<ul><li><b>Supabase</b> : base de données, authentification et stockage de fichiers, hébergés à Francfort (UE).</li>
<li><b>Brevo</b> (France) : envoi des e-mails de confirmation de compte et de réinitialisation du mot de passe, ainsi que des notifications internes au responsable concernant les paiements en attente de confirmation et les messages d'assistance (elles contiennent votre e-mail et le texte du message).</li>
<li><b>Revolut Bank UAB</b> (Lituanie, UE) : la banque sur laquelle nous recevons les paiements d'abonnement. Lorsque vous payez par virement ou via le lien revolut.me, Revolut reçoit votre nom, le compte depuis lequel vous payez, le montant et la référence. Si vous payez par carte, Apple Pay ou Google Pay via le lien, ces données sont traitées par Revolut conformément à sa propre politique de confidentialité ; nous ne voyons jamais les données de carte.</li>
<li><b>GitHub Pages</b> (États-Unis) : hébergement des pages de l'application ; enregistre des données techniques d'accès, comme l'adresse IP.</li>
<li><b>jsDelivr</b> : distribution des bibliothèques utilisées par l'application.</li>
<li><b>Cloudflare Turnstile</b> : protection contre les robots lors de l'inscription et de la connexion.</li>
<li><b>OpenRouter</b> (États-Unis) et le fournisseur du modèle d'IA : uniquement lorsque vous utilisez l'assistant d'aide. Ce que vous saisissez dans l'assistant leur est envoyé et peut être conservé ou utilisé pour améliorer leurs modèles. Ne saisissez pas de données personnelles, de données de clients ni de coordonnées bancaires dans l'assistant.</li>
<li><b>frankfurter.dev et open.er-api.com</b> : taux de change ; aucune donnée personnelle n'est envoyée.</li></ul>
<p>Lorsque l'un de ces services traite des données en dehors de l'Espace économique européen, ce transfert est encadré par les garanties prévues par le RGPD (cadre de protection des données UE-États-Unis ou clauses contractuelles types). Nous ne vendons pas vos données.</p>
<h2>5. Durée de conservation</h2>
<p>Aussi longtemps que votre compte existe. Lorsque vous supprimez votre compte dans l'application, vos données et fichiers sont supprimés immédiatement ; les demandes faites par e-mail sont traitées dans un délai de 30 jours. Seuls les enregistrements des paiements confirmés (date, montant, devise, référence et e-mail) sont conservés, car la législation fiscale nous oblige à les garder jusqu'à 10 ans.</p>
<h2>6. Vos droits</h2>
<p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Vous pouvez exporter vos données et supprimer votre compte directement dans l'application (Paramètres → Mes données) ou écrire à ${OP.email}. Si vous estimez que vos droits n'ont pas été respectés, vous pouvez introduire une réclamation auprès de l'autorité portugaise (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) ou de l'autorité de protection des données de votre pays (en France, la <a href="https://www.cnil.fr" target="_blank" rel="noopener">CNIL</a>).</p>
<h2>7. Sécurité</h2>
<p>Les connexions sont chiffrées (HTTPS), chaque utilisateur ne peut accéder qu'à ses propres données (règles appliquées sur le serveur) et les mots de passe sont stockés sous forme hachée.</p>
<h2>8. Mineurs</h2><p>Paidsmith n'est pas destiné aux personnes de moins de 18 ans.</p>
<h2>9. Modifications</h2><p>Si nous modifions cette politique de manière importante, nous vous en informerons dans l'application ou par e-mail.</p>` };
DOCS.terms.de = { title: "Nutzungsbedingungen", body: `
<h2>1. Wer den Dienst anbietet</h2>
<p>Paidsmith wird angeboten von <b>${OP.name}</b>, Steuernummer ${OP.nif}, ${OP.address} („wir“). Kontakt: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Was Paidsmith ist</h2>
<p>Paidsmith ist eine Web-App, mit der Sie PDF-Rechnungen erstellen, Ausgaben mit einem Foto des Belegs erfassen, Zahlungsfristen im Blick behalten und die Daten Ihrer Kunden speichern können. Sie läuft im Browser auf Computern, Android und iPhone.</p>
<p><b>Wichtig:</b> Paidsmith ist <b>keine von einer Steuerbehörde zertifizierte Rechnungssoftware</b> (sie ist zum Beispiel nicht von der portugiesischen Steuerbehörde zertifiziert und erzeugt keine strukturierten E-Rechnungen wie XRechnung oder ZUGFeRD). Sie sind dafür verantwortlich, die steuer- und rechnungsrechtlichen Vorschriften einzuhalten, die in Ihrem Land für Ihre Tätigkeit gelten.</p>
<h2>3. Ihr Konto</h2>
<ul><li>Sie müssen mindestens 18 Jahre alt sein und Paidsmith für Ihre berufliche Tätigkeit nutzen.</li>
<li>Ihre Angaben müssen zutreffend sein. Sie sind dafür verantwortlich, Ihr Passwort sicher aufzubewahren, und für alles, was mit Ihrem Konto geschieht.</li>
<li>Ein Konto ist persönlich. Sie dürfen keine Konten massenhaft anlegen und Paidsmith nicht für rechtswidrige Zwecke, Betrug oder Spam nutzen.</li></ul>
<h2>4. Kostenlose Testphase, Preis und Zahlung</h2>
<ul><li>Jedes neue Konto erhält eine <b>30-tägige kostenlose Testphase</b>, ohne Angabe von Zahlungsdaten.</li>
<li>Danach beträgt der Preis <b>${PRICE_EN}</b>, ${OP.vat.de}.</li>
<li>Die Zahlung erfolgt <b>im Voraus</b>, per Banküberweisung an die in der App angezeigte Bankverbindung (1, 3 oder 12 Monate) oder, sofern verfügbar, per Karte. Die Zahlung per Überweisung <b>verlängert sich nicht automatisch</b>.</li>
<li>Nachdem Sie eine Überweisung gemeldet haben, behalten Sie 7 Tage lang Zugang, während wir sie prüfen. Geht die Überweisung nicht ein, wird der Zugang auf den vorherigen Stand zurückgesetzt.</li>
<li>Endet Ihr Abonnement, können Sie Ihre Daten weiterhin <b>ansehen, herunterladen und löschen</b>; Sie können lediglich keine Rechnungen, Ausgaben und Kunden mehr anlegen oder bearbeiten.</li>
<li>Wir können den Preis mit einer Ankündigungsfrist von mindestens 30 Tagen ändern. Änderungen betreffen keine bereits bezahlten Zeiträume.</li></ul>
<h2>5. Widerrufsrecht</h2>
<p>Wenn Sie Verbraucher sind, können Sie eine Zahlung innerhalb von 14 Tagen widerrufen. Da der Dienst sofort beginnt, verlangen Sie mit der Zahlung ausdrücklich, dass er unverzüglich startet; widerrufen Sie innerhalb der 14 Tage, erstatten wir Ihnen den noch nicht genutzten Teil des Zeitraums. Die App bittet Sie vor der Zahlung, dies in einem gesonderten Kontrollkästchen zu bestätigen. Für einen Widerruf schreiben Sie an ${OP.email}.</p>
<h2>6. Ihre Daten und Inhalte</h2>
<ul><li>Alles, was Sie eingeben (Rechnungen, Kunden, Ausgaben, Fotos), gehört Ihnen. Wir verwenden es ausschließlich zur Erbringung des Dienstes.</li>
<li>Sie können Ihre Rechnungen und Belege jederzeit als PDF herunterladen und alle Ihre Daten in eine Datei exportieren (Einstellungen → Meine Daten).</li>
<li>Sie können Ihr Konto in der App löschen. Ihre Daten und Dateien werden sofort gelöscht, mit Ausnahme der in der Datenschutzerklärung beschriebenen Fälle. Bewahren Sie vor dem Löschen alle Rechnungen auf, die Sie nach dem Recht Ihres Landes aufbewahren müssen.</li>
<li>Für die personenbezogenen Daten <b>Ihrer Kunden</b> sind Sie der Verantwortliche und wir handeln als Ihr <b>Auftragsverarbeiter</b> (Art. 28 DSGVO): Wir verarbeiten diese Daten nur zur Erbringung des Dienstes, nach Ihren Weisungen, mit den in der Datenschutzerklärung genannten Sicherheitsmaßnahmen und Unterauftragsverarbeitern, und wir löschen sie, wenn Sie Ihr Konto löschen.</li></ul>
<h2>7. Verfügbarkeit und Haftung</h2>
<ul><li>Wir tun unser Bestes, damit Paidsmith verfügbar und sicher bleibt, garantieren jedoch keinen unterbrechungs- oder fehlerfreien Betrieb.</li>
<li>Die angezeigten Wechselkurse sind unverbindlich. Sie sind dafür verantwortlich, Beträge, Steuern und Angaben vor dem Versand einer Rechnung zu prüfen.</li>
<li>Soweit gesetzlich zulässig, haften wir nicht für mittelbare Schäden (wie entgangenen Gewinn), und unsere Gesamthaftung ist auf den Betrag begrenzt, den Sie in den vorangegangenen 12 Monaten gezahlt haben. Ihre gesetzlichen Rechte als Verbraucher bleiben davon unberührt.</li></ul>
<h2>8. Beendigung des Dienstes</h2>
<p>Sie können die Nutzung von Paidsmith jederzeit beenden. Wir können Konten sperren, die gegen diese Bedingungen verstoßen. Sollten wir den Dienst einstellen, kündigen wir dies mindestens 60 Tage im Voraus an, damit Sie Ihre Daten herunterladen können.</p>
<h2>9. Änderungen</h2>
<p>Wir können diese Bedingungen aktualisieren. Wesentliche Änderungen werden vor ihrem Inkrafttreten in der App oder per E-Mail angekündigt.</p>
<h2>10. Anwendbares Recht und Streitigkeiten</h2>
<p>Es gilt portugiesisches Recht, unbeschadet der zwingenden Verbraucherschutzvorschriften Ihres Wohnsitzlandes. Verbraucher können sich zudem an die in ihrem Land verfügbaren Verbraucherschlichtungsstellen wenden.</p>` };
DOCS.privacy.de = { title: "Datenschutzerklärung", body: `
<h2>1. Verantwortlicher</h2>
<p><b>${OP.name}</b>, Steuernummer ${OP.nif}, ${OP.address}. Bei Fragen zu Ihren Daten: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Welche Daten wir verarbeiten</h2>
<ul><li><b>Konto:</b> E-Mail-Adresse und Passwort (nur als Hash gespeichert, den selbst wir nicht lesen können).</li>
<li><b>Ihre Eingaben:</b> Angaben zu Ihrem Unternehmen und zu Ihren Kunden, Rechnungen, Bankkonten, Ausgaben und Belegfotos.</li>
<li><b>Abonnementzahlungen:</b> Zeitraum, Betrag, Währung, Referenz und Status. Kartendaten speichern wir nicht.</li>
<li><b>Nachrichten, die Sie uns senden:</b> Fehlermeldungen, Vorschläge und Fragen (mit Ihrer E-Mail-Adresse) sowie die Anzahl der Fragen, die Sie pro Tag an den KI-Assistenten stellen.</li>
<li><b>Auf Ihrem Gerät:</b> Eine Kopie Ihrer Daten und noch nicht hochgeladene Fotos werden lokal im Browser gespeichert, damit die App offline funktioniert. Diese Kopie wird vom Gerät entfernt, wenn Sie sich abmelden. Wir verwenden keine Werbe- oder Analyse-Cookies.</li></ul>
<h2>3. Zwecke und Rechtsgrundlagen</h2>
<ul><li>Bereitstellung des Dienstes und Verwaltung Ihres Kontos und Abonnements: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO).</li>
<li>Erfüllung gesetzlicher Pflichten, etwa steuerrechtlicher: rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).</li>
<li>Schutz des Dienstes vor Missbrauch und Fake-Konten: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).</li></ul>
<h2>4. Wer uns bei der Erbringung des Dienstes unterstützt</h2>
<ul><li><b>Supabase</b>: Datenbank, Authentifizierung und Dateispeicher, gehostet in Frankfurt (EU).</li>
<li><b>Brevo</b> (Frankreich): Versand der E-Mails zur Kontobestätigung und zum Zurücksetzen des Passworts sowie interner Benachrichtigungen an den Verantwortlichen über noch zu bestätigende Zahlungen und Supportnachrichten (diese enthalten Ihre E-Mail-Adresse und den Nachrichtentext).</li>
<li><b>Revolut Bank UAB</b> (Litauen, EU): die Bank, bei der wir die Abonnementzahlungen erhalten. Wenn Sie per Überweisung oder über den revolut.me-Link zahlen, erhält Revolut Ihren Namen, das Konto, von dem Sie zahlen, den Betrag und die Referenz. Wenn Sie über den Link mit Karte, Apple Pay oder Google Pay zahlen, werden diese Daten von Revolut nach deren eigener Datenschutzerklärung verarbeitet; wir sehen niemals Kartendaten.</li>
<li><b>GitHub Pages</b> (USA): Hosting der App-Seiten; protokolliert technische Zugriffsdaten wie die IP-Adresse.</li>
<li><b>jsDelivr</b>: Bereitstellung der von der App verwendeten Bibliotheken.</li>
<li><b>Cloudflare Turnstile</b>: Schutz vor Bots bei Registrierung und Anmeldung.</li>
<li><b>OpenRouter</b> (USA) und der Anbieter des KI-Modells: nur, wenn Sie den Hilfe-Assistenten nutzen. Was Sie in den Assistenten eingeben, wird an diese übermittelt und kann von ihnen gespeichert oder zur Verbesserung ihrer Modelle verwendet werden. Geben Sie keine personenbezogenen Daten, Kundendaten oder Bankdaten in den Assistenten ein.</li>
<li><b>frankfurter.dev und open.er-api.com</b>: Wechselkurse; es werden keine personenbezogenen Daten übermittelt.</li></ul>
<p>Soweit einer dieser Dienste Daten außerhalb des Europäischen Wirtschaftsraums verarbeitet, geschieht dies mit den Garantien der DSGVO (EU-US Data Privacy Framework oder Standardvertragsklauseln). Wir verkaufen Ihre Daten nicht.</p>
<h2>5. Speicherdauer</h2>
<p>Solange Ihr Konto besteht. Wenn Sie Ihr Konto in der App löschen, werden Ihre Daten und Dateien sofort gelöscht; per E-Mail gestellte Anfragen werden innerhalb von 30 Tagen bearbeitet. Aufbewahrt werden nur die Aufzeichnungen bestätigter Zahlungen (Datum, Betrag, Währung, Referenz und E-Mail-Adresse), da das Steuerrecht uns verpflichtet, sie bis zu 10 Jahre aufzubewahren.</p>
<h2>6. Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Sie können Ihre Daten direkt in der App exportieren und Ihr Konto löschen (Einstellungen → Meine Daten) oder an ${OP.email} schreiben. Wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt wurden, können Sie sich bei der portugiesischen Aufsichtsbehörde (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) oder bei der Datenschutzaufsichtsbehörde Ihres Landes oder Bundeslandes beschweren.</p>
<h2>7. Sicherheit</h2>
<p>Verbindungen sind verschlüsselt (HTTPS), jeder Nutzer kann nur auf seine eigenen Daten zugreifen (serverseitig durchgesetzte Regeln), und Passwörter werden als Hash gespeichert.</p>
<h2>8. Minderjährige</h2><p>Paidsmith richtet sich nicht an Personen unter 18 Jahren.</p>
<h2>9. Änderungen</h2><p>Wenn wir diese Erklärung wesentlich ändern, informieren wir Sie in der App oder per E-Mail.</p>` };
DOCS.terms.it = { title: "Termini di utilizzo", body: `
<h2>1. Chi fornisce il servizio</h2>
<p>Paidsmith è fornito da <b>${OP.name}</b>, codice fiscale ${OP.nif}, con sede in ${OP.address} («noi»). Contatto: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Che cos'è Paidsmith</h2>
<p>Paidsmith è un'app web per creare fatture in PDF, registrare le spese con la foto della ricevuta, tenere sotto controllo le scadenze di pagamento e conservare i dati dei tuoi clienti. Funziona nel browser su computer, Android e iPhone.</p>
<p><b>Importante:</b> Paidsmith <b>non è un software di fatturazione certificato da alcuna autorità fiscale</b> (ad esempio, non è certificato dall'Autorità Tributaria portoghese e non trasmette fatture elettroniche al Sistema di Interscambio (SdI) dell'Agenzia delle Entrate). Sei tu il responsabile del rispetto delle norme fiscali e di fatturazione che si applicano alla tua attività nel tuo paese.</p>
<h2>3. Il tuo account</h2>
<ul><li>Devi avere almeno 18 anni e usare Paidsmith per la tua attività professionale.</li>
<li>I dati che fornisci devono essere veritieri. Sei responsabile di custodire la tua password in modo sicuro e di tutto ciò che viene fatto con il tuo account.</li>
<li>L'account è personale. Non puoi creare account in massa né usare Paidsmith per scopi illeciti, frodi o spam.</li></ul>
<h2>4. Prova gratuita, prezzo e pagamento</h2>
<ul><li>Ogni nuovo account ha una <b>prova gratuita di 30 giorni</b>, senza bisogno di dati di pagamento.</li>
<li>Successivamente il prezzo è di <b>${PRICE_EN}</b>, ${OP.vat.it}.</li>
<li>Il pagamento è <b>anticipato</b>, tramite bonifico bancario alle coordinate indicate nell'app (1, 3 o 12 mesi) oppure, quando disponibile, con carta. Il pagamento tramite bonifico <b>non si rinnova automaticamente</b>.</li>
<li>Dopo aver comunicato un bonifico, mantieni l'accesso per 7 giorni mentre lo verifichiamo. Se il bonifico non arriva, l'accesso torna allo stato precedente.</li>
<li>Se l'abbonamento termina, puoi comunque <b>visualizzare, scaricare ed eliminare</b> i tuoi dati; semplicemente non puoi più creare o modificare fatture, spese e clienti.</li>
<li>Possiamo modificare il prezzo con un preavviso di almeno 30 giorni. Le modifiche non riguardano i periodi già pagati.</li></ul>
<h2>5. Diritto di recesso</h2>
<p>Se sei un consumatore, hai 14 giorni per recedere da un pagamento. Poiché il servizio inizia subito, pagando chiedi espressamente che venga attivato immediatamente; se recedi entro i 14 giorni, ti rimborsiamo la parte del periodo non ancora utilizzata. Prima del pagamento l'app ti chiede di confermarlo in un'apposita casella di spunta. Per recedere, scrivi a ${OP.email}.</p>
<h2>6. I tuoi dati e contenuti</h2>
<ul><li>Tutto ciò che inserisci (fatture, clienti, spese, foto) è tuo. Lo usiamo solo per fornire il servizio.</li>
<li>Puoi scaricare in qualsiasi momento le tue fatture e ricevute in PDF ed esportare tutti i tuoi dati in un file (Impostazioni → I miei dati).</li>
<li>Puoi eliminare il tuo account direttamente nell'app. I tuoi dati e file vengono eliminati subito, salvo quanto descritto nell'Informativa sulla privacy. Prima di eliminarlo, conserva le fatture che la legge del tuo paese ti obbliga a tenere.</li>
<li>Per i dati personali dei <b>tuoi clienti</b>, tu sei il titolare del trattamento e noi agiamo come tuo <b>responsabile del trattamento</b> (articolo 28 del RGPD): trattiamo tali dati solo per fornirti il servizio, secondo le tue istruzioni, con le misure di sicurezza e i sub-responsabili indicati nell'Informativa sulla privacy, e li eliminiamo quando elimini il tuo account.</li></ul>
<h2>7. Disponibilità e responsabilità</h2>
<ul><li>Facciamo del nostro meglio per mantenere Paidsmith disponibile e sicuro, ma non garantiamo un funzionamento ininterrotto o privo di errori.</li>
<li>I tassi di cambio mostrati sono indicativi. Spetta a te verificare importi, imposte e dati prima di inviare una fattura.</li>
<li>Nei limiti consentiti dalla legge, non rispondiamo dei danni indiretti (come il mancato guadagno) e la nostra responsabilità complessiva è limitata a quanto hai pagato nei 12 mesi precedenti. Nulla di quanto qui previsto limita i diritti che la legge ti riconosce come consumatore.</li></ul>
<h2>8. Cessazione del servizio</h2>
<p>Puoi smettere di usare Paidsmith in qualsiasi momento. Possiamo sospendere gli account che violano questi termini. Se decidiamo di chiudere il servizio, ti avviseremo con almeno 60 giorni di preavviso, così potrai scaricare i tuoi dati.</p>
<h2>9. Modifiche</h2>
<p>Possiamo aggiornare questi termini. Le modifiche importanti vengono comunicate nell'app o via email prima della loro entrata in vigore.</p>
<h2>10. Legge applicabile e controversie</h2>
<p>Si applica la legge portoghese, fatte salve le norme imperative a tutela dei consumatori del tuo paese di residenza. I consumatori possono inoltre rivolgersi agli organismi di risoluzione delle controversie dei consumatori disponibili nel proprio paese.</p>` };
DOCS.privacy.it = { title: "Informativa sulla privacy", body: `
<h2>1. Titolare del trattamento</h2>
<p><b>${OP.name}</b>, codice fiscale ${OP.nif}, ${OP.address}. Per qualsiasi domanda sui tuoi dati: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Quali dati trattiamo</h2>
<ul><li><b>Account:</b> email e password (conservata solo in forma di hash, che nemmeno noi possiamo leggere).</li>
<li><b>Ciò che inserisci:</b> i dati della tua attività e dei tuoi clienti, fatture, conti bancari, spese e foto delle ricevute.</li>
<li><b>Pagamenti dell'abbonamento:</b> periodo, importo, valuta, riferimento e stato. Non conserviamo i dati delle carte.</li>
<li><b>Messaggi che ci invii:</b> segnalazioni di errori, suggerimenti e domande (con la tua email), e quante domande al giorno fai all'assistente IA.</li>
<li><b>Sul tuo dispositivo:</b> una copia dei tuoi dati e le foto in attesa di caricamento sono salvate localmente nel browser, così l'app funziona anche offline. Questa copia viene rimossa dal dispositivo quando esci dall'account. Non usiamo cookie pubblicitari né statistici.</li></ul>
<h2>3. Perché e su quale base giuridica</h2>
<ul><li>Fornire il servizio e gestire il tuo account e il tuo abbonamento: esecuzione di un contratto (art. 6, par. 1, lett. b), del RGPD).</li>
<li>Adempiere a obblighi di legge, ad esempio fiscali: obbligo legale (art. 6, par. 1, lett. c)).</li>
<li>Proteggere il servizio da abusi e account falsi: legittimo interesse (art. 6, par. 1, lett. f)).</li></ul>
<h2>4. Chi ci aiuta a fornire il servizio</h2>
<ul><li><b>Supabase</b>: database, autenticazione e archiviazione dei file, ospitati a Francoforte (UE).</li>
<li><b>Brevo</b> (Francia): invio delle email di conferma dell'account e di reimpostazione della password, e delle notifiche interne al titolare sui pagamenti in attesa di conferma e sui messaggi di assistenza (contengono la tua email e il testo del messaggio).</li>
<li><b>Revolut Bank UAB</b> (Lituania, UE): la banca su cui riceviamo i pagamenti dell'abbonamento. Quando paghi con bonifico o tramite il link revolut.me, Revolut riceve il tuo nome, il conto da cui paghi, l'importo e il riferimento. Se paghi con carta, Apple Pay o Google Pay tramite il link, questi dati sono trattati da Revolut secondo la sua informativa sulla privacy; noi non vediamo mai i dati della carta.</li>
<li><b>GitHub Pages</b> (USA): hosting delle pagine dell'app; registra dati tecnici di accesso, come l'indirizzo IP.</li>
<li><b>jsDelivr</b>: distribuzione delle librerie usate dall'app.</li>
<li><b>Cloudflare Turnstile</b>: protezione dai bot in fase di registrazione e di accesso.</li>
<li><b>OpenRouter</b> (USA) e il fornitore del modello di IA: solo quando usi l'assistente di Aiuto. Ciò che scrivi nell'assistente viene inviato a loro e può essere conservato o usato per migliorare i loro modelli. Non scrivere nell'assistente dati personali, dati dei clienti o dati bancari.</li>
<li><b>frankfurter.dev e open.er-api.com</b>: tassi di cambio; non viene inviato alcun dato personale.</li></ul>
<p>Quando uno di questi servizi tratta dati al di fuori dello Spazio economico europeo, il trasferimento avviene con le garanzie previste dal RGPD (EU-US Data Privacy Framework o clausole contrattuali tipo). Non vendiamo i tuoi dati.</p>
<h2>5. Per quanto tempo</h2>
<p>Finché il tuo account esiste. Quando elimini l'account nell'app, i tuoi dati e file vengono eliminati subito; le richieste inviate via email vengono gestite entro 30 giorni. Restano solo le registrazioni dei pagamenti confermati (data, importo, valuta, riferimento ed email), che la normativa fiscale ci obbliga a conservare fino a 10 anni.</p>
<h2>6. I tuoi diritti</h2>
<p>Hai diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione. Puoi esportare i tuoi dati ed eliminare l'account direttamente nell'app (Impostazioni → I miei dati) oppure scrivere a ${OP.email}. Se ritieni che i tuoi diritti non siano stati rispettati, puoi presentare reclamo all'autorità portoghese (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) o all'autorità di protezione dei dati del tuo paese (in Italia, il <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">Garante per la protezione dei dati personali</a>).</p>
<h2>7. Sicurezza</h2>
<p>Le connessioni sono cifrate (HTTPS), ogni utente può accedere solo ai propri dati (regole applicate sul server) e le password sono conservate in forma di hash.</p>
<h2>8. Minori</h2><p>Paidsmith non è destinato a persone di età inferiore ai 18 anni.</p>
<h2>9. Modifiche</h2><p>Se modifichiamo questa informativa in modo significativo, te lo comunicheremo nell'app o via email.</p>` };
DOCS.terms.ro = { title: "Termeni de utilizare", body: `<h2>1. Cine furnizează serviciul</h2>
<p>Paidsmith este furnizat de <b>${OP.name}</b>, număr de identificare fiscală ${OP.nif}, cu adresa ${OP.address} („noi”). Contact: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Ce este Paidsmith</h2>
<p>Paidsmith este o aplicație web pentru a crea facturi PDF, a înregistra cheltuieli cu o fotografie a bonului, a urmări termenele de plată și a păstra datele clienților tăi. Funcționează în browser pe computere, Android și iPhone.</p>
<p><b>Important:</b> Paidsmith <b>nu este un software de facturare certificat de vreo autoritate fiscală</b> (de exemplu, nu este certificat de Autoritatea Fiscală portugheză și nu transmite facturi electronice în sistemul RO e-Factura al ANAF). Tu ești responsabil de respectarea regulilor fiscale și de facturare care se aplică afacerii tale în țara ta.</p>
<h2>3. Contul tău</h2>
<ul><li>Trebuie să ai cel puțin 18 ani și să folosești Paidsmith pentru activitatea ta profesională.</li>
<li>Datele pe care le furnizezi trebuie să fie corecte. Ești responsabil de păstrarea în siguranță a parolei și de tot ce se face cu contul tău.</li>
<li>Contul este personal. Nu poți crea conturi în masă și nici folosi Paidsmith în scopuri ilegale, pentru fraudă sau spam.</li></ul>
<h2>4. Perioada de probă gratuită, prețul și plata</h2>
<ul><li>Fiecare cont nou primește o <b>perioadă de probă gratuită de 30 de zile</b>, fără să fie nevoie de date de plată.</li>
<li>După aceea, prețul este de <b>${PRICE_EN}</b>, ${OP.vat.ro}.</li>
<li>Plata se face <b>în avans</b>, prin transfer bancar în contul indicat în aplicație (1, 3 sau 12 luni) sau, când este disponibilă, cu cardul. Plata prin transfer <b>nu se reînnoiește automat</b>.</li>
<li>După ce raportezi un transfer, îți păstrezi accesul timp de 7 zile cât timp îl confirmăm. Dacă transferul nu ajunge, accesul revine la starea anterioară.</li>
<li>Dacă abonamentul tău se încheie, poți în continuare să <b>vizualizezi, descarci și ștergi</b> datele tale; doar că nu mai poți crea sau edita facturi, cheltuieli și clienți.</li>
<li>Putem modifica prețul cu un preaviz de cel puțin 30 de zile. Modificările nu afectează perioadele deja plătite.</li></ul>
<h2>5. Dreptul de retragere</h2>
<p>Dacă ești consumator, ai la dispoziție 14 zile pentru a te retrage dintr-o plată. Deoarece serviciul începe imediat, prin plată ceri în mod expres ca acesta să înceapă imediat; dacă te retragi în cele 14 zile, îți rambursăm partea din perioadă care nu a fost încă folosită. Aplicația îți cere să confirmi acest lucru într-o casetă de bifat separată înainte de a plăti. Pentru a te retrage, trimite un email la ${OP.email}.</p>
<h2>6. Datele și conținutul tău</h2>
<ul><li>Tot ce introduci (facturi, clienți, cheltuieli, fotografii) îți aparține. Le folosim doar pentru a furniza serviciul.</li>
<li>Poți descărca oricând facturile și bonurile în format PDF și poți exporta toate datele tale într-un fișier (Setări → Datele mele).</li>
<li>Îți poți șterge contul din aplicație. Datele și fișierele tale sunt șterse imediat, cu excepția celor descrise în Politica de confidențialitate. Înainte de ștergere, păstrează facturile pe care legea țării tale te obligă să le păstrezi.</li>
<li>Pentru datele cu caracter personal ale <b>clienților tăi</b>, tu ești operatorul, iar noi acționăm ca <b>persoană împuternicită</b> a ta (articolul 28 din GDPR): prelucrăm aceste date doar pentru a furniza serviciul, conform instrucțiunilor tale, cu măsurile de securitate și subcontractanții enumerați în Politica de confidențialitate, și le ștergem atunci când îți ștergi contul.</li></ul>
<h2>7. Disponibilitate și răspundere</h2>
<ul><li>Facem tot posibilul ca Paidsmith să fie disponibil și sigur, dar nu garantăm o funcționare neîntreruptă sau fără erori.</li>
<li>Cursurile de schimb afișate sunt orientative. Tu ești responsabil de verificarea sumelor, a taxelor și a datelor înainte de a trimite o factură.</li>
<li>În măsura permisă de lege, nu răspundem pentru pierderi indirecte (cum ar fi beneficiile nerealizate), iar răspunderea noastră totală este limitată la suma pe care ai plătit-o în ultimele 12 luni. Nimic din acești termeni nu îți limitează drepturile legale de consumator.</li></ul>
<h2>8. Încetarea serviciului</h2>
<p>Poți înceta oricând să folosești Paidsmith. Putem suspenda conturile care încalcă acești termeni. Dacă decidem să închidem serviciul, te vom anunța cu cel puțin 60 de zile înainte, ca să îți poți descărca datele.</p>
<h2>9. Modificări</h2>
<p>Putem actualiza acești termeni. Modificările importante sunt anunțate în aplicație sau prin email înainte de a intra în vigoare.</p>
<h2>10. Legea aplicabilă și litigii</h2>
<p>Se aplică legea portugheză, fără a aduce atingere normelor imperative de protecție a consumatorilor din țara ta de reședință. Consumatorii pot apela și la organismele de soluționare a litigiilor de consum disponibile în țara lor.</p>` };
DOCS.privacy.ro = { title: "Politica de confidențialitate", body: `<h2>1. Operatorul</h2>
<p><b>${OP.name}</b>, număr de identificare fiscală ${OP.nif}, ${OP.address}. Pentru orice întrebare despre datele tale: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Ce date prelucrăm</h2>
<ul><li><b>Contul:</b> adresa de email și parola (stocată doar sub formă de hash, pe care nici măcar noi nu o putem citi).</li>
<li><b>Ce introduci tu:</b> datele afacerii tale, datele clienților tăi, facturi, conturi bancare, cheltuieli și fotografii ale bonurilor.</li>
<li><b>Plățile abonamentului:</b> perioada, suma, moneda, referința și starea. Nu stocăm datele cardului.</li>
<li><b>Mesajele pe care ni le trimiți:</b> rapoarte de erori, sugestii și întrebări (împreună cu adresa ta de email) și câte întrebări pe zi adresezi asistentului AI.</li>
<li><b>Pe dispozitivul tău:</b> o copie a datelor tale și fotografiile care așteaptă să fie încărcate sunt stocate local în browser, ca aplicația să funcționeze offline. Această copie este eliminată de pe dispozitiv când te deconectezi. Nu folosim cookie-uri de publicitate sau de analiză.</li></ul>
<h2>3. De ce și în ce temei legal</h2>
<ul><li>Pentru a furniza serviciul și a gestiona contul și abonamentul tău: executarea unui contract (art. 6 alin. (1) lit. (b) din GDPR).</li>
<li>Pentru a respecta obligațiile legale, cum ar fi regulile fiscale: obligație legală (art. 6 alin. (1) lit. (c)).</li>
<li>Pentru a proteja serviciul împotriva abuzurilor și a conturilor false: interes legitim (art. 6 alin. (1) lit. (f)).</li></ul>
<h2>4. Cine ne ajută să furnizăm serviciul</h2>
<ul><li><b>Supabase</b>: bază de date, autentificare și stocare de fișiere, găzduite la Frankfurt (UE).</li>
<li><b>Brevo</b> (Franța): trimiterea emailurilor de confirmare a contului și de resetare a parolei, precum și a notificărilor interne către operator despre plățile care așteaptă confirmarea și despre mesajele de asistență (acestea includ adresa ta de email și textul mesajului).</li>
<li><b>Revolut Bank UAB</b> (Lituania, UE): banca prin care primim plățile abonamentelor. Când plătești prin transfer sau prin linkul revolut.me, Revolut primește numele tău, contul din care plătești, suma și referința. Dacă plătești cu cardul, Apple Pay sau Google Pay prin link, aceste date sunt prelucrate de Revolut conform propriei politici de confidențialitate; noi nu vedem niciodată datele cardului.</li>
<li><b>GitHub Pages</b> (SUA): găzduirea paginilor aplicației; înregistrează date tehnice de acces, cum ar fi adresa IP.</li>
<li><b>jsDelivr</b>: livrarea bibliotecilor folosite de aplicație.</li>
<li><b>Cloudflare Turnstile</b>: protecție împotriva roboților la înregistrare și autentificare.</li>
<li><b>OpenRouter</b> (SUA) și furnizorul modelului AI: doar când folosești asistentul de Ajutor. Ce scrii în asistent le este trimis și poate fi stocat sau folosit pentru a le îmbunătăți modelele. Nu scrie în asistent date personale, date ale clienților sau date bancare.</li>
<li><b>frankfurter.dev și open.er-api.com</b>: cursuri de schimb; nu se trimit date cu caracter personal.</li></ul>
<p>Atunci când oricare dintre aceste servicii prelucrează date în afara Spațiului Economic European, acest lucru se face cu garanțiile prevăzute de GDPR (Cadrul UE-SUA privind protecția datelor sau clauze contractuale standard). Nu îți vindem datele.</p>
<h2>5. Cât timp</h2>
<p>Cât timp există contul tău. Când îți ștergi contul din aplicație, datele și fișierele tale sunt șterse imediat; cererile trimise prin email sunt soluționate în termen de 30 de zile. Se păstrează doar evidențele plăților confirmate (data, suma, moneda, referința și adresa de email), deoarece legislația fiscală ne obligă să le păstrăm până la 10 ani.</p>
<h2>6. Drepturile tale</h2>
<p>Ai dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Îți poți exporta datele și îți poți șterge contul direct din aplicație (Setări → Datele mele) sau poți scrie la ${OP.email}. Dacă consideri că drepturile tale nu au fost respectate, poți depune o plângere la autoritatea portugheză (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) sau la autoritatea de protecție a datelor din țara ta, în România <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">ANSPDCP</a> (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal).</p>
<h2>7. Securitate</h2>
<p>Conexiunile sunt criptate (HTTPS), fiecare utilizator are acces doar la propriile date (reguli aplicate pe server), iar parolele sunt stocate sub formă de hash.</p>
<h2>8. Copii</h2><p>Paidsmith nu este destinat persoanelor sub 18 ani.</p>
<h2>9. Modificări</h2><p>Dacă modificăm această politică în mod semnificativ, te vom anunța în aplicație sau prin email.</p>` };
DOCS.terms.tr = { title: "Kullanım Koşulları", body: `<h2>1. Hizmeti kim sağlıyor</h2>
<p>Paidsmith, <b>${OP.name}</b> (vergi kimlik numarası ${OP.nif}, adres: ${OP.address}) tarafından sağlanmaktadır ("biz"). İletişim: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Paidsmith nedir</h2>
<p>Paidsmith; PDF fatura oluşturmanızı, fişin fotoğrafıyla giderlerinizi kaydetmenizi, ödeme vadelerini takip etmenizi ve müşterilerinizin bilgilerini saklamanızı sağlayan bir web uygulamasıdır. Bilgisayarlarda, Android'de ve iPhone'da tarayıcı üzerinden çalışır.</p>
<p><b>Önemli:</b> Paidsmith <b>herhangi bir vergi idaresi tarafından onaylanmış bir faturalama yazılımı değildir</b> (örneğin Portekiz Vergi İdaresi tarafından onaylanmamıştır ve GİB e-Fatura veya e-Arşiv sistemine fatura göndermez). Ülkenizde işinize uygulanan vergi ve faturalama kurallarına uymaktan siz sorumlusunuz.</p>
<h2>3. Hesabınız</h2>
<ul><li>En az 18 yaşında olmalı ve Paidsmith'i mesleki faaliyetiniz için kullanmalısınız.</li>
<li>Verdiğiniz bilgiler doğru olmalıdır. Şifrenizi güvende tutmaktan ve hesabınızla yapılan her şeyden siz sorumlusunuz.</li>
<li>Hesap kişiseldir. Toplu hesap oluşturamaz, Paidsmith'i yasa dışı amaçlarla, dolandırıcılık veya spam için kullanamazsınız.</li></ul>
<h2>4. Ücretsiz deneme, fiyat ve ödeme</h2>
<ul><li>Her yeni hesap, ödeme bilgisi gerektirmeden <b>30 günlük ücretsiz deneme</b> alır.</li>
<li>Bu sürenin ardından fiyat <b>${PRICE_EN}</b> olup ${OP.vat.tr}.</li>
<li>Ödeme, uygulamada gösterilen hesaba banka havalesiyle (1, 3 veya 12 ay) ya da mümkün olduğunda kartla <b>peşin</b> yapılır. Havale ile yapılan ödeme <b>otomatik olarak yenilenmez</b>.</li>
<li>Bir havaleyi bildirdikten sonra, biz onu onaylarken 7 gün boyunca erişiminiz devam eder. Havale ulaşmazsa erişim önceki durumuna döner.</li>
<li>Aboneliğiniz sona ererse verilerinizi yine de <b>görüntüleyebilir, indirebilir ve silebilirsiniz</b>; yalnızca artık fatura, gider ve müşteri oluşturamaz veya düzenleyemezsiniz.</li>
<li>Fiyatı en az 30 gün önceden bildirerek değiştirebiliriz. Değişiklikler, önceden ödenmiş dönemleri etkilemez.</li></ul>
<h2>5. Cayma hakkı</h2>
<p>Tüketiciyseniz, bir ödemeden cayma için 14 gününüz vardır. Hizmet hemen başladığından, ödeme yaparak hizmetin derhal başlamasını açıkça talep etmiş olursunuz; 14 gün içinde cayarsanız dönemin henüz kullanılmamış kısmını iade ederiz. Uygulama, ödeme yapmadan önce bunu ayrı bir onay kutusuyla onaylamanızı ister. Cayma için ${OP.email} adresine e-posta gönderin.</p>
<h2>6. Verileriniz ve içeriğiniz</h2>
<ul><li>Girdiğiniz her şey (faturalar, müşteriler, giderler, fotoğraflar) size aittir. Bunları yalnızca hizmeti sağlamak için kullanırız.</li>
<li>Faturalarınızı ve fişlerinizi istediğiniz zaman PDF olarak indirebilir ve tüm verilerinizi bir dosyaya aktarabilirsiniz (Ayarlar → Verilerim).</li>
<li>Hesabınızı uygulamadan silebilirsiniz. Verileriniz ve dosyalarınız, Gizlilik Politikası'nda açıklananlar dışında hemen silinir. Silmeden önce, ülkenizin yasalarının saklamanızı zorunlu kıldığı faturaları saklayın.</li>
<li><b>Müşterilerinizin</b> kişisel verileri bakımından veri sorumlusu sizsiniz, biz ise sizin <b>veri işleyeniniz</b> olarak hareket ederiz (GDPR (AB Genel Veri Koruma Tüzüğü) Madde 28): bu verileri yalnızca hizmeti sağlamak için, sizin talimatlarınız doğrultusunda, Gizlilik Politikası'nda listelenen güvenlik önlemleri ve alt işleyenlerle işleriz ve hesabınızı sildiğinizde bu verileri sileriz.</li></ul>
<h2>7. Erişilebilirlik ve sorumluluk</h2>
<ul><li>Paidsmith'i erişilebilir ve güvenli tutmak için elimizden geleni yaparız, ancak kesintisiz veya hatasız çalışmayı garanti etmeyiz.</li>
<li>Gösterilen döviz kurları yaklaşık değerlerdir. Bir faturayı göndermeden önce tutarları, vergileri ve bilgileri kontrol etmekten siz sorumlusunuz.</li>
<li>Yasaların izin verdiği ölçüde, dolaylı zararlardan (kâr kaybı gibi) sorumlu değiliz ve toplam sorumluluğumuz son 12 ayda ödediğiniz tutarla sınırlıdır. Bu koşullardaki hiçbir hüküm, tüketici olarak yasal haklarınızı sınırlamaz.</li></ul>
<h2>8. Hizmetin sona ermesi</h2>
<p>Paidsmith'i kullanmayı istediğiniz zaman bırakabilirsiniz. Bu koşulları ihlal eden hesapları askıya alabiliriz. Hizmeti kapatmaya karar verirsek, verilerinizi indirebilmeniz için en az 60 gün önceden bildirimde bulunuruz.</p>
<h2>9. Değişiklikler</h2>
<p>Bu koşulları güncelleyebiliriz. Önemli değişiklikler, yürürlüğe girmeden önce uygulamada veya e-postayla duyurulur.</p>
<h2>10. Uygulanacak hukuk ve uyuşmazlıklar</h2>
<p>Yerleşim yeri ülkenizin emredici tüketici koruma kuralları saklı kalmak kaydıyla Portekiz hukuku uygulanır. Tüketiciler, ülkelerinde mevcut tüketici uyuşmazlık çözüm mercilerine de başvurabilir.</p>` };
DOCS.privacy.tr = { title: "Gizlilik Politikası", body: `<h2>1. Veri sorumlusu</h2>
<p><b>${OP.name}</b>, vergi kimlik numarası ${OP.nif}, ${OP.address}. Verilerinizle ilgili her türlü soru için: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Hangi verileri işliyoruz</h2>
<ul><li><b>Hesap:</b> e-posta adresi ve şifre (yalnızca hash'lenmiş biçimde saklanır; biz bile okuyamayız).</li>
<li><b>Girdikleriniz:</b> işletmenizin bilgileri, müşterilerinizin bilgileri, faturalar, banka hesapları, giderler ve fiş fotoğrafları.</li>
<li><b>Abonelik ödemeleri:</b> dönem, tutar, para birimi, referans ve durum. Kart bilgilerini saklamayız.</li>
<li><b>Bize gönderdiğiniz mesajlar:</b> hata bildirimleri, öneriler ve sorular (e-posta adresinizle birlikte) ve yapay zekâ asistanına günde kaç soru sorduğunuz.</li>
<li><b>Cihazınızda:</b> uygulamanın çevrimdışı çalışabilmesi için verilerinizin bir kopyası ve yüklenmeyi bekleyen fotoğraflar tarayıcıda yerel olarak saklanır. Bu kopya, oturumu kapattığınızda cihazdan kaldırılır. Reklam veya analiz çerezleri kullanmayız.</li></ul>
<h2>3. Neden ve hangi hukuki dayanakla</h2>
<ul><li>Hizmeti sağlamak ve hesabınızı ile aboneliğinizi yönetmek için: sözleşmenin ifası (GDPR (AB Genel Veri Koruma Tüzüğü) Madde 6(1)(b)).</li>
<li>Vergi kuralları gibi yasal yükümlülükleri yerine getirmek için: hukuki yükümlülük (Madde 6(1)(c)).</li>
<li>Hizmeti kötüye kullanıma ve sahte hesaplara karşı korumak için: meşru menfaat (Madde 6(1)(f)).</li></ul>
<h2>4. Hizmeti sağlamamıza kimler yardımcı oluyor</h2>
<ul><li><b>Supabase</b>: veritabanı, kimlik doğrulama ve dosya depolama; Frankfurt'ta (AB) barındırılır.</li>
<li><b>Brevo</b> (Fransa): hesap onayı ve şifre sıfırlama e-postalarının gönderilmesi ile onay bekleyen ödemeler ve destek mesajları hakkında veri sorumlusuna iletilen dahili bildirimler (bunlar e-posta adresinizi ve mesaj metnini içerir).</li>
<li><b>Revolut Bank UAB</b> (Litvanya, AB): abonelik ödemelerini aldığımız banka. Havaleyle veya revolut.me bağlantısıyla ödeme yaptığınızda Revolut adınızı, ödeme yaptığınız hesabı, tutarı ve referansı alır. Bağlantı üzerinden kart, Apple Pay veya Google Pay ile öderseniz bu veriler Revolut tarafından kendi gizlilik politikası kapsamında işlenir; kart bilgilerini hiçbir zaman görmeyiz.</li>
<li><b>GitHub Pages</b> (ABD): uygulama sayfalarının barındırılması; IP adresi gibi teknik erişim verilerini kaydeder.</li>
<li><b>jsDelivr</b>: uygulamanın kullandığı kütüphanelerin sunulması.</li>
<li><b>Cloudflare Turnstile</b>: kayıt ve oturum açma sırasında bot koruması.</li>
<li><b>OpenRouter</b> (ABD) ve yapay zekâ modeli sağlayıcısı: yalnızca Yardım asistanını kullandığınızda. Asistana yazdıklarınız onlara gönderilir ve saklanabilir veya modellerini geliştirmek için kullanılabilir. Asistana kişisel bilgiler, müşteri bilgileri veya banka bilgileri yazmayın.</li>
<li><b>frankfurter.dev ve open.er-api.com</b>: döviz kurları; hiçbir kişisel veri gönderilmez.</li></ul>
<p>Bu hizmetlerden herhangi biri verileri Avrupa Ekonomik Alanı dışında işlediğinde, bu işlem GDPR güvenceleriyle (AB-ABD Veri Gizliliği Çerçevesi veya standart sözleşme hükümleri) yapılır. Verilerinizi satmayız.</p>
<h2>5. Ne kadar süreyle</h2>
<p>Hesabınız var olduğu sürece. Hesabınızı uygulamadan sildiğinizde verileriniz ve dosyalarınız hemen silinir; e-postayla yapılan talepler 30 gün içinde yerine getirilir. Yalnızca onaylanmış ödemelerin kayıtları (tarih, tutar, para birimi, referans ve e-posta) saklanır, çünkü vergi mevzuatı bunları 10 yıla kadar saklamamızı zorunlu kılar.</p>
<h2>6. Haklarınız</h2>
<p>Erişim, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve itiraz haklarına sahipsiniz. Verilerinizi dışa aktarabilir ve hesabınızı doğrudan uygulamadan silebilir (Ayarlar → Verilerim) ya da ${OP.email} adresine e-posta gönderebilirsiniz. Haklarınıza uyulmadığını düşünüyorsanız Portekiz veri koruma otoritesine (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) veya ülkenizin veri koruma otoritesine, Türkiye'de <a href="https://www.kvkk.gov.tr" target="_blank" rel="noopener">KVKK</a> (Kişisel Verileri Koruma Kurumu) kurumuna şikâyette bulunabilirsiniz.</p>
<h2>7. Güvenlik</h2>
<p>Bağlantılar şifrelenir (HTTPS), her kullanıcı yalnızca kendi verilerine erişebilir (sunucuda uygulanan kurallar) ve şifreler hash'lenmiş olarak saklanır.</p>
<h2>8. Çocuklar</h2><p>Paidsmith 18 yaşından küçükler için tasarlanmamıştır.</p>
<h2>9. Değişiklikler</h2><p>Bu politikayı önemli ölçüde değiştirirsek, sizi uygulamada veya e-postayla bilgilendiririz.</p>` };
DOCS.terms.pl = { title: "Regulamin", body: `<h2>1. Kto świadczy usługę</h2>
<p>Usługę Paidsmith świadczy <b>${OP.name}</b>, numer identyfikacji podatkowej ${OP.nif}, adres: ${OP.address} („my”). Kontakt: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Czym jest Paidsmith</h2>
<p>Paidsmith to aplikacja internetowa do tworzenia faktur w formacie PDF, rejestrowania wydatków ze zdjęciem paragonu, pilnowania terminów płatności i przechowywania danych twoich klientów. Działa w przeglądarce na komputerach, Androidzie i iPhonie.</p>
<p><b>Ważne:</b> Paidsmith <b>nie jest programem do fakturowania certyfikowanym przez jakikolwiek organ podatkowy</b> (na przykład nie jest certyfikowany przez portugalski urząd skarbowy i nie wystawia faktur ustrukturyzowanych w Krajowym Systemie e-Faktur (KSeF)). To ty odpowiadasz za przestrzeganie przepisów podatkowych i dotyczących fakturowania, które mają zastosowanie do twojej działalności w twoim kraju.</p>
<h2>3. Twoje konto</h2>
<ul><li>Musisz mieć ukończone 18 lat i korzystać z Paidsmith w ramach swojej działalności zawodowej.</li>
<li>Podawane przez ciebie dane muszą być prawdziwe. Odpowiadasz za bezpieczne przechowywanie hasła i za wszystko, co dzieje się na twoim koncie.</li>
<li>Konto jest osobiste. Nie możesz masowo zakładać kont ani używać Paidsmith do celów niezgodnych z prawem, oszustw lub spamu.</li></ul>
<h2>4. Bezpłatny okres próbny, cena i płatność</h2>
<ul><li>Każde nowe konto otrzymuje <b>30-dniowy bezpłatny okres próbny</b>, bez podawania danych płatniczych.</li>
<li>Po jego zakończeniu cena wynosi <b>${PRICE_EN}</b>, ${OP.vat.pl}.</li>
<li>Płatność jest dokonywana <b>z góry</b>, przelewem bankowym na dane podane w aplikacji (1, 3 lub 12 miesięcy) albo, gdy jest to dostępne, kartą. Płatność przelewem <b>nie odnawia się automatycznie</b>.</li>
<li>Po zgłoszeniu przelewu zachowujesz dostęp przez 7 dni, w czasie gdy go potwierdzamy. Jeśli przelew nie dotrze, dostęp wraca do poprzedniego stanu.</li>
<li>Jeśli twoja subskrypcja wygaśnie, nadal możesz <b>przeglądać, pobierać i usuwać</b> swoje dane; nie możesz jedynie tworzyć ani edytować faktur, wydatków i klientów.</li>
<li>Możemy zmienić cenę z co najmniej 30-dniowym wyprzedzeniem. Zmiany nie dotyczą okresów już opłaconych.</li></ul>
<h2>5. Prawo odstąpienia</h2>
<p>Jeśli jesteś konsumentem, masz 14 dni na odstąpienie od płatności. Ponieważ usługa rozpoczyna się od razu, dokonując płatności wyraźnie żądasz jej natychmiastowego rozpoczęcia; jeśli odstąpisz w ciągu 14 dni, zwrócimy ci część okresu, która nie została jeszcze wykorzystana. Przed płatnością aplikacja prosi cię o potwierdzenie tego w osobnym polu wyboru. Aby odstąpić, napisz na adres ${OP.email}.</p>
<h2>6. Twoje dane i treści</h2>
<ul><li>Wszystko, co wprowadzasz (faktury, klienci, wydatki, zdjęcia), należy do ciebie. Używamy tego wyłącznie do świadczenia usługi.</li>
<li>W każdej chwili możesz pobrać swoje faktury i paragony w formacie PDF oraz wyeksportować wszystkie swoje dane do pliku (Ustawienia → Moje dane).</li>
<li>Możesz usunąć swoje konto w aplikacji. Twoje dane i pliki są usuwane od razu, z wyjątkiem przypadków opisanych w Polityce prywatności. Przed usunięciem zachowaj faktury, które zgodnie z prawem twojego kraju musisz przechowywać.</li>
<li>W odniesieniu do danych osobowych <b>twoich klientów</b> to ty jesteś administratorem, a my działamy jako twój <b>podmiot przetwarzający</b> (art. 28 RODO): przetwarzamy te dane wyłącznie w celu świadczenia usługi, zgodnie z twoimi poleceniami, przy zastosowaniu środków bezpieczeństwa i z udziałem podmiotów przetwarzających wymienionych w Polityce prywatności, i usuwamy je, gdy usuniesz swoje konto.</li></ul>
<h2>7. Dostępność i odpowiedzialność</h2>
<ul><li>Dokładamy wszelkich starań, aby Paidsmith był dostępny i bezpieczny, ale nie gwarantujemy nieprzerwanego ani bezbłędnego działania.</li>
<li>Wyświetlane kursy walut mają charakter orientacyjny. To ty odpowiadasz za sprawdzenie kwot, podatków i danych przed wysłaniem faktury.</li>
<li>W zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za szkody pośrednie (takie jak utracone korzyści), a nasza całkowita odpowiedzialność jest ograniczona do kwoty zapłaconej przez ciebie w ciągu ostatnich 12 miesięcy. Żadne z tych postanowień nie ogranicza twoich ustawowych praw jako konsumenta.</li></ul>
<h2>8. Zakończenie korzystania z usługi</h2>
<p>Możesz w każdej chwili przestać korzystać z Paidsmith. Możemy zawiesić konta naruszające niniejszy regulamin. Jeśli zdecydujemy się zamknąć usługę, powiadomimy cię o tym z co najmniej 60-dniowym wyprzedzeniem, aby umożliwić ci pobranie danych.</p>
<h2>9. Zmiany</h2>
<p>Możemy aktualizować niniejszy regulamin. Istotne zmiany są ogłaszane w aplikacji lub e-mailem przed ich wejściem w życie.</p>
<h2>10. Prawo właściwe i spory</h2>
<p>Zastosowanie ma prawo portugalskie, bez uszczerbku dla bezwzględnie obowiązujących przepisów o ochronie konsumentów kraju twojego zamieszkania. Konsumenci mogą także korzystać z instytucji rozstrzygających spory konsumenckie dostępnych w ich kraju.</p>` };
DOCS.privacy.pl = { title: "Polityka prywatności", body: `<h2>1. Administrator</h2>
<p><b>${OP.name}</b>, numer identyfikacji podatkowej ${OP.nif}, ${OP.address}. W sprawie wszelkich pytań dotyczących twoich danych: <a href="mailto:${OP.email}">${OP.email}</a>.</p>
<h2>2. Jakie dane przetwarzamy</h2>
<ul><li><b>Konto:</b> adres e-mail i hasło (przechowywane wyłącznie w postaci skrótu, którego nawet my nie możemy odczytać).</li>
<li><b>Dane, które wprowadzasz:</b> dane twojej firmy, dane twoich klientów, faktury, rachunki bankowe, wydatki i zdjęcia paragonów.</li>
<li><b>Płatności za subskrypcję:</b> okres, kwota, waluta, tytuł płatności i status. Nie przechowujemy danych kart.</li>
<li><b>Wiadomości, które do nas wysyłasz:</b> zgłoszenia błędów, sugestie i pytania (wraz z twoim adresem e-mail) oraz liczba pytań dziennie zadawanych asystentowi AI.</li>
<li><b>Na twoim urządzeniu:</b> kopia twoich danych i zdjęcia oczekujące na przesłanie są przechowywane lokalnie w przeglądarce, aby aplikacja działała offline. Ta kopia jest usuwana z urządzenia po wylogowaniu. Nie używamy reklamowych ani analitycznych plików cookie.</li></ul>
<h2>3. W jakim celu i na jakiej podstawie prawnej</h2>
<ul><li>Aby świadczyć usługę oraz zarządzać twoim kontem i subskrypcją: wykonanie umowy (art. 6 ust. 1 lit. b RODO).</li>
<li>Aby wypełniać obowiązki prawne, takie jak przepisy podatkowe: obowiązek prawny (art. 6 ust. 1 lit. c).</li>
<li>Aby chronić usługę przed nadużyciami i fałszywymi kontami: prawnie uzasadniony interes (art. 6 ust. 1 lit. f).</li></ul>
<h2>4. Kto pomaga nam świadczyć usługę</h2>
<ul><li><b>Supabase</b>: baza danych, uwierzytelnianie i przechowywanie plików, hostowane we Frankfurcie (UE).</li>
<li><b>Brevo</b> (Francja): wysyłanie e-maili z potwierdzeniem konta i resetowaniem hasła oraz wewnętrznych powiadomień dla administratora o płatnościach oczekujących na potwierdzenie i o wiadomościach do pomocy technicznej (zawierają one twój adres e-mail i treść wiadomości).</li>
<li><b>Revolut Bank UAB</b> (Litwa, UE): bank, w którym otrzymujemy płatności za subskrypcję. Gdy płacisz przelewem lub przez link revolut.me, Revolut otrzymuje twoje imię i nazwisko, rachunek, z którego płacisz, kwotę i tytuł płatności. Jeśli płacisz przez link kartą, Apple Pay lub Google Pay, dane te przetwarza Revolut zgodnie z własną polityką prywatności; my nigdy nie widzimy danych karty.</li>
<li><b>GitHub Pages</b> (USA): hosting stron aplikacji; rejestruje techniczne dane dostępu, takie jak adres IP.</li>
<li><b>jsDelivr</b>: dostarczanie bibliotek używanych przez aplikację.</li>
<li><b>Cloudflare Turnstile</b>: ochrona przed botami przy rejestracji i logowaniu.</li>
<li><b>OpenRouter</b> (USA) i dostawca modelu AI: wyłącznie wtedy, gdy korzystasz z asystenta Pomocy. To, co wpisujesz w asystencie, jest do nich wysyłane i może być przechowywane lub wykorzystywane do ulepszania ich modeli. Nie wpisuj w asystencie danych osobowych, danych klientów ani danych bankowych.</li>
<li><b>frankfurter.dev i open.er-api.com</b>: kursy walut; nie są przesyłane żadne dane osobowe.</li></ul>
<p>Jeżeli którakolwiek z tych usług przetwarza dane poza Europejskim Obszarem Gospodarczym, odbywa się to z zabezpieczeniami przewidzianymi w RODO (Ramy ochrony danych UE-USA lub standardowe klauzule umowne). Nie sprzedajemy twoich danych.</p>
<h2>5. Jak długo</h2>
<p>Przez cały czas istnienia twojego konta. Gdy usuniesz konto w aplikacji, twoje dane i pliki są usuwane od razu; żądania wysłane e-mailem są realizowane w ciągu 30 dni. Zachowywane są wyłącznie zapisy potwierdzonych płatności (data, kwota, waluta, tytuł płatności i adres e-mail), ponieważ przepisy podatkowe wymagają od nas ich przechowywania przez okres do 10 lat.</p>
<h2>6. Twoje prawa</h2>
<p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz prawo sprzeciwu. Możesz wyeksportować swoje dane i usunąć konto bezpośrednio w aplikacji (Ustawienia → Moje dane) albo napisać na adres ${OP.email}. Jeśli uważasz, że twoje prawa nie zostały uszanowane, możesz złożyć skargę do portugalskiego organu (<a href="https://www.cnpd.pt" target="_blank" rel="noopener">CNPD</a>) lub do organu ochrony danych w twoim kraju, w Polsce do <a href="https://uodo.gov.pl" target="_blank" rel="noopener">UODO</a> (Prezes Urzędu Ochrony Danych Osobowych).</p>
<h2>7. Bezpieczeństwo</h2>
<p>Połączenia są szyfrowane (HTTPS), każdy użytkownik ma dostęp wyłącznie do własnych danych (reguły egzekwowane na serwerze), a hasła są przechowywane w postaci skrótu.</p>
<h2>8. Dzieci</h2><p>Paidsmith nie jest przeznaczony dla osób poniżej 18 roku życia.</p>
<h2>9. Zmiany</h2><p>Jeśli w istotny sposób zmienimy niniejszą politykę, poinformujemy cię o tym w aplikacji lub e-mailem.</p>` };
const LEGAL_UPD = {"pt": "Última atualização", "es": "Última actualización", "en": "Last updated", "fr": "Dernière mise à jour", "de": "Zuletzt aktualisiert", "it": "Ultimo aggiornamento", "ro": "Ultima actualizare", "tr": "Son güncelleme", "pl": "Ostatnia aktualizacja"};
const LEGAL_LANGS = ["pt", "es", "en", "fr", "de", "it", "ro", "tr", "pl"];
