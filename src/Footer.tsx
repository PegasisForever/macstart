import React, {ReactChild} from 'react'

function Link(props: { children: ReactChild, href: string }) {
  return <a className={'underline'} href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
}

export function PegaFooter() {
  return <div className={'text-gray-400 text-center mt-8 mb-8'}>
    <p>
      A personal project by{' '}
      <Link href="https://pegas.is/">Pegasis</Link>.
    </p>
    <p>
      Not affiliated with{' '}
      <Link href="https://www.mcmaster.ca/">McMaster University</Link>{' '}
      or{' '}
      <Link href="https://msumcmaster.ca/">MSU</Link>.
    </p>
    <p>
      Email:{' '}
      <Link href='mailto:me@pegasis.site'>me@pegasis.site</Link>
    </p>
    <p>
      Contribute to it on{' '}
      <Link href="https://github.com/PegasisForever">Github</Link>.
    </p>
  </div>
}
