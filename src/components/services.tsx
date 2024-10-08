import {
    ArrowPathIcon,
    UserCircleIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Individuelle Gesundheitsanalyse',
        description:
            'Wir helfen Dir dabei, Deine individuelle Lösung für Deine Gesundheit zu finden, indem wir Dein Gesundheitsverhalten KI-gestützt analysieren und Dir darauf basierend personalisierte Handlungs-empfehlungen aufzeigen. Hierfür orientieren wir uns stets an aktuellen Leitlinien und Empfehlungen.',
        icon: UserCircleIcon,
    },
    {
        name: 'Ganzheitliche Betreuung',
        description: 'Durch die Berücksichtigung aller gesundheitsrelevanten Lebensbereiche können wir dich effektiv und nachhaltig bei einem gesunden Lebensstil unterstützen. Wir versorgen Dich zusätzlich mit Schulungsmaterialien, Tageschallenges sowie einer Experten- und Communitystruktur.',
        icon: ArrowPathIcon,
    },
    {
        name: 'KI-Gesundheitscoaching',
        description: 'Unser KI-Coach "EVE" begleitet dich in deinem Alltag und kann jederzeit auf deine individuellen Bedürfnisse eingehen und somit deine Gesundheitskompetenz und Selbstwirksamkeit stärken. Zudem hilft Dir die Lotsenfunktion, dich in dem komplexen Gesundheitssystem zurechtzufinden.',
        icon: UserGroupIcon,
    },
]

export default function Services() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="font-ubuntu text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
                        Unser Leistungsangebot
                    </h2>
                    <p className="font-ubuntu font-normal mt-6 text-lg leading-8 text-gray-600">
                        Erlebe eine für Dich maßgeschneiderte Gesundheitsförderung und Prävention, die Deine persönlichen Bedürfnisse durch individuelle Gesundheitsanalysen, Expertenbetreuung und tägliche Begleitung sowie Motivation in den Fokus stellt.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-prevery-600 bezel bg-gradient-to-b from-prevery-500 to-prevery-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
