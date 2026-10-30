/**
 * Áreas de atuação do escritório.
 * `icon` referencia uma das chaves exportadas por components/icons.tsx.
 * `summary` é usado em cards/resumos (Home); `description` é o texto
 * completo exibido em /areas-de-atuacao.
 */

export type Area = {
  slug: string;
  title: string;
  icon: "scale" | "chart" | "shield" | "family" | "building" | "gavel" | "pulse" | "document";
  summary: string;
  description: string;
};

export const AREAS: Area[] = [
  {
    slug: "auxilio-acidente",
    title: "Auxílio-Acidente",
    icon: "shield",
    summary:
      "Indenização mensal do INSS para quem ficou com sequela permanente após um acidente.",
    description:
      "O auxílio-acidente é pago pelo INSS ao segurado que, depois de um acidente de qualquer natureza — no trabalho, no trânsito, em casa ou no lazer —, ficou com uma sequela permanente que reduz a capacidade para o trabalho que exercia. O benefício tem caráter indenizatório: pode ser recebido junto com o salário, não exige carência e é pago até a aposentadoria. Analisamos o histórico do acidente, os laudos e o período de afastamento para identificar o direito e conduzir o pedido no INSS ou na Justiça, inclusive quanto aos valores atrasados.",
  },
  {
    slug: "auxilio-doenca",
    title: "Auxílio-Doença",
    icon: "pulse",
    summary:
      "Benefício por incapacidade temporária para quem precisa se afastar do trabalho.",
    description:
      "Hoje chamado de benefício por incapacidade temporária, o auxílio-doença é devido ao segurado que fica incapaz para o trabalho por mais de 15 dias em razão de doença ou acidente. Atuamos na organização da documentação médica, no acompanhamento da perícia, em pedidos de prorrogação e em recursos e ações judiciais quando o benefício é negado ou cessado indevidamente.",
  },
  {
    slug: "aposentadoria-por-invalidez",
    title: "Aposentadoria por Invalidez",
    icon: "scale",
    summary:
      "Aposentadoria por incapacidade permanente para quem não pode mais trabalhar.",
    description:
      "A aposentadoria por incapacidade permanente — antiga aposentadoria por invalidez — é concedida ao segurado considerado definitivamente incapaz para qualquer atividade que lhe garanta o sustento. Avaliamos o quadro de saúde e o histórico contributivo, orientamos sobre a perícia e buscamos a concessão ou a conversão do auxílio-doença em aposentadoria, além do adicional de 25% nos casos em que o segurado precisa de assistência permanente de outra pessoa.",
  },
  {
    slug: "bpc-loas",
    title: "BPC/LOAS",
    icon: "family",
    summary:
      "Benefício de um salário mínimo para idosos e pessoas com deficiência de baixa renda.",
    description:
      "O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo mensal à pessoa idosa a partir de 65 anos ou à pessoa com deficiência, em ambos os casos com renda familiar baixa — mesmo sem contribuição ao INSS. Orientamos sobre os requisitos de renda e de deficiência, a inscrição no CadÚnico e a condução do pedido e de eventuais recursos.",
  },
  {
    slug: "revisao-de-beneficios",
    title: "Revisão de Benefícios",
    icon: "document",
    summary:
      "Análise do cálculo de benefícios já concedidos em busca de erros e diferenças.",
    description:
      "Benefícios concedidos pelo INSS podem conter erros de cálculo, períodos de contribuição não considerados ou regras aplicadas de forma desfavorável. Fazemos a análise técnica da carta de concessão e do histórico contributivo para identificar se há revisão cabível, sempre observando os prazos legais, e buscamos a correção do valor e o pagamento das diferenças.",
  },
  {
    slug: "recursos-e-acoes-contra-o-inss",
    title: "Recursos e Ações contra o INSS",
    icon: "gavel",
    summary:
      "Atuação quando o benefício é negado, cortado ou demora para ser analisado.",
    description:
      "Quando o INSS nega um pedido, cessa um benefício ou ultrapassa o prazo de análise, é possível recorrer administrativamente ao Conselho de Recursos da Previdência Social ou ingressar com ação judicial. Avaliamos o motivo da negativa, reunimos as provas necessárias e conduzimos o caminho mais adequado para cada situação.",
  },
];
