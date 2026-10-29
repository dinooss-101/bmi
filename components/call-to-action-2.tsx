import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-16 md:py-20" id="community-form-cta">
            <div className="mx-auto max-w-7xl px-6">
                <div className="border-border/50 bg-foreground/2 flex items-center justify-center gap-6 border p-12 max-lg:flex-col max-lg:text-center lg:items-end lg:justify-between">
                    <div>
                        <h2 className="max-w-2xl text-balance text-5xl font-semibold xl:text-6xl">
                            Submit a community priority
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-xl text-base">
                            Log verified local issues — infrastructure, drainage, STEM lab requests, or flood-risk alerts. Aligned with the DPDP Act 2025. No document harvesting, no identity collection.
                        </p>
                    </div>

                    <Button
                        size="lg"
                        nativeButton={false}
                        render={<Link href="/#community-form">Open intake form</Link>}
                    />
                </div>
            </div>
        </section>
    )
}
