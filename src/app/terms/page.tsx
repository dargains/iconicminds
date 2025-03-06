import { NextPage } from "next";
import Image from "next/image";
import styles from "./page.module.css";

const Page: NextPage = () => (
  <main className={styles.container}>
    <div className={styles.wrapper}>
      <Image
        src="/logo white.svg"
        alt="Iconic Minds"
        width={227}
        height={50}
        className={styles.logo}
      />
      <h1 className={styles.heading}>Política de Privacidade</h1>
      <div>
        <h2>Introdução</h2>
        <p>
          Esta Política de Privacidade descreve como recolhemos, utilizamos e
          protegemos os dados pessoais dos participantes no ‘Viver com
          Entusiasmo’, em conformidade com o Regulamento Geral sobre a Proteção
          de Dados (RGPD) e demais legislação aplicável.
        </p>

        <h2>Dados Recolhidos</h2>
        <p>
          No momento da inscrição e durante a participação no evento, poderemos
          recolher os seguintes dados pessoais:
        </p>
        <ul>
          <li>Nome completo;</li>
          <li>Endereço de e-mail;</li>
          <li>Número de telefone;</li>
          <li>Outros dados relevantes para a organização do evento.</li>
        </ul>

        <h2>Finalidade do Tratamento de Dados</h2>
        <p>Os dados recolhidos destinam-se a:</p>
        <ul>
          <li>Gerir as inscrições e a logística do evento;</li>
          <li>
            Comunicar informações importantes sobre o evento e eventuais
            alterações;
          </li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>
            Melhorar futuras edições do evento, com base em avaliações e
            feedback dos participantes.
          </li>
        </ul>

        <h2>Partilha de Dados</h2>
        <ul>
          <li>
            Os dados dos participantes não serão vendidos ou partilhados com
            terceiros para fins comerciais.
          </li>
          <li>
            Podemos partilhar alguns dados com prestadores de serviços
            essenciais ao evento (ex.: plataformas de emissão de bilhetes ou
            segurança), garantindo que cumprem as normas de proteção de dados.
          </li>
          <li>
            Em casos exigidos por lei, os dados poderão ser fornecidos às
            autoridades competentes.
          </li>
        </ul>

        <h2>Armazenamento e Segurança</h2>
        <ul>
          <li>
            Os dados serão armazenados em servidores seguros e acessíveis apenas
            por pessoal autorizado.
          </li>
          <li>
            O período de retenção será de [X] anos, salvo obrigação legal em
            contrário.
          </li>
          <li>
            Implementamos medidas técnicas e organizacionais adequadas para
            proteger os dados contra acessos não autorizados, perdas ou
            destruição.
          </li>
        </ul>

        <h2>Direitos dos Participantes</h2>
        <p>Os participantes podem exercer os seguintes direitos:</p>
        <ul>
          <li>
            <strong>Direito de Acesso:</strong> Solicitar uma cópia dos dados
            pessoais armazenados;
          </li>
          <li>
            <strong>Direito de Retificação:</strong> Corrigir informações
            incorretas ou incompletas;
          </li>
          <li>
            <strong>Direito ao Apagamento:</strong> Solicitar a eliminação dos
            dados quando deixarem de ser necessários para as finalidades
            descritas;
          </li>
          <li>
            <strong>Direito de Oposição:</strong> Contestar a utilização dos
            dados para determinadas finalidades;
          </li>
          <li>
            <strong>Direito à Portabilidade:</strong> Receber os dados num
            formato estruturado e legível para transferência para outro
            responsável pelo tratamento;
          </li>
          <li>
            <strong>Direito de Reclamação:</strong> Apresentar reclamação junto
            da autoridade de controlo de proteção de dados.
          </li>
        </ul>
      </div>
      <footer>© Iconic Minds 2024</footer>
    </div>
  </main>
);

export default Page;
