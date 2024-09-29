import { ServiceHighlights } from "../_components/service-highlights"
import { AboutCrumb } from "./_components/about-crumb"
import { AboutImage } from "./_components/about-image"
import { AboutStory } from "./_components/about-story"
import { BoardMembers } from "./_components/board-members"
import { CompanyOverview } from "./_components/company-overview"

const AboutPage = () => {
    return (
        <main className="py-4 space-y-6">
            <AboutCrumb />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <AboutStory />
                <AboutImage />
            </div>
            <CompanyOverview />
            <BoardMembers />
            <ServiceHighlights />
        </main>
    )
}

export default AboutPage