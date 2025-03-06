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
          A nossa plataforma tem como objetivo permitir a inscrição para o
          ‘Viver com entusiasmo’. Ao submeter a sua inscrição, aceita os
          presentes Termos e Condições. Caso não concorde, por favor, não
          prossiga com a inscrição.
        </p>

        <h2>Condições de Participação</h2>
        <ul>
          <li>
            A inscrição no evento é pessoal e intransmissível e só será válida
            após a confirmação da organização.
          </li>
          <li>
            Os participantes são responsáveis por fornecer informações
            verdadeiras e atualizadas no momento da inscrição.
          </li>
          <li>
            O não cumprimento das regras do evento pode resultar na exclusão do
            participante sem direito a reembolso.
          </li>
        </ul>

        <h2>Cancelamento e Reembolsos</h2>
        <ul>
          <li>
            O cancelamento da inscrição deve ser solicitado através dos
            contactos disponibilizados pela organização.
          </li>
          <li>
            Em caso de não comparência ao evento, o participante não terá
            direito a qualquer compensação.
          </li>
        </ul>

        <h2>Alterações ao Evento</h2>
        <ul>
          <li>
            Os organizadores reservam-se o direito de alterar a data, local ou
            formato do evento por motivos de força maior, razões de segurança ou
            outras circunstâncias imprevistas.
          </li>
          <li>
            Os inscritos serão informados com antecedência sempre que possível
            e, quando aplicável, terão direito a opção de participar em nova
            data.
          </li>
        </ul>

        <h2>Responsabilidade</h2>
        <ul>
          <li>
            Os organizadores não se responsabilizam por danos, perdas ou
            acidentes ocorridos durante o evento, salvo nos casos previstos por
            lei.
          </li>
          <li>
            Os participantes devem seguir as instruções dos organizadores e
            respeitar todas as normas de segurança aplicáveis, incluindo normas
            sanitárias em vigor.
          </li>
          <li>
            O participante assume total responsabilidade por quaisquer danos
            causados a terceiros ou ao local do evento durante a sua
            participação.
          </li>
        </ul>

        <h2>Dados Pessoais</h2>
        <ul>
          <li>
            A recolha e processamento dos dados dos participantes será feita de
            acordo com a nossa Política de Privacidade.
          </li>
          <li>
            Os dados serão utilizados exclusivamente para efeitos de inscrição,
            gestão e comunicação relativa ao evento, bem como para o envio de
            informações sobre futuras edições, salvo indicação em contrário do
            participante.
          </li>
        </ul>

        <h2>Disposições Finais</h2>
        <ul>
          <li>
            Estes Termos e Condições podem ser atualizados sem aviso prévio,
            sendo a versão mais recente sempre publicada na nossa plataforma.
          </li>
          <li>
            Qualquer litígio decorrente da interpretação ou execução destes
            Termos será resolvido nos tribunais da comarca onde se situa a sede
            do organizador.
          </li>
        </ul>
      </div>
      <footer>© Iconic Minds 2024</footer>
    </div>
  </main>
);

export default Page;
