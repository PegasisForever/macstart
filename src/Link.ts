export class Link {
  constructor(
    public id: string,
    public title: string,
    public url: string,
    public iconUrl: string | null,
    public description: string,
    public pinned: boolean = false,
  ) {
  }
}

export const linksSections = [
  {
    name: 'Facilities, Offices, Departments and Schools',
    links: [
      new Link('facility', 'Facility Services', 'https://facilities.mcmaster.ca/', null, 'awawa'),
      new Link('main', 'Mcmaster University', 'https://www.mcmaster.ca/', null, 'awawa'),
      new Link('future', 'Future Students', 'https://future.mcmaster.ca/', null, 'awawa'),
      new Link('future-international', 'Future Students International', 'https://future-international.mcmaster.ca/', null, 'awawa', true),
      new Link('programs', 'Programs', 'https://future.mcmaster.ca/programs/', null, 'awawa'),
      new Link('graduated', 'Graduated Studies', 'https://gs.mcmaster.ca/', null, 'awawa'),
      new Link('covid', 'Covid-19 Info', 'https://covid19.mcmaster.ca/', null, 'awawa'),
      new Link('science', 'Faculty of Science', 'https://science.mcmaster.ca/', null, 'awawa'),
      new Link('research', 'Research & Innovation', 'https://research.mcmaster.ca/', null, 'awawa'),
      new Link('president', 'Office of President', 'https://president.mcmaster.ca/', null, 'awawa'),
      new Link('engineering', 'Faculty of Engineering', 'https://www.eng.mcmaster.ca/', null, 'awawa'),
      new Link('registrar', 'Office of the Registrar', 'https://registrar.mcmaster.ca/', null, 'awawa'),
      new Link('degroote', 'Degroote School of Business', 'https://www.degroote.mcmaster.ca/', null, 'awawa'),
      new Link('social-science', 'Faculty of Social Sciences', 'https://socialsciences.mcmaster.ca/', null, 'awawa'),
      new Link('uts', 'University Technology Services', 'https://uts.mcmaster.ca/', null, 'awawa'),
      new Link('macsphere', 'MacSphere', 'https://macsphere.mcmaster.ca/', null, 'awawa'),
      new Link('humanities', 'Faculty of Humanities', 'https://www.humanities.mcmaster.ca/', null, 'awawa'),
      new Link('healthsci', 'Faculty of Health Sciences', 'https://healthsci.mcmaster.ca/', null, 'awawa'),
      new Link('chemistry', 'Faculty of Sciences - Chemistry & Chemical Biology', 'https://chemistry.mcmaster.ca/', null, 'awawa'),
      new Link('mdprogram', 'MD Program', 'https://mdprogram.mcmaster.ca/', null, 'awawa'),
      new Link('psychiatry', 'Department of Psychiatry & Behavioural Neurosciences', 'https://psychiatry.mcmaster.ca/', null, 'awawa'),
      new Link('applicants', 'Application Status', 'https://applicants.mcmaster.ca/', null, 'awawa'),
      new Link('news', 'Daily News', 'https://dailynews.mcmaster.ca/', null, 'awawa'),
      new Link('experts', 'McMaster Experts', 'https://experts.mcmaster.ca/', null, 'awawa'),
      new Link('math', 'Department Of Mathematics & Statistics', 'https://math.mcmaster.ca/', null, 'awawa'),
      new Link('neuroscience-society', 'McMaster Neuroscience Society', 'http://neurosciencesociety.ca/', null, 'awawa'),
      new Link('biochem', 'Department of Biochemistry & Biomedical Sciences', 'https://healthsci.mcmaster.ca/biochem', null, 'awawa'),
      new Link('biology', 'Department Of Biology', 'https://biology.mcmaster.ca/', null, 'awawa'),
      new Link('ees', 'School Of Earth, Environment & Society', 'https://www.science.mcmaster.ca/ees/', null, 'awawa'),
      new Link('sis', 'School Of Interdisciplinary Science', 'https://www.science.mcmaster.ca/sis/', null, 'awawa'),
      new Link('scce', 'Science Career & Cooperative Education', 'https://www.science.mcmaster.ca/scce/', null, 'awawa'),
      new Link('kinesiology', 'Department Of Kinesiology', 'https://www.science.mcmaster.ca/kinesiology/', null, 'awawa'),
      new Link('physics', 'Department Of Physics & Astronomy', 'https://physics.mcmaster.ca/', null, 'awawa'),
      new Link('pnb', 'Department Of Psychology, Neuroscience & Behaviour', 'https://www.science.mcmaster.ca/pnb/', null, 'awawa'),
      new Link('nursing', 'School of Nursing', 'https://nursing.mcmaster.ca/', null, 'awawa'),
      new Link('ssc', 'Student Success Centre', 'https://studentsuccess.mcmaster.ca/', null, 'awawa'),
      new Link('campusstore', 'Campus Store', 'https://campusstore.mcmaster.ca/', null, 'awawa'),
    ],
  },
  {
    name: 'Classes',
    links: [
      new Link('map', 'Campus Maps', 'https://www.mcmaster.ca/uts/maps/index.html', null, 'awawa'),
      new Link('mosaic', 'Mosaic', 'https://epprd.mcmaster.ca/psp/prepprd/?cmd=login', null, 'awawa'),
      new Link('iclicker', 'iClicker', 'https://student.iclicker.com/#/courses', null, 'awawa'),
      new Link('email', 'Email', 'http://mail.mcmaster.ca/', null, 'awawa'),
      new Link('a2l', 'Avenue to Learn', 'https://avenue.mcmaster.ca/', null, 'awawa'),
      new Link('library', 'Library', 'https://www.oscarplusmcmaster.ca/home.htm', null, 'awawa'),
      new Link('healthsci-library', 'Health Science Library', 'https://hsl.mcmaster.ca/', null, 'awawa'),
      new Link('discovery', 'Library Discovery', 'https://discovery.mcmaster.ca/iii/encore/', null, 'awawa'),
      new Link('msaf-policy', 'MSAF Policy', 'https://secretariat.mcmaster.ca/university-policies-procedures-guidelines/msaf-mcmaster-student-absence-form/', null, 'awawa'),
      new Link('mytimetable', 'My Timetable', 'https://mytimetable.mcmaster.ca/', null, 'awawa'),
      new Link('macanatomy', 'MacAnatomy', 'https://macanatomy.mcmaster.ca/', null, 'awawa'),
      new Link('calendar', 'Academic Calendars', 'https://academiccalendars.romcmaster.ca/', null, 'awawa'),
      new Link('macinsiders', 'macinsiders', 'https://macinsiders.com/', null, 'awawa'),
      new Link('mcmaster-reddit', 'McMaster Reddit', 'https://www.reddit.com/r/McMaster/', null, 'awawa'),
      new Link('teams', 'Microsoft Teams', 'https://teams.microsoft.com/', null, 'awawa'),
      new Link('tophat', 'Top Hat', 'https://app.tophat.com/', null, 'awawa'),
      new Link('pearson', 'My Pearson', 'https://portal.mypearson.com/', null, 'awawa'),
      new Link('maccheck', 'MacCheck', 'https://maccheck.mcmaster.ca/', null, 'awawa'),
      new Link('hmdl', 'HMDL', 'https://courses.hayden-mcneil.com/', null, 'awawa'),
    ],
  },
  {
    name: 'MSU',
    links: [
      new Link('campus-events', 'Campus Events', 'https://msumcmaster.ca/service/campus-events/', null, 'awawa'),
      new Link('starrez', 'Residence Portal', 'https://liveatmac.mcmaster.ca/PortalX', null, 'awawa'),
      new Link('msu', 'McMaster Student Union', 'https://msumcmaster.ca/', null, 'awawa'),
      new Link('clubs', 'Clubs Directory', 'https://msumcmaster.ca/clubs/clubs-directory/', null, 'awawa'),
      new Link('opirg', 'OPIRG McMaster', 'https://www.opirgmcmaster.org/', null, 'awawa'),
      new Link('marching', 'McMaster Marching Band', 'https://www.mcmastermarchingband.com/', null, 'awawa'),
      new Link('insurance', 'Health & Dental Insurance', 'https://msumcmaster.ca/info/health-dental-insurance/', null, 'awawa'),
      new Link('cfmu', 'CFMU McMaster Community Radio', 'https://cfmu.ca/', null, 'awawa'),
      new Link('fcc', 'Food Collective Centre', 'https://msumcmaster.ca/service/fcc/', null, 'awawa'),
      new Link('charity-ball', 'Food Collective Centre', 'https://msumcmaster.ca/service/charity-ball/', null, 'awawa'),
      new Link('child-care-centre', 'Child Care Centre', 'https://msumcmaster.ca/service/child-care-centre/', null, 'awawa'),
      new Link('diversity-services', 'Diversity Services', 'https://msumcmaster.ca/service/diversity-services/', null, 'awawa'),
      new Link('efrt', 'MSU Emergency First Response Team', 'https://msumcmaster.ca/service/efrt/', null, 'awawa'),
      new Link('macademics', 'Macademics', 'https://msumcmaster.ca/service/macademics/', null, 'awawa'),
      new Link('maccess', 'Maccess', 'https://msumcmaster.ca/service/maccess/', null, 'awawa'),
      new Link('maroons', 'Maroons', 'https://msumcmaster.ca/service/maroons/', null, 'awawa'),
      new Link('ombuds', 'Ombuds Office', 'https://mcmaster.ca/ombuds/', null, 'awawa'),
      new Link('pcc', 'Pride Community Centre', 'https://msumcmaster.ca/service/pcc/', null, 'awawa'),
      new Link('shec', 'Student Health Education Centre', 'https://msumcmaster.ca/service/shec/', null, 'awawa'),
      new Link('spark', 'Spark', 'https://msumcmaster.ca/service/spark/', null, 'awawa'),
      new Link('swhat', 'Student Walk Home Attendant Team', 'https://msumcmaster.ca/service/swhat/', null, 'awawa'),
      new Link('silhouette', 'The Silhouette', 'https://www.thesil.ca/', null, 'awawa'),
      new Link('underground-design', 'Underground Media + Design', 'https://undergrounddesign.ca/', null, 'awawa'),
      new Link('union-market', 'Union Market', 'https://msumcmaster.ca/service/union-market/', null, 'awawa'),
      new Link('wgen', 'Women & Gender Equity Network', 'https://msumcmaster.ca/service/wgen/', null, 'awawa'),
    ],
  },
  {
    name: 'Engineering',
    links: [
      new Link('fireball-academy', 'Fireball Academy', 'https://fireballacademy.mcmaster.ca/', null, 'awawa'),
      new Link('oscar', 'OSCARplus', 'https://www.oscarplusmcmaster.ca/home.htm', null, 'awawa'),
    ],
  },
]


// check no repeated id
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const ids = new Set<string>()
  for (const {links} of linksSections) {
    for (const {id} of links) {
      if (ids.has(id)) {
        throw new Error(`Link ID '${id}' appeared multiple times.`)
      } else {
        ids.add(id)
      }
    }
  }
}
