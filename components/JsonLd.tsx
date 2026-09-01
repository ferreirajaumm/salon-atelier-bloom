// Troque por o dominio proprio quando registrar (ex: https://todcachos.pt)
export const SITE_URL = 'https://todcachos.pt';

const hairSalon = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': `${SITE_URL}/#salon`,
  name: 'TÔDCACHOS',
  description:
    'Atelier especializado em cabelos cacheados, crespos e afros em Lisboa. Cortes, madeixas, tratamentos e finalizacao que respeitam a curvatura natural.',
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-poster.jpg`,
  logo: `${SITE_URL}/images/logo-todcachos.png`,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  telephone: '+351925515466',
  areaServed: [
    { '@type': 'City', name: 'Quinta do Conde' },
    { '@type': 'City', name: 'Setúbal' },
    { '@type': 'City', name: 'Lisboa' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua das Descobertas 3053',
    postalCode: '2975-350',
    addressLocality: 'Quinta do Conde',
    addressCountry: 'PT',
  },
  founder: { '@id': `${SITE_URL}/#lina` },
  sameAs: [
    'https://instagram.com/todcachos.pt',
    'https://tiktok.com/@todcachos.pt',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  knowsAbout: [
    'Cabelos cacheados',
    'Cabelos crespos',
    'Cabelos afro',
    'Corte de cachos',
    'Coloracao',
    'Tratamento capilar',
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corte para Cacheados, Crespos e Afros' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Madeixas & Iluminados de Autor' } },
    { '@type': 'Offer', price: '40', priceCurrency: 'EUR', itemOffered: { '@type': 'Service', name: 'Cachoterapia' } },
    { '@type': 'Offer', price: '70', priceCurrency: 'EUR', itemOffered: { '@type': 'Service', name: 'Powerterapia' } },
    { '@type': 'Offer', price: '45', priceCurrency: 'EUR', itemOffered: { '@type': 'Service', name: 'Chaterapia' } },
    { '@type': 'Offer', price: '30', priceCurrency: 'EUR', itemOffered: { '@type': 'Service', name: 'Definicao & Finalizacao' } },
  ],
};

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#lina`,
  name: 'Lina Pinho',
  jobTitle: 'Cabeleireira especialista em cabelos cacheados, crespos e afros',
  worksFor: { '@id': `${SITE_URL}/#salon` },
  image: `${SITE_URL}/images/canva-img-1.jpg`,
  description:
    'Mais de 25 anos de experiencia. Especialista em loiros por 15 anos, dedica a carreira a fortalecer a autoestima afro atraves de atendimento humanizado e tratamentos personalizados para cada tipo de cabelo.',
  knowsAbout: ['Cabelos cacheados', 'Cabelos crespos', 'Cabelos afro', 'Coloracao', 'Tratamentos capilares'],
};

const faq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A TÔDCACHOS atende cabelos cacheados, crespos e afros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A TÔDCACHOS e um atelier especializado exclusivamente em cabelos cacheados, crespos e afros, com tecnicas que respeitam a curvatura natural de cada fio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Onde fica o atelier TÔDCACHOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O atelier fica em Lisboa, Portugal. O atendimento e por marcacao previa, de terca a sabado, das 09:00 as 19:00.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto custa a Cachoterapia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Cachoterapia custa a partir de 40€ e dura cerca de 60 minutos. Os valores podem variar conforme a quantidade e o comprimento do cabelo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como marcar horario na TÔDCACHOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As marcacoes sao feitas por telefone ou WhatsApp. Recomendamos agendamento previo para garantir um diagnostico capilar personalizado.',
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalon) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
