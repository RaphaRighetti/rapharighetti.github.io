const allCurrencies = {
  'Afegane': 'AFN',
  'Dinar bareinita': 'BHD',
  'Dirrã dos Emirados Árabes Unidos': 'AED',
  'Dólar australiano': 'AUD',
  'Dólar barbadense' : 'BBD',
  'Dólar dos Estados Unidos': 'USD',
  'Dram armênio': 'AMD',
  'Florim das Antilhas Holandesas': 'ANG',
  'Florim arubano': 'AWG',
  'Kwanza angolano': 'AOA',
  'Lek albanês': 'ALL',
  'Lev búlgaro': 'BGN',
  'Manate azeri': 'AZN',
  'Marco conversível da Bósnia e Herzegovina': 'BAM',
  'Peso argentino': 'ARS',
  'Real brasileiro': 'BRL',
  'Taka bengali': 'BDT',
  'Franco burundiano': 'BIF',
  'Dólar bermudense': 'BMD',
  'Binance Coin': 'BND',
  'Boliviano da Bolívia': 'BOB',
  'Dólar bahamense': 'BSD',
  'Bitcoin': 'BTC',
  'Ngultrum butanês': 'BTN',
  'Pula botsuanesa': 'BWP',
  'Rublo bielorrusso': 'BYN',
  'Dólar belizenho': 'BZD',
  'Dólar canadense': 'CAD',
  'Franco congolês': 'CDF',
  'Franco suíço': 'CHF',
  'Unidades de Fomento chilenas': 'CLF',
  'Peso chileno': 'CLP',
  'Yuan chinês': 'CNH',
  'Renminbi': 'CNY',
  'Peso colombiano': 'COP',
  'Cólon': 'CRC',
  'Peso convertível': 'CUC',
  'Peso cubano': 'CUP',
  'Escudo cabo-verdiano': 'CVE',
  'Coroa tcheca': 'CZK',
  'Franco do Djibouti': 'DJF',
  'Coroa dinamarquesa': 'DKK',
  'Peso dominicano': 'DOP',
  'Dinar argelino': 'DZD',
  'Libra egípcia': 'EGP',
  'Ethernity': 'ERN',
  'Birr etíope': 'ETB',
  'Euro': 'EUR',
  'Dólar fijiano': 'FJD',
  'Libra das Ilhas Malvinas': 'FKP',
  'Libra esterlina': 'GBP',
  'Lari georgiano': 'GEL',
  'Libra de Guernsey': 'GGP',
  'Cedi ganês': 'GHS',
  'Libra de Gibraltar': 'GIP',
  'Dalasi gambiano': 'GMD',
  'Franco guineano': 'GNF',
  'Quetzal guatemalteco': 'GTQ',
  'Dólar guianense': 'GYD',
  'Dólar de Hong Kong': 'HKD',
  'Lempira hondurenha': 'HNL',
  'Kuna croata': 'HRK',
  'Gourde haitiano': 'HTG',
  'Florim húngaro': 'HUF',
  'Rupia indonésia': 'IDR',
  'Novo shekel israelense': 'ILS',
  'Libra manesa': 'IMP',
  'Rupia indiana': 'INR',
  'Dinar iraquiano': 'IQD',
  'Rial iraniano': 'IRR',
  'Coroa islandesa': 'ISK',
  'Libra de Jersey': 'JEP',
  'Dólar jamaicano': 'JMD',
  'Dinar jordaniano': 'JOD',
  'Iene japonês': 'JPY',
  'Xelim queniano': 'KES',
  'Som quirguiz': 'KGS',
  'Riel': 'KHR',
  'Franco comoriano': 'KMF',
  'Won norte-coreano': 'KPW',
  'Won sul-coreano': 'KRW',
  'Dinar kuwaitiano': 'KWD',
  'Dólar das Ilhas Cayman': 'KYD',
  'Tenge cazaque': 'KZT',
  'Kip laosiano': 'LAK',
  'Libra libanesa': 'LBP',
  'Rupia cingalesa': 'LKR',
  'Dólar liberiano': 'LRD',
  'Loti lesotiano': 'LSL',
  'Dinar líbio': 'LYD',
  'Dirrã marroquino': 'MAD',
  'Leu moldávio': 'MDL',
  'Ariary malgaxe': 'MGA',
  'Dinar macedônio': 'MKD',
  'Quiate': 'MMK',
  'Tugrik da Mongólia': 'MNT',
  'Pataca': 'MOP',
  'Ouguiya mauritana': 'MRU',
  'Rupia mauriciana': 'MUR',
  'Rupia maldívia': 'MVR',
  'Kwacha malauiana': 'MWK',
  'Peso mexicano': 'MXN',
  'Ringgit malaio': 'MYR',
  'Metical moçambicano': 'MZN',
  'Dólar namibiano': 'NAD',
  'Naira nigeriana': 'NGN',
  'Córdoba nicaraguense': 'NIO',
  'Coroa norueguesa': 'NOK',
  'Rupia nepalesa': 'NPR',
  'Dólar neozelandês': 'NZD',
  'Rial omanense': 'OMR',
  'Balboa panamenho': 'PAB',
  'Novo sol peruano': 'PEN',
  'Kina papuásia': 'PGK',
  'Peso filipino': 'PHP',
  'Rúpia paquistanesa': 'PKR',
  'Zloty polonês': 'PLN',
  'Guarani paraguaio': 'PYG',
  'Rial catariano': 'QAR',
  'Leu romeno': 'RON',
  'Dinar sérvio': 'RSD',
  'Rublo russo': 'RUB',
  'Franco ruandês': 'RWF',
  'Riyal saudita': 'SAR',
  'Dólar das Ilhas Salomão': 'SBD',
  'Rupia das Seychelles': 'SCR',
  'Libra sudanesa': 'SDG',
  'Coroa sueca': 'SEK',
  'Dólar singapuriano': 'SGD',
  'Libra de Santa Helena': 'SHP',
  'Leone de Serra Leoa': 'SLL',
  'Xelim somali': 'SOS',
  'Dólar surinamês': 'SRD',
  'Libra sul-sudanesa': 'SSP',
  'Dobra são-tomense (obsoleta)': 'STD',
  'Dobra são-tomense': 'STN',
  'Colom salvadorenho': 'SVC',
  'Libra síria': 'SYP',
  'Lilangeni suazi': 'SZL',
  'Baht tailandês': 'THB',
  'Somoni': 'TJS',
  'Manat turcomano': 'TMT',
  'Dinar tunisiano': 'TND',
  'Tonga': 'TOP',
  'Lira turca': 'TRY',
  'Dólar de Trinidad e Tobago': 'TTD',
  'Novo dólar taiwanês': 'TWD',
  'Xelim tanzaniano': 'TZS',
  'Hryvnia ucraniano': 'UAH',
  'Xelim ugandês': 'UGX',
  'Peso uruguaio': 'UYU',
  'Som uzbeque': 'UZS',
  'Bolívar venezuelano': 'VES',
  'Dong vietnamita': 'VND',
  'Vatu de Vanuatu': 'VUV',
  'Tala samoana': 'WST',
  'Franco CFA Centra': 'XAF',
  'Prata': 'XAG',
  'Ouro': 'XAU',
  'Dólar do Caribe Oriental': 'XCD',
  'Direitos de saque especiais do FMI': 'XDR',
  'Franco CFA ocidental': 'XOF',
  'PetroDollar': 'XPD',
  'Franco CFP': 'XPF',
  'Platina': 'XPT',
  'Rial iemenita': 'YER',
  'Rand sul-africano': 'ZAR',
  'Kwacha zambiano': 'ZMW',
  'Dólar zimbabuense': 'ZWL',
};

const objKeys = Object.keys(allCurrencies);

console.log(allCurrencies);
