import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './components/Logo';

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

function LegalLayout({ title, children }: LegalLayoutProps) {
  useEffect(() => {
    document.title = `${title} | Amplia Solutions`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="min-h-screen bg-[#0a0b0e] text-gray-100">
      <header className="border-b border-white/10 bg-[#0f1115]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5">
          <Link to="/" className="inline-flex items-center" aria-label="Amplia - inicio">
            <Logo className="h-9 md:h-10 cursor-pointer" />
          </Link>
          <Link to="/" className="text-sm font-bold text-[#6BBF3E] hover:underline">
            {'<- Voltar'}
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h1 className="mb-8 text-3xl font-max font-bold text-[#6BBF3E] md:text-4xl">{title}</h1>
        <div className="space-y-8 rounded-3xl border border-white/10 bg-[#12141a] p-8 leading-relaxed text-gray-300">
          {children}
        </div>
      </main>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout title="Politica de Privacidade">
      <section>
        <h2 className="mb-2 text-xl font-bold text-white">1. Responsavel pelo Tratamento</h2>
        <p>Amplia Solutions, Agualva-Cacem, Portugal.</p>
        <p>Email: ampliasolutions.pt@gmail.com</p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">2. Dados Pessoais Recolhidos</h2>
        <p>Podemos recolher os seguintes dados:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Nome</li>
          <li>Email</li>
          <li>Mensagens enviadas no formulario de contacto</li>
          <li>Dados de utilizacao tecnica e analitica do website</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">3. Finalidade e Base Legal</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>Responder a pedidos de contacto - diligencias pre-contratuais e interesse legitimo.</li>
          <li>Prestacao e melhoria de servicos digitais - execucao contratual e interesse legitimo.</li>
          <li>Cumprimento de obrigacoes legais - cumprimento de obrigacao juridica.</li>
          <li>Comunicacoes comerciais, quando aplicavel - consentimento.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">4. Prazo de Conservacao</h2>
        <p>
          Os dados sao conservados apenas pelo periodo necessario para as finalidades indicadas, nomeadamente enquanto
          existir relacao contratual, obrigacao legal de arquivo, ou ate retirada de consentimento quando aplicavel.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">5. Direitos do Titular</h2>
        <p>Nos termos do RGPD/GDPR, pode exercer os direitos de:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Acesso</li>
          <li>Rectificacao</li>
          <li>Apagamento</li>
          <li>Limitacao do tratamento</li>
          <li>Portabilidade</li>
          <li>Oposicao</li>
          <li>Retirada de consentimento, quando aplicavel</li>
        </ul>
        <p>Para exercer direitos, contacte: ampliasolutions.pt@gmail.com.</p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">6. Transferencias Internacionais</h2>
        <p>
          Em caso de transferencias para fora do EEE, sao aplicadas salvaguardas adequadas, incluindo clausulas
          contratuais-tipo da Comissao Europeia ou mecanismos legalmente equivalentes.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">7. Cookies</h2>
        <p>
          Utilizamos cookies essenciais e, mediante consentimento, cookies funcionais e analiticos. Consulte a nossa
          Politica de Cookies em <Link to="/cookies" className="text-[#6BBF3E] hover:underline">/cookies</Link>.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">8. Autoridade de Controlo</h2>
        <p>
          Pode apresentar reclamacao junto da CNPD - Comissao Nacional de Protecao de Dados:
          <a className="ml-1 text-[#6BBF3E] hover:underline" href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>.
        </p>
      </section>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Termos e Condicoes">
      <section>
        <h2 className="mb-2 text-xl font-bold text-white">1. Identificacao</h2>
        <p>Amplia Solutions, com sede em Agualva-Cacem, Portugal, email ampliasolutions.pt@gmail.com.</p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">2. Servicos</h2>
        <p>A Amplia disponibiliza servicos e produtos digitais, incluindo:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Responder Ja</li>
          <li>Lia</li>
          <li>Amplia Home Studio</li>
          <li>OpsFlow</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">3. Condicoes de Uso e Subscricao</h2>
        <p>
          O utilizador compromete-se a usar os servicos de forma licita. Planos de subscricao podem incluir limites,
          condicoes de uso e regras de renovacao automatica descritas no momento de adesao.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">4. Precos e Pagamentos</h2>
        <p>
          Os precos apresentados incluem a informacao comercial disponivel no momento de contratacao. Os pagamentos
          sao processados por fornecedores terceiros, incluindo Stripe, sob os respetivos termos e politicas.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">5. Cancelamento e Reembolso</h2>
        <p>
          Consumidores da UE beneficiam, quando legalmente aplicavel, de direito de arrependimento de 14 dias.
          Podem existir excecoes legais para conteudos/servicos digitais iniciados com consentimento expresso.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">6. Limitacao de Responsabilidade</h2>
        <p>
          A Amplia nao se responsabiliza por danos indiretos, lucros cessantes ou indisponibilidades de terceiros,
          salvo nos casos de dolo ou culpa grave e dentro dos limites legais aplicaveis.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">7. Lei Aplicavel</h2>
        <p>Os presentes termos regem-se pela lei portuguesa.</p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">8. Resolucao de Litigios</h2>
        <p>
          Em caso de litigo de consumo, pode recorrer ao Centro de Arbitragem de Conflitos de Consumo de Lisboa:
          <a className="ml-1 text-[#6BBF3E] hover:underline" href="https://www.centroarbitragemlisboa.pt" target="_blank" rel="noopener noreferrer">www.centroarbitragemlisboa.pt</a>.
        </p>
      </section>
    </LegalLayout>
  );
}

export function CookiesPage() {
  return (
    <LegalLayout title="Politica de Cookies">
      <section>
        <h2 className="mb-2 text-xl font-bold text-white">1. O que sao cookies</h2>
        <p>
          Cookies sao pequenos ficheiros de texto guardados no dispositivo do utilizador para melhorar a experiencia
          de navegacao e garantir funcionalidades tecnicas.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">2. Tipos de cookies utilizados</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Essenciais:</strong> necessarios para funcionamento basico do site.</li>
          <li><strong>Funcionais:</strong> memorizam preferencias (ex.: idioma, experiencia de utilizador).</li>
          <li><strong>Analiticos:</strong> medem utilizacao e performance para melhoria continua.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">3. Finalidade e duracao</h2>
        <p>
          Cookies essenciais sao mantidos pelo periodo estritamente necessario. Cookies funcionais/analiticos podem
          ser de sessao ou persistentes, com duracao limitada e proporcional a finalidade.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">4. Gestao e desativacao</h2>
        <p>
          Pode gerir ou remover cookies nas definicoes do browser (Chrome, Firefox, Safari, Edge). A desativacao de
          cookies nao essenciais nao impede o acesso ao site, mas pode reduzir funcionalidades.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-bold text-white">5. Conformidade ePrivacy e RGPD</h2>
        <p>
          O tratamento de cookies e realizado em conformidade com a ePrivacy Directive e com o RGPD/GDPR, garantindo
          informacao clara e opcao de consentimento para categorias nao essenciais.
        </p>
      </section>
    </LegalLayout>
  );
}
