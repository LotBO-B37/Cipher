export const cipherMeta = {
  title: 'The Cipher',
  subtitle: 'A Working Glossary of Original Concepts',
  author: 'Rob Dawson',
  edition: 'Expanded Edition V18',
  date: 'May 2026',
  siteLabel: 'cipherarchive.org',
  counts: {
    entries: 62,
    clusters: 5,
    generativeMechanisms: 6
  },
  funding: {
    raised: 0,
    goal: 25000
  },
  clusters: [
    {
      id: '01',
      name: 'Extraction Architectures',
      question: 'What do working-class environments actually teach?'
    },
    {
      id: '02',
      name: 'Knowledge Systems',
      question: 'How does working-class cognitive capability build itself?'
    },
    {
      id: '03',
      name: 'Cognitive Architecture',
      question: 'How does presence haunt institutions?'
    },
    {
      id: '04',
      name: 'Power Time',
      question: 'Why can’t organisations see living competency?'
    },
    {
      id: '05',
      name: 'Institutional Dynamics',
      question: 'How do institutions domesticate what they cannot see?'
    }
  ],
  mechanisms: [
    'Atmospheric Literacy',
    'Osmotic Capital',
    'Osmotic Transfer',
    'Relational Curiosity',
    'Passing Places',
    'Social Floor'
  ]
} as const;

export type CipherEntry = {
  slug: string;
  title: string;
  cluster: string;
  kind?: string;
  deck: string;
  body: string[];
  pairs?: string[];
  theories?: string[];
  note?: string;
  badge?: string;
};

export const cipherEntries: CipherEntry[] = [
  {
    slug: 'alpha-induced-ignorance',
    title: 'Alpha-Induced Ignorance',
    cluster: 'Extraction Architectures',
    kind: 'structural condition',
    deck: 'The ignorance isn’t stupidity. It’s engineered.',
    body: [
      'The engineered ignorance that results from systematically excluding working-class people from the institutions, professions, and knowledge systems that make decisions about their lives.',
      'Not stupidity. Not lack of interest. The deliberate design of systems that produce and maintain ignorance in those they govern, whilst presenting that ignorance as a natural condition justifying continued exclusion.',
      'Locates the production of ignorance in institutional design rather than individual deficit.',
      'The working-class person who does not know how to navigate the planning system, the benefits regime, the legal framework, the medical institution does not not know because they failed to learn. They do not know because the system was not built to be navigable by them, and actively resists the acquisition of navigational knowledge by producing complexity, opacity, and the constant movement of goalposts.'
    ],
    pairs: ['Credential Hostage', 'Aspirational Asphyxiation', 'Epistemological Violence', 'The Living Discipline Problem'],
    theories: ['Freire banking model', 'Fricker hermeneutical injustice', 'Scott seeing like a state']
  },
  {
    slug: 'architectural-agency',
    title: 'Architectural Agency',
    cluster: 'Cognitive Architecture',
    kind: 'operational and relational concept',
    deck: 'Not a property an individual possesses. A condition a practitioner constitutes.',
    body: [
      'The form of agency produced by Atmospheric Conditioning that operates through presence, relational infrastructure, and distributed intelligence rather than through projected authority or performed identity.',
      'Not a property an individual possesses. A condition a practitioner constitutes.',
      'The measure of Architectural Agency is not what the practitioner does. It is what becomes possible in their presence and what stops being possible when they leave.',
      'The presence mechanism requires continuous environmental reading. The distribution mechanism means influence operates through others rather than above them. The conditions mechanism means you cannot credential a condition.'
    ],
    pairs: ['Atmospheric Literacy', 'Osmotic Capital', 'Relational Curiosity', 'Membrane Reading', 'The Living Discipline Problem', 'Passing Places'],
    theories: ['Napper and Rao seven principles of agency', 'Snowden Cynefin complex domain', 'Stacey complex responsive processes', 'Hutchins distributed cognition']
  },
  {
    slug: 'aspirational-asphyxiation',
    title: 'Aspirational Asphyxiation',
    cluster: 'Extraction Architectures',
    kind: 'structural condition',
    deck: 'The injunction to rise, delivered in the same breath that withdraws the conditions that would make rising possible.',
    body: [
      'The specific damage that occurs in the gap between formal invitation and substantive exclusion.',
      'Not poverty. Not simple inequality. Something structurally more precise: being told the door is open, walking through it in good faith, and finding that the knowledge, the experience, the cognitive architecture you built in order to be the kind of person who could walk through that door is not receivable on the other side.',
      'Formal admission without substantive belonging is not a partial version of rights. It is their precise negation.',
      'What gets called instead: underperformance, culture shock, first-generation student challenges, imposter syndrome, failure to integrate, poor academic socialisation, adjustment difficulties, lack of aspiration, deficit in cultural capital.'
    ],
    pairs: ['Selective Subordination', 'Epistemological Violence', 'Passing Places', 'Tactical Multiplicity', 'Atmospheric Literacy', 'Osmotic Capital', 'Osmotic Transfer', 'Relational Curiosity', 'Compound Precarity', 'Credential Hostage'],
    theories: ['Balibar equaliberty', 'Gilmore organised abandonment', 'Fricker hermeneutical injustice', 'Freire banking model', 'Bourdieu cultural capital', 'hooks class matters', 'Spivak can the subaltern speak']
  },
  {
    slug: 'atmospheric-conditioning',
    title: 'Atmospheric Conditioning',
    cluster: 'Cognitive Architecture',
    kind: 'developmental mechanism',
    deck: 'The environment begins teaching before the practitioner knows they are being taught.',
    body: [
      'The developmental process through which the cognitive architecture the Cipher describes is built.',
      'The loop running is the precondition for the architecture existing.',
      'The environment conditions the practitioner continuously, before conscious thought, through sustained exposure to genuine stakes, genuine consequence, and genuine complexity.',
      'Atmospheric Conditioning is both the origin and the destination of the Cognitive Architecture loop: it produces the architecture, and the architecture, once running, continuously deepens the conditioning.'
    ],
    pairs: ['Atmospheric Literacy', 'NSPR', 'SMDO', 'SMDO-f', 'Passing Places', 'Osmotic Capital', 'Relational Curiosity'],
    theories: ['Bourdieu habitus', 'Lave and Wenger situated learning', 'Polanyi tacit dimension']
  },
  {
    slug: 'atmospheric-literacy',
    title: 'Atmospheric Literacy',
    cluster: 'Knowledge Systems',
    kind: 'perceptual capability',
    deck: 'Reading a room before anything has happened.',
    body: [
      'The systematic ability to read rooms, power dynamics, and escalation risk produced by sustained exposure to environments where misreading carried real cost.',
      'Not intuition. A trained perceptual capability built through years of high-stakes environmental exposure where the consequences of misreading were immediate and material.',
      'Atmospheric Literacy is perceptual: it reads what is there, who holds power, where the tension sits, what the room is about to do.',
      'Not hypervigilance. Hypervigilance is a threat-response operating from a dysregulated baseline. Atmospheric Literacy is a trained operational capability.'
    ],
    badge: 'GM',
    pairs: ['NSPR', 'Atmospheric Conditioning', 'SMDO', 'Relational Curiosity', 'Social Floor', 'Osmotic Capital', 'Selective Subordination', 'Architectural Agency'],
    theories: ['Polanyi tacit knowledge', 'Weick sensemaking', 'Klein recognition-primed decision making', 'Fricker epistemic injustice']
  },
  {
    slug: 'the-assembly',
    title: 'The Assembly',
    cluster: 'Knowledge Systems',
    kind: 'collective intelligence mechanism',
    deck: 'The room knowing things no individual in it knows.',
    body: [
      'The collective intelligence system that activates in high-complexity operational environments when the conditions are right.',
      'The Assembly is not a meeting. It is the emergence of collective operational intelligence through the simultaneous activation of individual SMDO architectures across a team.',
      'The closing-hour conversation is the paradigmatic Assembly: the shift over, the pressure released, the intelligence moving freely between people who have been running parallel operational reads for the same period.',
      'What surfaces in those conversations is not debriefing. It is the collective architecture of the room making itself visible.'
    ],
    pairs: ['SMDO', 'Social Floor', 'Passing Places', 'Atmospheric Literacy', 'Architectural Agency'],
    theories: ['Hutchins distributed cognition', 'Lave and Wenger communities of practice', 'Stacey complex responsive processes', 'Freire dialogical education']
  },
  {
    slug: 'cap',
    title: 'CAP: Challenge to Asymmetric Power',
    cluster: 'Cognitive Architecture',
    kind: 'cognitive and political mechanism',
    deck: 'The act of naming a power relationship that the dominant party benefits from leaving unnamed.',
    body: [
      'Not pathological avoidance. Political refusal.',
      'The capacity to distinguish between legitimate demands and asymmetric power performances and to choose survival obligations over institutional compliance.',
      'CAP runs in three phases: legitimacy assessment, resource calculation, and refusal deployment.',
      'The same presentation can receive clinical accommodation in one class context and disciplinary intervention in another.'
    ],
    pairs: ['Selective Subordination', 'Atmospheric Literacy', 'Tactical Multiplicity', 'Epistemological Violence', 'Cognitive Starvation', 'Compound Precarity', 'Social Floor'],
    theories: ['Freire critical consciousness', 'Scott weapons of the weak', 'Gilmore organised abandonment', 'hooks talking back', 'Lorde uses of anger', 'Fricker epistemic injustice']
  },
  {
    slug: 'cognitive-starvation',
    title: 'Cognitive Starvation',
    cluster: 'Cognitive Architecture',
    kind: 'institutional mechanism',
    deck: 'The loop cannot run.',
    body: [
      'The deliberate or structural design of work and environments to prevent the development of critical intelligence.',
      'Cognitive Starvation is not an absence of stimulation. It is the active removal of the conditions genuine stakes, environmental complexity, cost-of-error terrain, relational density that the Cognitive Architecture loop requires to run.',
      'The institution extracts the labour without producing the capability and then uses the absence of the capability to justify the conditions that prevented its development.'
    ],
    pairs: ['Passing Places', 'SMDO', 'Atmospheric Conditioning', 'Working-Class Learning Laboratories', 'Alpha-Induced Ignorance', 'Dual Extraction Architecture'],
    theories: ['Freire banking model', 'Marcuse one-dimensional man', 'Federici enclosure', 'Scott mtis']
  },
  {
    slug: 'compound-precarity',
    title: 'Compound Precarity',
    cluster: 'Extraction Architectures',
    kind: 'structural condition',
    deck: 'Not poverty plus insecurity.',
    body: [
      'The compounding of multiple simultaneous precarious conditions financial, housing, employment, health, caring in which the instability of each domain amplifies the instability of all others, producing a total condition greater than the sum of its parts.',
      'Addressing one domain costs resource from another, and the cost of addressing all simultaneously is structurally impossible.'
    ],
    pairs: ['SMDO-f', 'Aspirational Asphyxiation', 'Credential Hostage', 'Dual Extraction Architecture', 'CAP'],
    theories: ['Gilmore organised abandonment', 'Federici reproductive labour', 'Bourdieu field theory']
  },
  {
    slug: 'conditional-admission',
    title: 'Conditional Admission',
    cluster: 'Institutional Dynamics',
    kind: 'institutional mechanism',
    deck: 'The admission is real. The condition is the violence.',
    body: [
      'The structural arrangement by which working-class people are formally admitted to institutional spaces on the condition never stated, structurally enforced that they perform the assimilation of the institutions norms, suppress the intelligence they arrived with, and present themselves as the kind of person the institution was built to receive.',
      'The admission is real. The condition is the violence.'
    ],
    pairs: ['Aspirational Asphyxiation', 'Selective Subordination', 'Tactical Multiplicity', 'ISMT', 'Epistemological Violence'],
    theories: ['Fricker testimonial injustice', 'hooks belonging', 'Bourdieu cultural capital', 'Spivak subaltern']
  },
  {
    slug: 'coordinated-double-dispossession',
    title: 'Coordinated Double Dispossession',
    cluster: 'Power Time',
    kind: 'structural mechanism',
    deck: 'The simultaneous dispossession of working-class communities from both physical space and the historical record of their presence in that space.',
    body: [
      'Not displacement followed by erasure. Both operations running simultaneously, each reinforcing the other.',
      'The community is moved on. The record of the community’s presence, its knowledge, its contribution, its specific intelligence is moved on with them or never recorded in the first place.'
    ],
    pairs: ['The Hauntological Archive', 'Temporal Insurgency', 'Domestic Colonisation', 'Gravitational Cultural Power', 'Epistemological Violence'],
    theories: ['Gilmore organised abandonment', 'Federici enclosure', 'Hall cultural politics', 'Thompson making of the English working class']
  },
  {
    slug: 'council-estate-economics',
    title: 'Council Estate Economics',
    cluster: 'Extraction Architectures',
    kind: 'economic analysis',
    deck: 'The informal, relational, exchange-based economies that develop in the absence of formal economic infrastructure.',
    body: [
      'Not poverty management. An alternative economic architecture produced by conditions of organised abandonment.',
      'The specific economic logic of council estate life the informal, relational, exchange-based economies that develop in the absence of formal economic infrastructure, and that constitute a genuine knowledge system about value, exchange, reciprocity, and survival under scarcity.'
    ],
    pairs: ['Compound Precarity', 'Envelope Culture', 'Osmotic Capital', 'Working-Class Learning Laboratories'],
    theories: ['Scott mtis', 'Federici reproductive labour', 'Thompson moral economy']
  },
  {
    slug: 'credential-hostage',
    title: 'Credential Hostage',
    cluster: 'Extraction Architectures',
    kind: 'structural condition',
    deck: 'The credential is both the hope and the trap.',
    body: [
      'The structural position of the working-class person who has invested survival resources in a credentialling process they cannot afford to abandon because the investment already made is too great to lose, and because the credential, once obtained, may be the only available route out of the structural conditions that made it necessary.',
      'You cannot stop. You cannot fully afford to continue. You are held by the credential you are trying to obtain.'
    ],
    pairs: ['Compound Precarity', 'Aspirational Asphyxiation', 'Alpha-Induced Ignorance', 'Desire Displacement'],
    theories: ['Bourdieu educational capital', 'Freire banking model', 'Gilmore organised abandonment']
  },
  {
    slug: 'desire-displacement',
    title: 'Desire Displacement',
    cluster: 'Extraction Architectures',
    kind: 'extraction mechanism',
    deck: 'The wanting intensifies. The returns go elsewhere.',
    body: [
      'The process by which working-class ambition specific, local, relational, grounded in the actual geography and community of its origin is recognised by institutional or market systems, transformed into a form those systems can use, and returned to the originator in a shape that serves the institution rather than the community the desire came from.',
      'Stage one: origin. Stage two: recognition. Stage three: transformation. Stage four: return.'
    ],
    pairs: ['Aspirational Asphyxiation', 'Osmotic Capital', 'Hail-Then-Nail Mechanism', 'Membrane Reading', 'Architectural Agency', 'ISMT', 'Cognitive Starvation', 'Epistemological Violence'],
    theories: ['Marcuse repressive tolerance', 'Hall encodingdecoding', 'Robinson Black Marxism', 'Federici reproductive labour', 'Bourdieu distinction', 'Freire banking model']
  },
  {
    slug: 'distributed-accountability',
    title: 'Distributed Accountability',
    cluster: 'Institutional Dynamics',
    kind: 'operational mechanism',
    deck: 'What the organisation chart says and what the accountability architecture actually is are two different documents.',
    body: [
      'The distribution of accountability across a team or community in ways that cannot be formally mapped, assigned, or assessed where the actual holding of operational responsibility is embedded in relationships, tacit agreements, and environmental knowledge rather than job descriptions.'
    ],
    pairs: ['SMDO', 'Architectural Agency', 'The Assembly', 'The Living Discipline Problem'],
    theories: ['Hutchins distributed cognition', 'Stacey complex responsive processes']
  },
  {
    slug: 'domestic-colonisation',
    title: 'Domestic Colonisation',
    cluster: 'Power Time',
    kind: 'structural and political concept',
    deck: 'The same operations, running through different mechanisms, producing analogous epistemological effects.',
    body: [
      'The application of colonial logics extraction, erasure, replacement, the imposition of external frameworks onto existing community knowledge systems to working-class communities within the borders of the nation state.',
      'Not metaphor. Structural analysis.',
      'A note on the term: the concept does not claim equivalence between domestic class dynamics and the historical violence of colonial occupation. It names a structural homology.'
    ],
    pairs: ['Coordinated Double Dispossession', 'Gravitational Cultural Power', 'The Hauntological Archive', 'Epistemological Violence', 'Temporal Insurgency', 'ISMT'],
    theories: ['Fanon wretched of the earth', 'Spivak subaltern', 'Gilmore organised abandonment', 'Hall encodingdecoding', 'Thompson making of the English working class']
  },
  {
    slug: 'dual-extraction-architecture',
    title: 'Dual Extraction Architecture',
    cluster: 'Extraction Architectures',
    kind: 'structural mechanism',
    deck: 'The simultaneous extraction of both labour and cultural production from working-class communities.',
    body: [
      'Working-class people produce both economic value through their labour and cultural value through their knowledge, creativity, and community intelligence.',
      'Both streams are extracted. Neither is compensated at source.'
    ],
    pairs: ['Alpha-Induced Ignorance', 'Cognitive Starvation', 'ISMT', 'Osmotic Transfer', 'Desire Displacement'],
    theories: ['Marx surplus value', 'Federici reproductive labour', 'Robinson Black Marxism', 'Gilmore organised abandonment']
  },
  {
    slug: 'envelope-culture',
    title: 'Envelope Culture',
    cluster: 'Extraction Architectures',
    kind: 'economic practice',
    deck: 'The rational instrument.',
    body: [
      'The cash economy practices brown envelopes, informal payment, off-book exchange that develop in working-class communities as rational responses to a formal economy that extracts from rather than serves them.',
      'Not criminality. An adaptive economic intelligence.'
    ],
    pairs: ['Council Estate Economics', 'Compound Precarity', 'Alpha-Induced Ignorance'],
    theories: ['Scott weapons of the weak', 'Federici enclosure', 'Thompson moral economy']
  },
  {
    slug: 'epistemological-violence',
    title: 'Epistemological Violence',
    cluster: 'Power Time',
    kind: 'structural condition',
    deck: 'The system saw it. It just called it something else.',
    body: [
      'The institutional process by which demonstrated expertise is received, acknowledged, and simultaneously stripped of its status as expertise through reclassification into a lower-authority category.',
      'The intelligence is visible. The work is seen. The capability is recognised. What the system does next is file it under a heading that carries no professional weight, no credential claim, no transferable authority.',
      'This is distinct from hermeneutical injustice: here there is vocabulary. The problem is that the vocabulary applied is deliberately inadequate.'
    ],
    pairs: ['Alpha-Induced Ignorance', 'Aspirational Asphyxiation', 'Selective Subordination', 'CAP', 'Domestic Colonisation'],
    theories: ['Fricker epistemic injustice', 'Spivak subaltern', 'hooks margin to center', 'Freire banking model', 'Bourdieu symbolic violence']
  },
  {
    slug: 'expertise-declassification',
    title: 'Expertise Declassification',
    cluster: 'Institutional Dynamics',
    kind: 'institutional mechanism',
    deck: 'The intelligence is visible. The work is seen. The capability is, in some functional sense, recognised.',
    body: [
      'The institutional process by which demonstrated expertise is received, acknowledged, and simultaneously stripped of its status as expertise through reclassification into a lower-authority category.',
      'Care. Instinct. Nurturing. She’s just good with people. A natural. None of those words are wrong. That is what makes the mechanism effective.'
    ],
    badge: 'GM',
    pairs: ['SMDO', 'SMDO-f', 'The Living Discipline Problem', 'Selective Subordination', 'CAP', 'Resolution Differential', 'Architectural Agency', 'Epistemological Violence', 'Aspirational Asphyxiation'],
    theories: ['Federici Caliban and the Witch', 'Fricker extends hermeneutical injustice to active mislabelling', 'Hochschild managed heart', 'Oakley sociology of housework', 'hooks feminist theory']
  },
  {
    slug: 'gap-filling',
    title: 'Gap-Filling',
    cluster: 'Knowledge Systems',
    kind: 'operational practice',
    deck: 'The things that need doing that no role description covers.',
    body: [
      'The practitioners capacity to identify and occupy the functional gaps in an operational environment, the things that need doing that no role description covers, no procedure anticipates, and no manager has named.',
      'Gap-Filling is not initiative. It is environmental reading at the operational level.'
    ],
    pairs: ['SMDO', 'Atmospheric Literacy', 'Architectural Agency', 'The Assembly', 'Distributed Accountability'],
    theories: ['Hutchins distributed cognition', 'Weick sensemaking', 'Scott mtis']
  },
  {
    slug: 'gravitational-cultural-power',
    title: 'Gravitational Cultural Power',
    cluster: 'Power Time',
    kind: 'cultural mechanism',
    deck: 'Not marketing. The genuine gravitational pull of a space that already has something real happening in it.',
    body: [
      'The capacity of a working-class cultural environment a venue, a community, a scene to attract people and cultural production toward it through the density and authenticity of what it already contains, rather than through institutional investment or programming strategy.',
      'The gravity is produced by the density of the intelligence already present. It attracts more intelligence. The accumulation compounds.'
    ],
    pairs: ['Membrane Reading', 'Osmotic Capital', 'The Assembly', 'Architectural Agency', 'Desire Displacement'],
    theories: ['Bourdieu field theory', 'Hall encodingdecoding', 'Gilmore organised abandonment']
  },
  {
    slug: 'the-hauntological-archive',
    title: 'The Hauntological Archive',
    cluster: 'Power Time',
    kind: 'cultural and political concept',
    deck: 'The ghost of the community is more politically uncomfortable than the community itself.',
    body: [
      'The record of working-class presence, knowledge, and cultural production that persists after the community has been displaced the trace of what was there, carrying the intelligence of what the space was, in the absence of the community that produced it.',
      'Not nostalgia. Structural persistence.'
    ],
    pairs: ['Coordinated Double Dispossession', 'Temporal Insurgency', 'Domestic Colonisation', 'Gravitational Cultural Power'],
    theories: ['Derrida hauntology', 'Fisher capitalist realism', 'Thompson making of the English working class', 'Hall cultural politics']
  },
  {
    slug: 'hail-then-nail-mechanism',
    title: 'Hail-Then-Nail Mechanism',
    cluster: 'Power Time',
    kind: 'political and cultural mechanism',
    deck: 'Find them. Elevate them. Destroy them at the moment of maximum visibility.',
    body: [
      'The structured sequence through which systems of power manage working-class voices, radical artists, and community-embedded knowledge-producers at the moment they achieve maximum cultural visibility.',
      'Stage one: hailing. Stage two: elevation. Stage three: the demand. Stage four: the nailing. Stage five: the filing.',
      'The destruction follows at maximum visibility. The mechanism completes its most important function: the authentication of the system through the failure of the voice that challenged it.'
    ],
    pairs: ['Desire Displacement', 'Epistemological Violence', 'Atmospheric Literacy', 'Selective Subordination', 'CAP', 'Architectural Agency', 'ISMT', 'The Hauntological Archive'],
    theories: ['Hill The Miseducation track 13 primary empirical source', 'Marcuse repressive tolerance', 'Robinson Black Marxism', 'Hall encodingdecoding', 'Foucault discipline and punish', 'Fanon wretched of the earth', 'Fricker testimonial injustice at cultural scale']
  },
  {
    slug: 'inherited-intelligence',
    title: 'Inherited Intelligence',
    cluster: 'Knowledge Systems',
    kind: 'knowledge transmission concept',
    deck: 'The knowledge that transmits across generations through proximity and practice rather than through formal instruction.',
    body: [
      'The accumulated intelligence of a community passed on through the living of it rather than the teaching of it.',
      'Not tradition in the sentimental sense. A genuine transmission mechanism.'
    ],
    pairs: ['Osmotic Capital', 'Atmospheric Conditioning', 'Passing Places', 'Relational Curiosity', 'SMDO-f'],
    theories: ['Polanyi tacit dimension', 'Lave and Wenger situated learning', 'Thompson making of the English working class']
  },
  {
    slug: 'institutional-domestication',
    title: 'Institutional Domestication',
    cluster: 'Institutional Dynamics',
    kind: 'institutional mechanism',
    deck: 'The edges removed, the class specificity smoothed, the operational knowledge translated into acceptable institutional language.',
    body: [
      'The process by which working-class intelligence, once admitted to institutional spaces, is gradually shaped into forms the institution can manage.',
      'The institution domesticates what it cannot receive in its original form, and calls the domesticated version success.'
    ],
    pairs: ['Conditional Admission', 'Aspirational Asphyxiation', 'Selective Subordination', 'Epistemological Violence', 'Social Floor'],
    theories: ['Fricker hermeneutical injustice', 'Freire banking model', 'hooks belonging', 'Bourdieu symbolic violence']
  },
  {
    slug: 'ismt',
    title: 'ISMT: Inverted Social Mobility Thesis',
    cluster: 'Knowledge Systems',
    kind: 'theoretical argument',
    deck: 'The standard social mobility narrative runs one way. This one runs the other and nobody counts it.',
    body: [
      'The conventional social mobility story describes working-class people acquiring middle-class credentials and moving upward. The ISMT names the reverse movement largely privileged people passing through working-class operational environments as bar staff, junior professionals, volunteers, seasonal workers absorbing intelligence their formal education systematically failed to develop.',
      'The intelligence transferred. The recognition did not.'
    ],
    pairs: ['Osmotic Capital', 'Osmotic Transfer', 'Atmospheric Literacy', 'Architectural Agency', 'Passing Places', 'Conditional Admission', 'Epistemological Violence'],
    theories: ['Fricker hermeneutical injustice', 'Bourdieu capital transfer without recognition', 'Scott mtis absorbed by institutions', 'Federici uncosted reproductive labour', 'Freire counter-pedagogy without having read Freire']
  },
  {
    slug: 'the-living-discipline-problem',
    title: 'The Living Discipline Problem',
    cluster: 'Institutional Dynamics',
    kind: 'institutional mechanism',
    deck: 'The structural inability of formal assessment frameworks to assess living, embodied, relational competency.',
    body: [
      'The structural inability of formal assessment frameworks to assess living, embodied, relational competency because those frameworks are built to assess what can be predetermined, standardised, and observed under controlled conditions, which excludes precisely the capabilities that working-class operational environments produce.',
      'The Living Discipline Problem is constitutive of what assessment frameworks are.'
    ],
    pairs: ['SMDO', 'Atmospheric Literacy', 'Passing Places', 'Architectural Agency', 'Expertise Declassification', 'Distributed Accountability'],
    theories: ['Fricker hermeneutical injustice', 'Schn reflective practitioner', 'Scott mtis', 'Polanyi tacit knowledge']
  },
  {
    slug: 'liturgy-of-the-burnt-out',
    title: 'Liturgy of the Burnt Out',
    cluster: 'All clusters',
    kind: 'cultural and phenomenological concept',
    deck: 'The sustained phenomenological account of what it costs to be the person who reads everything at full resolution.',
    body: [
      'Not burnout in the clinical sense. The specific exhaustion of the SMDO practitioner across a lifetime.',
      'The Liturgy names the cost that Resolution Differential accumulates, the formation debt that SMDO-f carries forward, the specific texture of the depletion.'
    ],
    badge: 'cross-cluster',
    pairs: ['Resolution Differential', 'SMDO-f', 'Tenderness Crisis', 'Atmospheric Literacy', 'The Assembly']
  },
  {
    slug: 'membrane-reading',
    title: 'Membrane Reading',
    cluster: 'Knowledge Systems',
    kind: 'cognitive practice',
    deck: 'The practitioner as cell, the operational environment as membrane.',
    body: [
      'Not importing a working model. Absorbing what is already there and giving it back.',
      'The practitioner’s capacity to read the cultural identity of the community they serve and mirror it back accurately, rather than applying a template imported from elsewhere.',
      'When Membrane Reading works, it is invisible. The community does not experience skilled cultural intelligence; they experience a space that feels right.'
    ],
    pairs: ['Atmospheric Literacy', 'Osmotic Capital', 'Architectural Agency', 'Passing Places', 'ISMT', 'Cognitive Starvation'],
    theories: ['Snowden primitive moves vs surface replication', 'Goffman translation not impression management', 'Scott mtis', 'Lave and Wenger situated learning', 'Hall encodingdecoding']
  },
  {
    slug: 'negative-space-pattern-recognition',
    title: 'Negative Space Pattern Recognition',
    cluster: 'Cognitive Architecture',
    kind: 'cognitive mechanism',
    deck: 'Absence as data.',
    body: [
      'The capacity to read deviation from expected pattern as operational information before the deviation can be consciously articulated or named.',
      'NSPR operates through an internalised model of what a specific environment normally looks like. When the actual state of the environment departs from that model, the departure registers not as a thought, but as a signal.',
      'Not hypervigilance. Not intuition. A named mechanism.'
    ],
    badge: 'NSPR',
    pairs: ['Atmospheric Literacy', 'Atmospheric Conditioning', 'SMDO', 'Pre-cognitive Embodied Sensing', 'Threshold Sensitivity', 'Resolution Differential'],
    theories: ['Klein Recognition-Primed Decision making', 'Polanyi tacit dimension', 'Scott mtis', 'Hutchins distributed cognition']
  },
  {
    slug: 'osmotic-capital',
    title: 'Osmotic Capital',
    cluster: 'Knowledge Systems',
    kind: 'knowledge accumulation mechanism',
    deck: 'The intelligence that accumulates, transfers, gets extracted, gets displaced, and goes unrecognised.',
    body: [
      'Intelligence accruing through sustained proximity to high-stakes working-class operational environments without instruction, strategy, or gate.',
      'Not learning. Saturation.',
      'The practitioner does not acquire Osmotic Capital strategically. They are built by it.'
    ],
    badge: 'GM',
    pairs: ['Osmotic Transfer', 'Relational Curiosity', 'Atmospheric Conditioning', 'ISMT', 'Architectural Agency', 'Desire Displacement', 'Passing Places'],
    theories: ['Bourdieu capital extended and departed from', 'Polanyi tacit dimension', 'Lave and Wenger situated learning', 'Scott mtis', 'Fricker hermeneutical injustice']
  },
  {
    slug: 'osmotic-transfer',
    title: 'Osmotic Transfer',
    cluster: 'Knowledge Systems',
    kind: 'transmission mechanism',
    deck: 'The same differential pressure that builds the architecture in the first place.',
    body: [
      'The mechanism by which Osmotic Capital moves from the originating environment to the people who pass through it.',
      'The asymmetry: the practitioner who built the environment carries the full architecture; the person passing through carries a partial deposit real, productive, consequential but transferred without the developmental loop that produced it.',
      'Passive and deliberate forms both exist.'
    ],
    badge: 'GM',
    pairs: ['Osmotic Capital', 'ISMT', 'Architectural Agency', 'Passing Places', 'Relational Curiosity', 'Aspirational Asphyxiation'],
    theories: ['Lave and Wenger legitimate peripheral participation', 'Polanyi tacit dimension', 'Federici uncosted reproductive labour', 'Fricker hermeneutical injustice']
  },
  {
    slug: 'parallel-pedagogies',
    title: 'Parallel Pedagogies',
    cluster: 'Knowledge Systems',
    kind: 'educational concept',
    deck: 'Alternative pedagogical systems running in parallel, often more precisely calibrated to the actual conditions of the learners’ lives.',
    body: [
      'The knowledge systems embedded in cultural production music, literature, sport, craft, community practice that teach class, survival, grief, and solidarity to people formal education was never designed to reach.',
      'Lyrics are not decoration. They are primary source material.'
    ],
    pairs: ['Working-Class Learning Laboratories', 'Inherited Intelligence', 'Osmotic Capital', 'Passing Places', 'Relational Curiosity'],
    theories: ['Freire pedagogy of the oppressed', 'hooks teaching to transgress', 'Hall encodingdecoding', 'Lave and Wenger situated learning']
  },
  {
    slug: 'passing-places',
    title: 'Passing Places',
    cluster: 'Knowledge Systems',
    kind: 'pedagogical concept',
    deck: 'The environment was the curriculum. It just needed something to dock to.',
    body: [
      'The condition in which a practitioner is ready to receive what an environment is offering not because they have been pre-loaded with procedure, but because their channels are open and the environment has something real to teach.',
      'Passing Places names the pedagogical event the encounter between readiness and offering, where knowledge that cannot be transferred through instruction is transferred anyway, through proximity, timing, and genuine stakes.',
      'The passing place happens at full speed, in the middle of everything else.'
    ],
    badge: 'GM',
    pairs: ['Atmospheric Conditioning', 'Osmotic Capital', 'The Assembly', 'Cognitive Starvation', 'Working-Class Learning Laboratories', 'The Living Discipline Problem', 'Social Floor', 'Relational Curiosity'],
    theories: ['Freire banking concept negation', 'Lave and Wenger legitimate peripheral participation', 'Polanyi tacit dimension', 'Schn knowing-in-action', 'Jaeggi progress recognisable in retrospect', 'Scott mtis']
  },
  {
    slug: 'the-proof-of-concept-economy',
    title: 'The Proof-of-Concept Economy',
    cluster: 'Extraction Architectures',
    kind: 'structural argument',
    deck: 'Working-class operational environments as the R&D infrastructure that the knowledge economy depends on but does not fund.',
    body: [
      'The environments where the capabilities are developed, the intelligence is produced, the proof of concept is run and the results are then absorbed by institutions that neither built the infrastructure nor compensated the people who operated it.'
    ],
    pairs: ['ISMT', 'Osmotic Transfer', 'Dual Extraction Architecture', 'Architectural Agency'],
    theories: ['Federici reproductive labour', 'Gilmore organised abandonment', 'Marcuse repressive tolerance']
  },
  {
    slug: 'relational-curiosity',
    title: 'Relational Curiosity',
    cluster: 'Knowledge Systems',
    kind: 'cognitive accelerant',
    deck: 'The genuine pleasure of meeting someone in their own world.',
    body: [
      'Not strategic. Not instrumental. Its own reward and the variable that explains why some practitioners accumulate faster than others in identical environments.',
      'The interest precedes the utility. The pleasure of the encounter is not contingent on what it produces.',
      'Relational Curiosity deepens Atmospheric Literacy, which creates the conditions for richer Relational Curiosity, which deepens the accumulation, which deepens the read.'
    ],
    badge: 'GM',
    pairs: ['Osmotic Capital', 'Atmospheric Conditioning', 'Atmospheric Literacy', 'Osmotic Transfer', 'Passing Places', 'Aspirational Asphyxiation', 'Architectural Agency', 'Social Floor'],
    theories: ['Polanyi tacit dimension', 'Lave and Wenger legitimate peripheral participation', 'Schn reflective practitioner', 'Jaeggi genuine engagement', 'hooks teaching to transgress']
  },
  {
    slug: 'resolution-differential',
    title: 'Resolution Differential',
    cluster: 'Cognitive Architecture',
    kind: 'cognitive and social concept',
    deck: 'The gap between the high-granularity default processing of the SMDO practitioner and the resolution at which social norms operate.',
    body: [
      'The practitioner who reads everything at full atmospheric resolution is operating at a resolution that most social environments do not require and that sustained performance in ordinary contexts makes exhausting.',
      'Resolution Differential explains why withdrawal and extended decompression are rational systemic responses for SMDO practitioners, not signs of social dysfunction.'
    ],
    pairs: ['SMDO', 'Atmospheric Literacy', 'NSPR', 'SMDO-f', 'Liturgy of the Burnt Out', 'Tenderness Crisis', 'Expertise Declassification'],
    theories: ['Polanyi tacit knowledge', 'Weick sensemaking', 'Van der Kolk body keeps the score']
  },
  {
    slug: 'selective-subordination',
    title: 'Selective Subordination',
    cluster: 'Institutional Dynamics',
    kind: 'behavioural mechanism',
    deck: 'The performance of your own diminishment, delivered before the room can deliver it for you.',
    body: [
      'The rapid, pre-conscious assessment of a room’s likely verdict on your presence followed by the deliberate decision to voice that verdict yourself, first, at a moment and in a register of your own choosing.',
      'Three phases: the read, the calculation, the deployment.',
      'What gets called instead: low self-esteem, poor self-concept, imposter syndrome, internalised classism, self-sabotage, lack of confidence.'
    ],
    pairs: ['CAP', 'Atmospheric Literacy', 'Tactical Multiplicity', 'Epistemological Violence', 'Aspirational Asphyxiation', 'Osmotic Capital', 'Liturgy of the Burnt Out', 'Passing Places', 'Social Floor'],
    theories: ['Goffman impression management departed from management of an undesired impression on the performer’s terms', 'Scott hidden transcript in real time', 'Spivak subaltern speaks in the only register the room can receive', 'Bourdieu habitus at institutional threshold', 'Fricker pre-emptive response to testimonial injustice', 'hooks teaching to transgress', 'Freire banking model survival']
  },
  {
    slug: 'social-floor',
    title: 'Social Floor',
    cluster: 'Knowledge Systems',
    kind: 'relational and environmental threshold',
    deck: 'The baseline is not polite functioning. It is the environment’s actual capacity to hold people.',
    body: [
      'The minimum relational, emotional, and practical level beneath which a room ceases to be socially inhabitable for the people in it.',
      'Not niceness. Not hospitality branding. The threshold conditions for a working collective, a decent workplace, a usable room, a livable scene.',
      'The Social Floor is built, not found.'
    ],
    badge: 'GM',
    pairs: ['Atmospheric Literacy', 'Relational Curiosity', 'Passing Places', 'Architectural Agency', 'The Assembly', 'Tactical Multiplicity', 'Selective Subordination'],
    theories: ['Hutchins distributed cognition', 'Stacey complex responsive processes', 'Lave and Wenger communities of practice', 'Freire dialogical education']
  },
  {
    slug: 'strategic-allyship',
    title: 'Strategic Allyship',
    cluster: 'Knowledge Systems',
    kind: 'operational concept',
    deck: 'Allyship that becomes useful because it knows when to stop performing itself.',
    body: [
      'The calibrated practice of using positional advantage to create conditions for working-class intelligence to be seen, transferred, and retained without being appropriated or softened.',
      'It is strategic because it changes the room. It is allyship because it does not claim to own the room.'
    ],
    badge: 'SMDO-t',
    pairs: ['Atmospheric Literacy', 'Architectural Agency', 'Relational Curiosity', 'Social Floor', 'Selective Subordination'],
    theories: ['Freire dialogical education', 'hooks praxis', 'Fricker epistemic justice']
  },
  {
    slug: 'temporal-credential',
    title: 'Temporal Credential',
    cluster: 'Power Time',
    kind: 'structural concept',
    deck: 'The hours you have survived become the evidence you are allowed to present.',
    body: [
      'The classed and institutional effect by which time itself becomes a credential: long service, long exposure, long endurance, long unpaid apprenticeship, long informal competency.',
      'The institution often recognises the duration but refuses the capacity it produced.'
    ],
    pairs: ['Temporal Parity', 'Conditional Admission', 'Expertise Declassification', 'Temporal Dislocation'],
    theories: ['Bourdieu educational capital', 'Gilmore organised abandonment', 'Fricker testimonial justice']
  },
  {
    slug: 'temporal-dislocation',
    title: 'Temporal Dislocation',
    cluster: 'Power Time',
    kind: 'structural condition',
    deck: 'The past is present, but the institution has no instrument to receive it.',
    body: [
      'The mismatch between the temporal texture of lived working-class experience and the linear, managerial, institutional timeline that demands it be translated into acceptable chronology.',
      'The past remains active, but the system treats it as over.'
    ],
    pairs: ['Temporal Commons', 'Temporal Credential', 'The Hauntological Archive', 'Coordinated Double Dispossession'],
    theories: ['Derrida hauntology', 'Fisher capitalist realism', 'Thompson making of the English working class']
  },
  {
    slug: 'temporal-insurgency',
    title: 'Temporal Insurgency',
    cluster: 'Power Time',
    kind: 'structural and political concept',
    deck: 'Presence that refuses to stay in the time allocated to it.',
    body: [
      'The working-class presence that persists in institutions, spaces, and historical memory after the institution has tried to move on.',
      'Not nostalgia. The refusal of erasure through continued presence, trace, and return.'
    ],
    pairs: ['The Hauntological Archive', 'Coordinated Double Dispossession', 'Domestic Colonisation', 'Gravitational Cultural Power'],
    theories: ['Derrida hauntology', 'Fisher capitalist realism', 'Hall cultural politics']
  },
  {
    slug: 'temporal-parity',
    title: 'Temporal Parity',
    cluster: 'Power Time',
    kind: 'structural mechanism',
    deck: 'An hour is an hour. That is not how the world currently works.',
    body: [
      'The principle that an hour of human time carries equivalent intrinsic worth regardless of class, credential, role, or institutional position.',
      'The Cipher’s temporal ethics begin here.'
    ],
    pairs: ['Temporal Credential', 'Temporal Commons', 'Social Floor', 'Conditional Admission'],
    theories: ['Balibar equaliberty', 'Fricker epistemic justice', 'Thompson moral economy']
  },
  {
    slug: 'temporal-commons',
    title: 'Temporal Commons',
    cluster: 'Power Time',
    kind: 'structural mechanism',
    deck: 'The shared conditions under which time can be used without being stolen.',
    body: [
      'The collective temporal environment that allows people to coordinate, wait, slow, return, and remain without penalty.',
      'A commons is not only space. It is time.'
    ],
    pairs: ['Temporal Parity', 'Gravitational Cultural Power', 'The Assembly', 'Passing Places'],
    theories: ['Thompson moral economy', 'Federici reproductive labour', 'Gilmore organised abandonment']
  },
  {
    slug: 'tenderness-crisis',
    title: 'Tenderness Crisis',
    cluster: 'All clusters',
    kind: 'cross-cluster',
    deck: 'The point at which the practitioner can no longer carry the room without being carried back.',
    body: [
      'The condition in which sustained exposure to high-complexity, high-empathy, high-demand environments produces a crisis of remaining gentle while continuing to function.',
      'It is the cost of being the one who holds the room together.'
    ],
    pairs: ['Liturgy of the Burnt Out', 'Resolution Differential', 'SMDO', 'Architectural Agency'],
    theories: ['hooks care work', 'Van der Kolk trauma and body', 'Hochschild managed heart']
  },
  {
    slug: 'the-spivak-wilson-paradox',
    title: 'The Spivak-Wilson Paradox',
    cluster: 'All clusters',
    kind: 'cross-cluster',
    deck: 'The system extracts the message more easily than it can hear the messenger.',
    body: [
      'The paradox by which the institution can cite, absorb, and operationalise the content of a working-class or subaltern analysis while remaining structurally unable to recognise the analyst as the source of knowledge.',
      'The knowledge enters. The author does not.'
    ],
    pairs: ['Epistemological Violence', 'Desire Displacement', 'Hail-Then-Nail Mechanism', 'ISMT'],
    theories: ['Spivak can the subaltern speak', 'Wilson Black culture and whiteness', 'Fricker testimonial injustice']
  },
  {
    slug: 'the-space-model',
    title: 'The SPACE Model',
    cluster: 'All clusters',
    kind: 'framework',
    deck: 'A way of reading the room without reducing the room to a spreadsheet.',
    body: [
      'A practical analytical frame for extraction, systems, power, agency, and conditions across working-class operational environments.',
      'It travels because it is modular, but it only works if the practitioner reads the room first.'
    ],
    pairs: ['Atmospheric Literacy', 'Architectural Agency', 'CAP', 'Selective Subordination'],
    theories: ['Cynefin', 'complex responsive processes', 'distributed cognition']
  },
  {
    slug: 'the-proof-of-concept-economy-2',
    title: 'The Proof-of-Concept Economy',
    cluster: 'Extraction Architectures',
    kind: 'structural argument',
    deck: 'The environments where the capabilities are developed, the intelligence is produced, the proof of concept is run and the results are then absorbed by institutions that neither built the infrastructure nor compensated the people who operated it.',
    body: ['Working-class operational environments as the R&D infrastructure that the knowledge economy depends on but does not fund.'],
    pairs: ['ISMT', 'Dual Extraction Architecture', 'Architectural Agency'],
    theories: ['Federici reproductive labour', 'Gilmore organised abandonment', 'Marcuse repressive tolerance']
  },
  {
    slug: 'working-class-learning-laboratories',
    title: 'Working-Class Learning Laboratories',
    cluster: 'Knowledge Systems',
    kind: 'educational concept',
    deck: 'Environments where learning is inseparable from consequence.',
    body: [
      'The places where practical intelligence is produced under conditions of genuine stakes, immediate feedback, and dense social awareness.',
      'Not classrooms. Operating environments.'
    ],
    pairs: ['Passing Places', 'Atmospheric Conditioning', 'Osmotic Capital', 'Inherited Intelligence'],
    theories: ['Freire environment as educator', 'Lave and Wenger situated learning', 'Scott mtis']
  },
  {
    slug: 'wellbeing-capitalism',
    title: 'Wellbeing Capitalism',
    cluster: 'Extraction Architectures',
    kind: 'structural critique',
    deck: 'The softer face of extraction.',
    body: [
      'A mode in which institutions package extraction as care, support, resilience, and personal development while leaving the structural conditions untouched.',
      'The language changes. The architecture does not.'
    ],
    pairs: ['Expertise Declassification', 'Selective Subordination', 'Epistemological Violence'],
    theories: ['Fisher capitalist realism', 'Fraser progressive neoliberalism', 'hooks class matters']
  },
  {
    slug: 'radical-aesthetics',
    title: 'Radical Aesthetics',
    cluster: 'Power Time',
    kind: 'cultural mechanism',
    deck: 'The form of the thing is part of the political argument.',
    body: [
      'The aesthetic mode in which working-class knowledge presents itself without apology, smoothing, or institutional translation.',
      'The radical is not decoration. The radical is the refusal to be made presentable at the cost of being true.'
    ],
    pairs: ['Domestic Colonisation', 'The Hauntological Archive', 'Epistemological Violence'],
    theories: ['Debord spectacle', 'Hall cultural politics', 'Fisher capitalist realism']
  },
  {
    slug: 'colonial-cleansing',
    title: 'Colonial Cleansing',
    cluster: 'Power Time',
    kind: 'structural mechanism',
    deck: 'Knowledge removed, space cleared, history overwritten.',
    body: [
      'The process by which working-class spaces are sanitised, renamed, reprogrammed, and re-authored so that their original intelligence no longer registers as belonging.',
      'What is removed is not only people. It is the operational memory of the place.'
    ],
    pairs: ['Domestic Colonisation', 'Coordinated Double Dispossession', 'Epistemological Violence'],
    theories: ['Fanon', 'Spivak', 'Gilmore']
  },
  {
    slug: 'the-archaic-threshold',
    title: 'The Archaic Threshold',
    cluster: 'Knowledge Systems',
    kind: 'threshold concept',
    deck: 'The point where a room begins teaching you before the briefing ends.',
    body: [
      'The first recognisable edge of a high-complexity environment where pattern density becomes legible and the practitioner’s body begins registering what the mind has not yet named.',
      'A threshold is where the architecture starts to run.'
    ],
    pairs: ['Atmospheric Literacy', 'NSPR', 'Passing Places'],
    theories: ['Polanyi tacit dimension', 'Weick sensemaking', 'Klein recognition-primed decision making']
  },
  {
    slug: 'the-returned-fire',
    title: 'The Returned Fire',
    cluster: 'Power Time',
    kind: 'cultural mechanism',
    deck: 'The fire is given back without the threat.',
    body: [
      'The institutional requirement that working-class culture appear legible only after its danger has been removed.',
      'This is what happens when the system asks for the performance and not the conditions that produced it.'
    ],
    pairs: ['Hail-Then-Nail Mechanism', 'Desire Displacement', 'Radical Aesthetics'],
    theories: ['Marcuse repressive tolerance', 'Hall encodingdecoding']
  }
];
