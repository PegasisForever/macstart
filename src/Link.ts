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
    name: 'Facilities',
    links: [
      new Link('facility', 'Facility Serivices', 'https://facilities.mcmaster.ca/', null, 'awawa'),
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
    ],
  },
  {
    name: 'MSU',
    links: [
      new Link('campus-events', 'Campus Events', 'https://msumcmaster.ca/service/campus-events/', null, 'awawa'),
      new Link('starrez', 'Residence Portal', 'https://liveatmac.mcmaster.ca/PortalX', null, 'awawa'),
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
