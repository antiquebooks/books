'use client'
import { useState } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('EN')
  return (
    <div className="text-sm flex items-center gap-2">
      <button
        onClick={() => setLang('EN')}
        className={lang === 'EN' ? 'font-semibold' : 'opacity-70'}
      >
        EN
      </button>
      |
      <button
        onClick={() => setLang('SK')}
        className={lang === 'SK' ? 'font-semibold' : 'opacity-70'}
      >
        SK
      </button>
      |
      <button
        onClick={() => setLang('DE')}
        className={lang === 'DE' ? 'font-semibold' : 'opacity-70'}
      >
        DE
      </button>
    </div>
  )
}
