// Manual da Paidsmith usado pelo assistente de IA. Escrito a partir dos ecrãs reais da app.
// Regra: se uma função não está aqui, a app não a tem.
export const MANUAL = `
# Paidsmith — manual completo

## O que é
A Paidsmith é uma app de faturação para trabalhadores independentes e pequenas empresas: cria faturas em PDF, regista despesas com fotografia do recibo, mostra prazos de pagamento num calendário e faz o resumo do ano. Funciona no navegador do computador, Android e iPhone, e pode ser instalada como app. Idiomas: português, espanhol, inglês, francês, alemão, italiano, romeno, turco e polaco (Definições > Língua da aplicação; também no seletor de língua do ecrã de entrada). Moedas: EUR, GBP, USD, CHF, PLN, RON, TRY, SEK, DKK, NOK, CZK e HUF.

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
- Linhas: descrição, quantidade, preço e moeda (12 moedas) por linha; "+ Linha" para acrescentar.
- Linhas predefinidas: "💾 Guardar estas linhas como predefinidas" guarda as linhas atuais com um nome; podem ficar ligadas a um cliente e entram sozinhas em cada fatura nova desse cliente (só mudas o valor). "📋 Usar linhas predefinidas…" para as pôr à mão. Gerir em Definições > Linhas predefinidas.
- IVA: "Sem IVA" ou "Com IVA" com a taxa em %. A taxa por defeito muda-se em Definições.
- Faturas noutras moedas: opção para mostrar também o total convertido em € (câmbio do dia, BCE) e "Valor a pagar no PDF": só o total convertido em € ou cada moeda à parte. O câmbio é indicativo.
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
Criar com "+". Campos: Empresa, Nome de contacto, Emails (vários, separados por vírgula), Morada e NIF/VAT (opcionais, aparecem no PDF), Língua dos emails e da fatura (uma das 9 línguas da app — o PDF e o email saem nessa língua), Texto do email para este cliente com variáveis {numero} {total} {vencimento} {empresa} {cliente}. Apagar cliente: as faturas ficam sem cliente associado.

## Resumo
Resumo do ano escolhido: Total faturado, Já pago (com %), A receber no prazo, Em atraso, Faturado este mês e Por empresa. Os valores são somados em €; as faturas noutras moedas são convertidas ao câmbio de hoje. O ano conta pela data de emissão.

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
- Moedas: só as 12 da lista (EUR, GBP, USD, CHF, PLN, RON, TRY, SEK, DKK, NOK, CZK, HUF).
Se pedirem algo que não existe: dizer que ainda não existe e sugerir enviar a ideia em Ajuda > Enviar mensagem (Sugestão).

## Contactos
Ajuda > Enviar mensagem (Bug, Sugestão, Pergunta) — resposta pela equipa. Email: davide_sobral@outlook.pt. Termos e Privacidade: links no fundo das Definições.
`;

// Nomes reais dos botões e ecrãs em cada língua (gerado a partir da app).
export const GLOSSARY = `
PT: Faturas = ES: Facturas = EN: Invoices = FR: Factures = DE: Rechnungen = IT: Fatture = RO: Facturi = TR: Faturalar = PL: Faktury
PT: Calendário = ES: Calendario = EN: Calendar = FR: Calendrier = DE: Kalender = IT: Calendario = RO: Calendar = TR: Takvim = PL: Kalendarz
PT: Despesas = ES: Gastos = EN: Expenses = FR: Dépenses = DE: Ausgaben = IT: Spese = RO: Cheltuieli = TR: Giderler = PL: Wydatki
PT: Clientes = ES: Clientes = EN: Clients = FR: Clients = DE: Kunden = IT: Clienti = RO: Clienți = TR: Müşteriler = PL: Klienci
PT: Resumo = ES: Resumen = EN: Summary = FR: Récapitulatif = DE: Übersicht = IT: Riepilogo = RO: Rezumat = TR: Özet = PL: Podsumowanie
PT: Definições = ES: Ajustes = EN: Settings = FR: Paramètres = DE: Einstellungen = IT: Impostazioni = RO: Setări = TR: Ayarlar = PL: Ustawienia
PT: Nova fatura = ES: Nueva factura = EN: New invoice = FR: Nouvelle facture = DE: Neue Rechnung = IT: Nuova fattura = RO: Factură nouă = TR: Yeni fatura = PL: Nowa faktura
PT: ⬇ Descarregar PDF = ES: ⬇ Descargar PDF = EN: ⬇ Download PDF = FR: ⬇ Télécharger le PDF = DE: ⬇ PDF herunterladen = IT: ⬇ Scarica PDF = RO: ⬇ Descarcă PDF = TR: ⬇ PDF indir = PL: ⬇ Pobierz PDF
PT: ✉ Enviar por email = ES: ✉ Enviar por email = EN: ✉ Send by email = FR: ✉ Envoyer par e-mail = DE: ✉ Per E-Mail senden = IT: ✉ Invia per email = RO: ✉ Trimite pe email = TR: ✉ E-postayla gönder = PL: ✉ Wyślij e-mailem
PT: ✉ Abrir Mail só com texto (destinatários preenchidos) = ES: ✉ Abrir Mail solo con texto (destinatarios rellenados) = EN: ✉ Open Mail with text only (recipients pre-filled) = FR: ✉ Ouvrir Mail avec le texte seul (destinataires préremplis) = DE: ✉ Mail nur mit Text öffnen (Empfänger vorausgefüllt) = IT: ✉ Apri Mail solo con il testo (destinatari già inseriti) = RO: ✉ Deschide Mail doar cu text (destinatari completați) = TR: ✉ Mail'i yalnızca metinle aç (alıcılar dolu) = PL: ✉ Otwórz Mail tylko z tekstem (odbiorcy już wpisani)
PT: Marcar PAGA ✓ = ES: Marcar PAGADA ✓ = EN: Mark as PAID ✓ = FR: Marquer comme PAYÉE ✓ = DE: Als BEZAHLT markieren ✓ = IT: Segna come PAGATA ✓ = RO: Marchează ca PLĂTITĂ ✓ = TR: ÖDENDİ olarak işaretle ✓ = PL: Oznacz jako ZAPŁACONA ✓
PT: Marcar NÃO paga = ES: Marcar NO pagada = EN: Mark as UNPAID = FR: Marquer comme IMPAYÉE = DE: Als UNBEZAHLT markieren = IT: Segna come NON PAGATA = RO: Marchează ca NEPLĂTITĂ = TR: ÖDENMEDİ olarak işaretle = PL: Oznacz jako NIEZAPŁACONA
PT: + Linha = ES: + Línea = EN: + Line = FR: + Ligne = DE: + Position = IT: + Riga = RO: + Linie = TR: + Kalem = PL: + Pozycja
PT: 💾 Guardar estas linhas como predefinidas = ES: 💾 Guardar estas líneas como predefinidas = EN: 💾 Save these lines as a preset = FR: 💾 Enregistrer ces lignes comme modèle = DE: 💾 Diese Positionen als Vorlage speichern = IT: 💾 Salva queste righe come predefinite = RO: 💾 Salvează aceste linii ca predefinite = TR: 💾 Bu kalemleri hazır şablon olarak kaydet = PL: 💾 Zapisz te pozycje jako szablon
PT: 📋 Usar linhas predefinidas… = ES: 📋 Usar líneas predefinidas… = EN: 📋 Use preset lines… = FR: 📋 Utiliser des lignes prédéfinies… = DE: 📋 Vorlagenpositionen verwenden… = IT: 📋 Usa righe predefinite… = RO: 📋 Folosește linii predefinite… = TR: 📋 Hazır kalemleri kullan… = PL: 📋 Użyj szablonu pozycji…
PT: ⬇ Recibos das despesas (PDF) = ES: ⬇ Recibos de los gastos (PDF) = EN: ⬇ Expense receipts (PDF) = FR: ⬇ Justificatifs de dépenses (PDF) = DE: ⬇ Ausgabenbelege (PDF) = IT: ⬇ Ricevute delle spese (PDF) = RO: ⬇ Bonurile cheltuielilor (PDF) = TR: ⬇ Gider fişleri (PDF) = PL: ⬇ Paragony wydatków (PDF)
PT: + Juntar despesas por faturar deste cliente ({n}) = ES: + Añadir gastos por facturar de este cliente ({n}) = EN: + Add this client's uninvoiced expenses ({n}) = FR: + Ajouter les dépenses non facturées de ce client ({n}) = DE: + Nicht abgerechnete Ausgaben dieses Kunden hinzufügen ({n}) = IT: + Aggiungi le spese non fatturate di questo cliente ({n}) = RO: + Adaugă cheltuielile nefacturate ale acestui client ({n}) = TR: + Bu müşterinin faturalanmamış giderlerini ekle ({n}) = PL: + Dodaj niezafakturowane wydatki tego klienta ({n})
PT: 📷 Tirar foto ao recibo = ES: 📷 Hacer foto al recibo = EN: 📷 Take photo of receipt = FR: 📷 Photographier le justificatif = DE: 📷 Beleg fotografieren = IT: 📷 Fotografa la ricevuta = RO: 📷 Fă o poză bonului = TR: 📷 Fişin fotoğrafını çek = PL: 📷 Zrób zdjęcie paragonu
PT: 🖼 Escolher da galeria / ficheiro = ES: 🖼 Elegir de la galería / archivo = EN: 🖼 Choose from gallery / file = FR: 🖼 Choisir dans la galerie / un fichier = DE: 🖼 Aus Galerie / Datei wählen = IT: 🖼 Scegli dalla galleria / file = RO: 🖼 Alege din galerie / fișier = TR: 🖼 Galeriden / dosyadan seç = PL: 🖼 Wybierz z galerii / pliku
PT: ☑ Escolher fotos para PDF = ES: ☑ Elegir fotos para PDF = EN: ☑ Pick photos for PDF = FR: ☑ Choisir les photos pour le PDF = DE: ☑ Fotos für PDF auswählen = IT: ☑ Scegli le foto per il PDF = RO: ☑ Alege poze pentru PDF = TR: ☑ PDF için fotoğraf seç = PL: ☑ Wybierz zdjęcia do PDF
PT: ⬇ Fotos desta despesa (PDF) = ES: ⬇ Fotos de este gasto (PDF) = EN: ⬇ Photos of this expense (PDF) = FR: ⬇ Photos de cette dépense (PDF) = DE: ⬇ Fotos dieser Ausgabe (PDF) = IT: ⬇ Foto di questa spesa (PDF) = RO: ⬇ Pozele acestei cheltuieli (PDF) = TR: ⬇ Bu giderin fotoğrafları (PDF) = PL: ⬇ Zdjęcia tego wydatku (PDF)
PT: Marcar PAGA ✓ = ES: Marcar COBRADO ✓ = EN: Mark as PAID ✓ = FR: Marquer comme PAYÉE ✓ = DE: Als BEZAHLT markieren ✓ = IT: Segna come PAGATA ✓ = RO: Marchează ca PLĂTITĂ ✓ = TR: ÖDENDİ olarak işaretle ✓ = PL: Oznacz jako ZAPŁACONY ✓
PT: Por receber = ES: Por cobrar = EN: Owed = FR: Dues = DE: Offen = IT: Da ricevere = RO: De încasat = TR: Alacak = PL: Należne
PT: Pagas = ES: Cobrados = EN: Paid = FR: Payées = DE: Bezahlt = IT: Pagate = RO: Plătite = TR: Ödenmiş = PL: Zapłacone
PT: Minhas (não cobrar) = ES: Míos (no cobrar) = EN: Mine (not charged) = FR: Les miennes (non refacturées) = DE: Eigene (nicht berechnet) = IT: Mie (non addebitate) = RO: Ale mele (nu se refacturează) = TR: Benim (yansıtılmayan) = PL: Moje (bez obciążania)
PT: Todas = ES: Todas = EN: All = FR: Toutes = DE: Alle = IT: Tutte = RO: Toate = TR: Tümü = PL: Wszystkie
PT: Subscrever = ES: Suscribirse = EN: Subscribe = FR: S'abonner = DE: Abonnieren = IT: Abbonati = RO: Abonează-te = TR: Abone ol = PL: Subskrybuj
PT: Já fiz o pagamento = ES: Ya he pagado = EN: I have paid = FR: J'ai payé = DE: Ich habe bezahlt = IT: Ho pagato = RO: Am plătit = TR: Ödemeyi yaptım = PL: Płatność wykonana
PT: Cartão, Apple Pay, Google Pay ou Revolut = ES: Tarjeta, Apple Pay, Google Pay o Revolut = EN: Card, Apple Pay, Google Pay or Revolut = FR: Carte, Apple Pay, Google Pay ou Revolut = DE: Karte, Apple Pay, Google Pay oder Revolut = IT: Carta, Apple Pay, Google Pay o Revolut = RO: Card, Apple Pay, Google Pay sau Revolut = TR: Kart, Apple Pay, Google Pay veya Revolut = PL: Karta, Apple Pay, Google Pay lub Revolut
PT: Ajuda, bugs e sugestões = ES: Ayuda, errores y sugerencias = EN: Help, bugs and ideas = FR: Aide, bugs et idées = DE: Hilfe, Fehler und Ideen = IT: Aiuto, bug e idee = RO: Ajutor, erori și idei = TR: Yardım, hatalar ve fikirler = PL: Pomoc, błędy i pomysły
PT: Enviar = ES: Enviar = EN: Send = FR: Envoyer = DE: Senden = IT: Invia = RO: Trimite = TR: Gönder = PL: Wyślij
PT: Bug = ES: Error = EN: Bug = FR: Bug = DE: Fehler = IT: Bug = RO: Eroare = TR: Hata = PL: Błąd
PT: Sugestão = ES: Sugerencia = EN: Idea = FR: Idée = DE: Idee = IT: Idea = RO: Idee = TR: Fikir = PL: Pomysł
PT: Pergunta = ES: Pregunta = EN: Question = FR: Question = DE: Frage = IT: Domanda = RO: Întrebare = TR: Soru = PL: Pytanie
PT: Ajuda = ES: Ayuda = EN: Help = FR: Aide = DE: Hilfe = IT: Aiuto = RO: Ajutor = TR: Yardım = PL: Pomoc
PT: ✉ Enviar mensagem = ES: ✉ Enviar mensaje = EN: ✉ Send a message = FR: ✉ Envoyer un message = DE: ✉ Nachricht senden = IT: ✉ Invia un messaggio = RO: ✉ Trimite un mesaj = TR: ✉ Mesaj gönder = PL: ✉ Wyślij wiadomość
PT: Prazos de pagamento = ES: Plazos de pago = EN: Payment terms = FR: Conditions de paiement = DE: Zahlungsziele = IT: Termini di pagamento = RO: Termene de plată = TR: Ödeme vadeleri = PL: Terminy płatności
PT: Contas bancárias = ES: Cuentas bancarias = EN: Bank accounts = FR: Comptes bancaires = DE: Bankkonten = IT: Conti bancari = RO: Conturi bancare = TR: Banka hesapları = PL: Konta bankowe
PT: Linhas predefinidas = ES: Líneas predefinidas = EN: Preset lines = FR: Lignes prédéfinies = DE: Vorlagenpositionen = IT: Righe predefinite = RO: Linii predefinite = TR: Hazır kalemler = PL: Szablony pozycji
PT: Mudar password = ES: Cambiar contraseña = EN: Change password = FR: Changer le mot de passe = DE: Passwort ändern = IT: Cambia password = RO: Schimbă parola = TR: Şifreyi değiştir = PL: Zmień hasło
PT: Esqueci-me da password = ES: He olvidado mi contraseña = EN: Forgot password = FR: Mot de passe oublié = DE: Passwort vergessen = IT: Password dimenticata = RO: Am uitat parola = TR: Şifremi unuttum = PL: Nie pamiętam hasła
PT: Criar conta = ES: Crear cuenta = EN: Create account = FR: Créer un compte = DE: Konto erstellen = IT: Crea account = RO: Creează cont = TR: Hesap oluştur = PL: Utwórz konto
PT: Entrar = ES: Entrar = EN: Sign in = FR: Se connecter = DE: Anmelden = IT: Accedi = RO: Conectează-te = TR: Giriş yap = PL: Zaloguj się
PT: Lembrar o meu email = ES: Recordar mi email = EN: Remember my email = FR: Se souvenir de mon e-mail = DE: E-Mail merken = IT: Ricorda la mia email = RO: Ține minte emailul meu = TR: E-postamı hatırla = PL: Zapamiętaj mój e-mail
PT: Língua da aplicação = ES: Idioma de la aplicación = EN: App language = FR: Langue de l'application = DE: App-Sprache = IT: Lingua dell'app = RO: Limba aplicației = TR: Uygulama dili = PL: Język aplikacji
PT: Os teus dados (aparecem em todos os PDFs) = ES: Tus datos (aparecen en todos los PDF) = EN: Your details (shown on every PDF) = FR: Vos coordonnées (affichées sur chaque PDF) = DE: Ihre Daten (erscheinen auf jedem PDF) = IT: I tuoi dati (compaiono in ogni PDF) = RO: Datele tale (apar pe fiecare PDF) = TR: Bilgileriniz (her PDF'te görünür) = PL: Twoje dane (widoczne na każdym PDF)
PT: Prazo de pagamento = ES: Plazo de pago = EN: Payment terms = FR: Conditions de paiement = DE: Zahlungsziel = IT: Termini di pagamento = RO: Termen de plată = TR: Ödeme vadesi = PL: Termin płatności
PT: Mostrar também o total convertido em € (câmbio de hoje) = ES: Mostrar también el total convertido a € (cambio de hoy) = EN: Also show the total converted to € (today's rate) = FR: Afficher aussi le total converti en € (taux du jour) = DE: Gesamtbetrag zusätzlich in € anzeigen (heutiger Kurs) = IT: Mostra anche il totale convertito in € (cambio di oggi) = RO: Afișează și totalul convertit în € (cursul de azi) = TR: € cinsine çevrilmiş toplamı da göster (bugünkü kur) = PL: Pokaż też sumę przeliczoną na € (dzisiejszy kurs)
PT: Valor a pagar no PDF = ES: Importe a pagar en el PDF = EN: Amount due on the PDF = FR: Montant dû sur le PDF = DE: Fälliger Betrag im PDF = IT: Importo da pagare nel PDF = RO: Suma de plată pe PDF = TR: PDF'teki ödenecek tutar = PL: Kwota do zapłaty w PDF
PT: Conta bancária para receber (aparece no PDF) = ES: Cuenta bancaria para cobrar (aparece en el PDF) = EN: Bank account to receive payment (shown on the PDF) = FR: Compte bancaire de réception du paiement (affiché sur le PDF) = DE: Bankkonto für den Zahlungseingang (erscheint im PDF) = IT: Conto bancario per ricevere il pagamento (compare nel PDF) = RO: Contul bancar pentru încasare (apare pe PDF) = TR: Ödemenin alınacağı banka hesabı (PDF'te görünür) = PL: Konto bankowe do otrzymania płatności (widoczne w PDF)
PT: 🧾 Criar fatura com {n} despesas por faturar = ES: 🧾 Crear factura con {n} gastos por facturar = EN: 🧾 Create invoice with {n} uninvoiced expenses = FR: 🧾 Créer une facture avec {n} dépenses non facturées = DE: 🧾 Rechnung mit {n} nicht abgerechneten Ausgaben erstellen = IT: 🧾 Crea fattura con {n} spese non fatturate = RO: 🧾 Creează factură cu {n} cheltuieli nefacturate = TR: 🧾 Faturalanmamış giderlerle fatura oluştur ({n}) = PL: 🧾 Utwórz fakturę z niezafakturowanych wydatków ({n})
PT: Juntar despesas às faturas = ES: Añadir gastos a las facturas = EN: Add expenses to invoices = FR: Ajouter les dépenses aux factures = DE: Ausgaben zu Rechnungen hinzufügen = IT: Aggiungi le spese alle fatture = RO: Adaugă cheltuielile pe facturi = TR: Giderleri faturalara ekle = PL: Dodawaj wydatki do faktur
PT: Língua dos emails e da fatura = ES: Idioma de los emails y de la factura = EN: Language for emails and the invoice = FR: Langue des e-mails et de la facture = DE: Sprache für E-Mails und Rechnung = IT: Lingua delle email e della fattura = RO: Limba emailurilor și a facturii = TR: E-postaların ve faturanın dili = PL: Język e-maili i faktury
PT: Texto do email para este cliente (escreves uma vez, fica gravado) = ES: Texto del email para este cliente (lo escribes una vez y queda guardado) = EN: Email text for this client (write it once, it stays saved) = FR: Texte de l'e-mail pour ce client (à écrire une fois, il reste enregistré) = DE: E-Mail-Text für diesen Kunden (einmal schreiben, bleibt gespeichert) = IT: Testo dell'email per questo cliente (lo scrivi una volta e resta salvato) = RO: Textul emailului pentru acest client (îl scrii o dată și rămâne salvat) = TR: Bu müşteri için e-posta metni (bir kez yazın, kayıtlı kalır) = PL: Treść e-maila dla tego klienta (napisz raz, zostanie zapisana)
PT: Resumo do ano = ES: Resumen del año = EN: Year summary = FR: Récapitulatif de l'année = DE: Jahresübersicht = IT: Riepilogo dell'anno = RO: Rezumatul anului = TR: Yıllık özet = PL: Podsumowanie roku
PT: Moeda = ES: Moneda = EN: Currency = FR: Devise = DE: Währung = IT: Valuta = RO: Monedă = TR: Para birimi = PL: Waluta
PT: Ver o tutorial outra vez = ES: Ver el tutorial otra vez = EN: Show the tutorial again = FR: Revoir le tutoriel = DE: Tutorial erneut anzeigen = IT: Mostra di nuovo il tutorial = RO: Arată din nou tutorialul = TR: Eğitimi yeniden göster = PL: Pokaż samouczek ponownie
`;
