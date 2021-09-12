import {atom, selector, useRecoilValue} from 'recoil'
import {immerable} from 'immer'
import mcmasterLogo from './logos/mcmaster.png'
import mdProgramLogo from './logos/md_program.png'
import neuroscienceSocietyLogo from './logos/neuroscience_society.png'
import campusStoreLogo from './logos/campus_store.png'
import mosaicLogo from './logos/mosaic.png'
import iClickerLogo from './logos/iclicker.png'
import outlookLogo from './logos/outlook.png'
import a2lLogo from './logos/a2l.png'
import macAnatomyLogo from './logos/mac_anatomy.png'
import redditLogo from './logos/reddit.png'
import teamsLogo from './logos/teams.png'
import tophatLogo from './logos/tophat.png'
import pearsonLogo from './logos/pearson.png'
import hmdlLogo from './logos/hmdl.png'
import echo360Logo from './logos/echo360.png'
import linkedinLogo from './logos/linkedin.png'
import zoomLogo from './logos/zoom.png'
import vmwareHorizonLogo from './logos/vmware_horizon.png'
import venaLogo from './logos/vena.png'
import msuLogo from './logos/msu.png'
import opirgLogo from './logos/opirg.png'
import marchingBandLogo from './logos/marching_band.png'
import cfmuLogo from './logos/cfmu.png'
import ombudsLogo from './logos/ombuds.png'
import theSilhouetteLogo from './logos/the_silhouette.png'
import undergroundDesignLogo from './logos/underground_design.png'
import fireballLogo from './logos/fireball.png'
import aiSocietyLogo from './logos/ai_society.png'

export class Link {
  [immerable] = true

  private searchText: string

  constructor(
    public id: string,
    public title: string,
    public url: string,
    public iconUrl: string | null,
    public description: string | null,
    public searchKeyWords: string = '',
    public pinned: boolean = false,
  ) {
    this.searchText = (id + title + url + iconUrl + (description ?? '') + searchKeyWords).toLowerCase()
  }

  copyWithPinned(pinned: boolean): Link {
    return new Link(
      this.id,
      this.title,
      this.url,
      this.iconUrl,
      this.description,
      this.searchKeyWords,
      pinned,
    )
  }

  includes(text: string): boolean {
    const words = text.toLowerCase().split(' ')

    for (const word of words) {
      if (this.searchText.includes(word)) return true
    }
    return false
  }
}

const links = [
  new Link('facility', 'Facility Services', 'https://facilities.mcmaster.ca/', null, 'Providing a healthy environment for learning.', 'To deliver service excellence on time and on budget to a satisfied customer. We are committed to providing a healthy, safe, supportive, and inspiring physical environment conducive to learning, teaching, research, community partnering, and the attraction and retention of quality students, faculty, and staff.'),
  new Link('main', 'Mcmaster University', 'https://www.mcmaster.ca/', mcmasterLogo, 'The main website for the university.', 'COMMITTED TO CREATING A BRIGHTER WORLD'),
  new Link('future', 'Future Students', 'https://future.mcmaster.ca/', null, 'Apply to the university.', 'Creating a Brighter World canadian international parent guidance counselor programs requirements admission RECRUITMENT how much will it cost visit.'),
  new Link('application-deadlines', 'Application Deadlines', 'https://future.mcmaster.ca/dates-and-deadlines/', null, 'Deadlines for applications and documents.'),
  new Link('future-international', 'Future Students International', 'https://future-international.mcmaster.ca/', null, 'Apply to the university (international students).', 'Learn more about the innovative programming and opportunities that await you at one of the world’s top universities. brighter world admission requirements english language requirements'),
  new Link('programs', 'Programs', 'https://future.mcmaster.ca/programs/', null, 'Undergraduate programs.', 'Arts & Science Bachelor of Technology Business Chemical & Physical Sciences Gateway Computer Science Economics I Engineering Environmental & Earth Sciences Gateway Health and Society I Health Sciences (BHSc Honours) Honours Integrated Science Honours Kinesiology Humanities iArts (Integrated Arts) Integrated Biomedical Engineering & Health Sciences Integrated Business & Humanities Life Sciences Gateway Mathematics & Statistics Gateway Medical Radiation Sciences Medicine Midwifery Music Nursing Physician Assistant Social Sciences future student'),
  new Link('graduated', 'Graduated Studies', 'https://gs.mcmaster.ca/', null, 'Information for current and future graduate students.', 'Future graduate students how to apply, life on campus accepted my offer Registration Orientation'),
  new Link('covid', 'Covid-19 Info', 'https://covid19.mcmaster.ca/', null, 'Get vaccinated! Wear your masks!', 'coronavirus back to mac Vaccination FAQs COVID screening, vaccination proof and exemptions distancing and masking cleaning training ventilation '),
  new Link('science', 'Faculty of Science', 'https://science.mcmaster.ca/', null, null),
  new Link('research', 'Research & Innovation', 'https://research.mcmaster.ca/', null, 'Support researchers.', 'Industry & Investors conduct research startups technologies materials Institutes, Centres, Facilities & Platforms Prizes, Honours & Research Chairs award'),
  new Link('president', 'Office of President', 'https://president.mcmaster.ca/', null, null, 'McMaster is a university with impact. McMaster’s Mission & Vision Shape the Future Biography Letters from the President provost Equity, Diversity and Inclusion message Freedom of Expression Annual Reports'),
  new Link('engineering', 'Faculty of Engineering', 'https://www.eng.mcmaster.ca/', null, null, 'co-op coop career research resources future students apply application programs'),
  new Link('registrar', 'Office of the Registrar', 'https://registrar.mcmaster.ca/', null, 'Help you with student affairs.', 'The departments of the Registrar’s Office are here help you with everything from admission to convocation and all the steps between. Service Requests incoming class finances enrol exams alumni'),
  new Link('dates-deadlines', 'Dates & Deadlines', 'https://registrar.mcmaster.ca/dates-and-deadlines/', null, 'Dates for terms, exams and fees.', 'Sessional dates and deadlines involving enrolling, the start of class, mid-term recesses and examination periods are determined annually and approved by Senate. convocation aid awards'),
  new Link('degroote', 'Degroote School of Business', 'https://www.degroote.mcmaster.ca/', null, 'Education with purpose.', 'We actively foster interdisciplinary thinking and evidence-based management to transform business and society. The DeGroote difference is that you’ll be challenged to apply your knowledge to practical business situations, gaining an understanding of how the concepts you’re learning today will impact the business world tomorrow. professional programs undergraduate research executive research faculty alumni'),
  new Link('social-science', 'Faculty of Social Sciences', 'https://socialsciences.mcmaster.ca/', null, null, 'Future Students research anthropology economics environment society health aging indigenous studies labour political Institute on Globalization & the Human Condition Department Of Psychology, Neuroscience & Behaviour religious social psychology sociology water without borders'),
  new Link('uts', 'University Technology Services', 'https://uts.mcmaster.ca/', null, 'IT support for everyone.', 'Accounts and Passwords Administrative Systems Communication, Collaboration and Storage Computers, Printers, and Software Infrastructure IT Professional Services securety '),
  new Link('room-portal', 'Room Portal', 'https://rooms.mcmaster.ca/portal/index.php?p=RoomSearch&r=1', null, 'Tracking booked classrooms and computer labs.', 'The McMaster University Room Portal is currently available as view only access to Classrooms controlled by the Office of the Registrar (Scheduling & Exams), UTS Computer Labs, and Faculty of Health Science controlled space in MDCL and HSC (MUMC)'),
  new Link('linkedin-learning', 'Linkedin Learning', 'https://lnkd.in/gj-9Xgg', linkedinLogo, null, ''),
  new Link('zoom', 'Zoom', 'https://mcmaster.zoom.us/', zoomLogo, null, ''),
  new Link('software-portal', 'Software Portal', 'https://mcmaster.onthehub.com/WebStore/Welcome.aspx#', null, 'Buy software licences.', 'microsoft vmware workstation player fusion vsan vrealize tanzu nsx-t elearning elabs community sas'),
  new Link('macsphere', 'MacSphere', 'https://macsphere.mcmaster.ca/', null, 'Bring together all of McMaster’s research', 'MacSphere is·McMaster University’s Institutional Repository (IR). The purpose of an IR is to bring together all of a University’s research under one umbrella, with an aim to preserve and provide access to that research. The research and scholarly output included in MacSphere has been selected and deposited by the individual university departments and centres on campus.'),
  new Link('vmware-horizon', 'Virtual Desktop', 'https://virtualdesktop.cas.mcmaster.ca/', vmwareHorizonLogo, 'Vmware horizon'),
  new Link('vena', 'Vena', 'https://vena.io/', venaLogo, null),
  new Link('humanities', 'Faculty of Humanities', 'https://www.humanities.mcmaster.ca/', null, null),
  new Link('healthsci', 'Faculty of Health Sciences', 'https://healthsci.mcmaster.ca/', null, null),
  new Link('chemistry', 'Faculty of Sciences - Chemistry & Chemical Biology', 'https://chemistry.mcmaster.ca/', null, null),
  new Link('mdprogram', 'MD Program', 'https://mdprogram.mcmaster.ca/', mdProgramLogo, 'Michael G. DeGroote School of Medicine', 'The School of Medicine, established in 1966 and renamed the Michael G. DeGroote School of Medicine in 2004, offers major programs in undergraduate, postgraduate and graduate medical education.'),
  new Link('psychiatry', 'Department of Psychiatry & Behavioural Neurosciences', 'https://psychiatry.mcmaster.ca/', null, null, 'Welcome to the Department of Psychiatry and Behavioural Neurosciences at McMaster University. We have a proud tradition of collaboration, innovation, and the pursuit of excellence, working closely with our partners in the university, local hospitals and the community. This website will introduce you to the outstanding people and programs that make our Department such an exciting place. '),
  new Link('applicants', 'Application Status', 'https://applicants.mcmaster.ca/', null, 'Checking your application status.'),
  new Link('news', 'Daily News', 'https://dailynews.mcmaster.ca/', null, 'McMaster daily news.'),
  new Link('experts', 'McMaster Experts', 'https://experts.mcmaster.ca/', null, 'McMaster’s researcher and expertise discovery gateway.'),
  new Link('math', 'Department Of Mathematics & Statistics', 'https://math.mcmaster.ca/', null, null),
  new Link('neuroscience-society', 'McMaster Neuroscience Society', 'http://neurosciencesociety.ca/', neuroscienceSocietyLogo, 'Bring resources and events for neuroscience students.', 'Welcome to the McMaster Neuroscience Society! Our society comprises undergraduate Honours Neuroscience students who work collaboratively to bring resources, opportunities, and events for students within the program, and to enhance the student experience.'),
  new Link('nursing', 'School of Nursing', 'https://nursing.mcmaster.ca/', null, null, 'The School of Nursing is internationally renowned for its innovation in nursing education. We continue to build on a stellar reputation for developing and enhancing capacity for nursing education across the globe while delivering high-quality, responsive and student-centred education programs at home.'),
  new Link('ssc', 'Student Success Centre', 'https://studentsuccess.mcmaster.ca/', null, 'For all students to thrive and succeed', 'academic skills careers global opportunities international spiritual care'),
  new Link('campus-store', 'Campus Store', 'https://campusstore.mcmaster.ca/', campusStoreLogo, null, 'textbooks supplies clothing gifts health science technology general books faculty staff presto card'),
  new Link('map', 'Campus Maps', 'https://www.mcmaster.ca/uts/maps/index.html', null, 'Indoor maps for every building.', 'Alumni Memorial Building AN Bourns Science Building (ABB) Burke Science Building (BSB) Chester New Hall Commons Building Communications Research Library David Braley Sport Medicine & Rehabilitation Centre Degroote School Of Business Engineering Technology Building (ETB) ET Clarke Centre General Sciences Gilmour Hall Hamilton Hall HG Thode Library Information Technology Building (ITB) Institute For Applied Health Sciences Ivor Wynne Centre John Hodgins Building (JHE) Kenneth Taylor Hall (KTH) Life Sciences Building LR Wilson Hall McMaster University Student Centre (MUSC) Michael DeGroote Centre for Learning and Discovery (MDCL) Mills Library Museum Of Art Nuclear Research Building Psychology Building Refectory Ron Joyce Stadium T13 Tandem Accelerator Togo Salmon Hall University Hall'),
  new Link('mosaic', 'Mosaic', 'https://epprd.mcmaster.ca/psp/prepprd/?cmd=login', mosaicLogo, 'Access administrative information systems.'),
  new Link('iclicker', 'iClicker', 'https://student.iclicker.com/#/courses', iClickerLogo, 'Participate in class polls.'),
  new Link('email', 'Email', 'http://mail.mcmaster.ca/', outlookLogo, 'You should check your inbox often.', 'outlook'),
  new Link('a2l', 'Avenue to Learn', 'https://avenue.mcmaster.ca/', a2lLogo, 'Access course information.'),
  new Link('library', 'Library', 'https://library.mcmaster.ca/', null, 'Mcmaster’s main library.'),
  new Link('healthsci-library', 'Health Science Library', 'https://hsl.mcmaster.ca/', null, null),
  new Link('discovery', 'Library Discovery', 'https://discovery.mcmaster.ca/iii/encore/', null, 'Search for books.'),
  new Link('msaf-policy', 'MSAF Policy', 'https://secretariat.mcmaster.ca/university-policies-procedures-guidelines/msaf-mcmaster-student-absence-form/', null, 'Relief for missed academic term work.'),
  new Link('mytimetable', 'My Timetable', 'https://mytimetable.mcmaster.ca/', null, 'Design your timetable and enrol into classes.', 'MY TIMETABLE is a self-service tool that enables you to generate your schedule conflict free and enrol you directly into Mosaic. To learn about this tool please go to'),
  new Link('macanatomy', 'MacAnatomy', 'https://macanatomy.mcmaster.ca/', macAnatomyLogo, 'Used in conjunction with specimens in the physical lab.', 'This site is intended to be used in conjunction with specimens in the physical lab and to:  Present text and media content that supports and contextualizes those specimens. Provide online content for students who have no access to the anatomy labs. Serve up streamed lectures from courses/sessions offered by our faculty. Provide a searchable catalogue of specimens within the lab (under development). Augment and surpass information currently taught in professional curricula. '),
  new Link('calendar', 'Academic Calendars', 'https://academiccalendars.romcmaster.ca/', null, 'Course listings, sessional dates, aids and awards.'),
  new Link('course-listings', 'Course Listings', 'https://academiccalendars.romcmaster.ca/content.php?catoid=44&navoid=9045', null, 'A list of all undergraduate courses.'),
  new Link('macinsiders', 'macinsiders', 'https://macinsiders.com/', null, 'Forum for McMaster students (deprecated).'),
  new Link('mcmaster-reddit', 'McMaster Subreddit', 'https://www.reddit.com/r/McMaster/', redditLogo, 'McMaster online community.'),
  new Link('teams', 'Microsoft Teams', 'https://teams.microsoft.com/', teamsLogo, 'Join your virtual classes and connect to classmates.'),
  new Link('tophat', 'Top Hat', 'https://app.tophat.com/', tophatLogo, 'Access your course materials'),
  new Link('pearson', 'My Pearson', 'https://portal.mypearson.com/', pearsonLogo, 'Access your course materials'),
  new Link('maccheck', 'MacCheck', 'https://maccheck.mcmaster.ca/', null, 'Daily covid check in.', 'covid-19 coronavirus'),
  new Link('hmdl', 'HMDL', 'https://courses.hayden-mcneil.com/', hmdlLogo, 'Online learning platform.','hayden mcneil macmillan learning'),
  new Link('campus-events', 'Campus Events', 'https://www.instagram.com/msucampusevents/', null, 'McMaster events, concerts, comedians, speakers & more.'),
  new Link('starrez', 'Residence Portal', 'https://liveatmac.mcmaster.ca/PortalX', null, 'Apply for residence and finding roommates.', 'housing'),
  new Link('hospitality', 'Hospitality Services', 'https://hospitality.mcmaster.ca/', null, null),
  new Link('food-on-campus', 'Food on Campus', 'https://hospitality.mcmaster.ca/locations/on-campus/', null, 'Tells you where to eat.'),
  new Link('msu', 'McMaster Student Union', 'https://msumcmaster.ca/', msuLogo, 'Advocating student interests.'),
  new Link('clubs', 'Clubs Directory', 'https://msumcmaster.ca/clubs/clubs-directory/', null, 'A list of all clubs in McMaster.'),
  new Link('opirg', 'OPIRG McMaster', 'https://www.opirgmcmaster.org/', opirgLogo, 'Helping students organize around issues.'),
  new Link('marching', 'McMaster Marching Band', 'https://www.mcmastermarchingband.com/', marchingBandLogo, null),
  new Link('insurance', 'Health & Dental Insurance', 'https://msumcmaster.ca/info/health-dental-insurance/', null, 'MSU provides insurance for undergraduate students.'),
  new Link('cfmu', 'CFMU McMaster Community Radio', 'https://cfmu.ca/', cfmuLogo, null),
  new Link('msu-services', 'MSU Services', 'https://msumcmaster.ca/service/', null, 'A list of all the services MSU provides.'),
  new Link('ombuds', 'Ombuds Office', 'https://mcmaster.ca/ombuds/', ombudsLogo, 'Ensuring that students are treated fairly.'),
  new Link('silhouette', 'The Silhouette', 'https://www.thesil.ca/', theSilhouetteLogo, 'McMaster’s student-run newspaper.'),
  new Link('underground-design', 'Underground Media + Design', 'https://undergrounddesign.ca/', undergroundDesignLogo, 'Full-service media, design & print shop.'),
  new Link('fireball-academy', 'Fireball Academy', 'https://fireballacademy.mcmaster.ca/', fireballLogo, 'Enhance your personal and professional skills.'),
  new Link('oscar', 'OSCARplus', 'https://www.oscarplusmcmaster.ca/home.htm', null, 'Find your coop opportunities.'),
  new Link('echo360', 'echo 360', 'https://echo360.ca/courses', echo360Logo, 'Access your course materials'),
  new Link('mcmasterai', 'McMaster AI Society', 'https://www.mcmasterai.com/', aiSocietyLogo, 'Change the world with AI.'),
  new Link('brand-standards', 'Brand Standards', 'https://brand.mcmaster.ca/', null, 'McMaster brand guidelines, logo downloads and more.'),
]

export const pinnedLinkIDsState = atom<Array<string>>({
  key: 'pinnedLinkIDsState',
  default: (() => {
    try {
      const list = JSON.parse(localStorage.getItem('pinned-links') ?? '[]') as Array<string>
      const linksIDSet = new Set<string>()
      for (const link of links) {
        linksIDSet.add(link.id)
      }
      return list.filter(id => linksIDSet.has(id))
    }catch (e) {
      console.warn(e)
      return []
    }
  })(),
})

export const linksMapState = selector<Map<string, Link>>({
  key: 'linksMapState',
  get: ({get}) => {
    const pinnedLinkIDs = new Set(get(pinnedLinkIDsState))
    const linksMap = new Map<string, Link>()
    for (const link of links) {
      linksMap.set(link.id, link.copyWithPinned(pinnedLinkIDs.has(link.id)))
    }
    return linksMap
  },
})

const linkSections = [
  {
    name: 'Facilities, Offices, Departments and Schools',
    linkIDs: [
      'brand-standards',
      'facility',
      'main',
      'future',
      'application-deadlines',
      'future-international',
      'programs',
      'graduated',
      'covid',
      'science',
      'research',
      'president',
      'engineering',
      'registrar',
      'degroote',
      'social-science',
      'uts',
      'macsphere',
      'humanities',
      'healthsci',
      'chemistry',
      'mdprogram',
      'psychiatry',
      'applicants',
      'news',
      'experts',
      'math',
      'neuroscience-society',
      'nursing',
      'ssc',
      'campus-store',
      'msu-services',
    ],
  },
  {
    name: 'Classes',
    linkIDs: [
      'map',
      'mosaic',
      'iclicker',
      'email',
      'a2l',
      'library',
      'healthsci-library',
      'discovery',
      'msaf-policy',
      'mytimetable',
      'macanatomy',
      'calendar',
      'dates-deadlines',
      'macinsiders',
      'mcmaster-reddit',
      'teams',
      'tophat',
      'pearson',
      'maccheck',
      'hmdl',
      'echo360',
      'linkedin-learning',
      'zoom',
      'vmware-horizon',
      'vena',
      'room-portal',
      'software-portal',
      'course-listings',
      'hospitality',
      'food-on-campus',
    ],
  },
  {
    name: 'MSU',
    linkIDs: [
      'campus-events',
      'starrez',
      'msu',
      'clubs',
      'opirg',
      'marching',
      'insurance',
      'cfmu',
      'ombuds',
      'silhouette',
      'underground-design',
    ],
  },
  {
    name: 'Engineering',
    linkIDs: [
      'fireball-academy',
      'oscar',
    ],
  },
  {
    name: 'Clubs',
    linkIDs: [
      'mcmasterai',
    ],
  },
]

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const errors: string[] = []

  const allLinkIDs = new Set<string>()
  for (const link of links) {
    if (allLinkIDs.has(link.id)) {
      errors.push(`Link id '${link.id}' is defined multiple times`)
    } else {
      allLinkIDs.add(link.id)
    }
  }

  const allSectionLinkIDs = new Set<string>()
  for (const {linkIDs} of linkSections) {
    for (const linkID of linkIDs) {
      if (!allLinkIDs.has(linkID)) {
        errors.push(`Cannot find definition for link id '${linkID}'`)
      }
      if (allSectionLinkIDs.has(linkID)) {
        errors.push(`Link id '${linkID}' appears in multiple sections`)
      } else {
        allSectionLinkIDs.add(linkID)
      }
    }
  }

  for (const linkID of allSectionLinkIDs.values()) {
    allLinkIDs.delete(linkID)
  }
  for (const linkID of allLinkIDs.values()) {
    errors.push(`Link id '${linkID}' is unused`)
  }

  if (errors.length > 0) {
    throw new Error('\n' + errors.join('\n'))
  }
}

export const linkSectionsState = selector<Array<{ name: string, links: Array<Link> }>>({
  key: 'linkSectionsState',
  get: ({get}) => {
    const linksMap = get(linksMapState)
    return linkSections.map(({name, linkIDs}) => {
      return {
        name,
        links: linkIDs.map(id => linksMap.get(id)!),
      }
    })
  },
})

export function PinnedLinkIDsSubscriber() {
  const pinnedLinkIDs = useRecoilValue(pinnedLinkIDsState)
  localStorage.setItem('pinned-links', JSON.stringify(pinnedLinkIDs))
  return null
}

