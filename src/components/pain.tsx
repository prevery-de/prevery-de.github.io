const features = [
    {
        name: 'Gesundheitssystem ist nach wie vor pathogenetisch aufgebau',
        description: 'Transformation zu einem salutogenetischen System zur Entlastung des kurativen Systems'
    },
    {
        name: 'Mangel an Zeit sowie Vergütungsoptionen bei Ärzt:innen für sprechende Medizin',
        description:'Nutzung bereits etablierter Finanzierungsmodelle & Schaffung von Win-Win-Situationen'
    },
    {
        name: 'Unzureichende Interprofessionalität & Vernetzung',
        description: 'Vernetzung bereits etablierter Player und Teillösungen'
    },
    {
        name: 'Komplexität & unübersichtliches Überangebot an Präventionsleistungen',
        description:'DER interaktive Guide mit einfacher Handhabung sowie nutzerorientierter und wertschätzender Kommunikation'
    },
    {
        name: 'one-fits-all Ansatz anstelle individueller Lösungen',
        description: 'Individueller, nachhaltiger & ganzheitlicher Ansatz'
    },
    {
        name: 'Mangel an Gesundheitskompetenz & Selbstwirksamkeit',
        description: 'Förderung von Gesundheitskompetenz & Selbstwirksamkeit'
    },
]

export default function Pain() {
    return (
        <div className="bg-white py-24 sm:py-32 bg-gradient-to-b from-prevery-50 to-white md:m-20 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl lg:mx-0">
                    <h2 className="font-asap text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">Pain Points & Solutions</h2>
                    <p className="font-varela mt-6 text-lg leading-8 text-gray-600">
                        Um das Gesundheitssystem zu entlasten, ist eine Verschiebung hin zur Gesundheitsförderung und bessere Vernetzung im Gesundheitssektor nötig. Individuelle, ganzheitliche Ansätze sollten standardisierte Lösungen ersetzen.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.name}>
                            <dt className="font-asap font-semibold text-gray-900">{feature.name}</dt>
                            <dd className="font-varela mt-1 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
