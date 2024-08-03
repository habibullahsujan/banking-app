'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathName = usePathname()
    return (
        <section>
            <Sheet>
                <SheetTrigger>
                    <Image src={'/icons/hamburger.svg'} height={30} width={30} alt="menu icon" className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={'left'} className="bg-white">
                    <Link href={'/'} className='flex items-center gap-2 mb-4'>
                        <Image width={34} height={34} src={'/icons/logo.svg'} alt='horizon logo' className='size-[24px] max-xl:size-14' />
                        <h1 className='text-24 text-black-1 font-bold font-ibm-plex-serif'>Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                                {
                                    sidebarLinks.map((item) => {
                                        const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                                        return (
                                         <SheetClose asChild key={item.route}>
                                                <Link href={item.route} key={item.route} className={cn('mobilenav-sheet-close flex  items-center gap-2 w-full p-1 rounded-md', { 'bg-bankGradient': isActive })}>
                                                    <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({ 'brightness-[3] invert-0': isActive })} />
                                                    <p className={cn('text-16  font-semibold text-black-2', {
                                                        'text-white': isActive,
                                                    })}>
                                                        {item.label}
                                                    </p>
                                                </Link>
                                            </SheetClose>

                                        )
                                    })
                                }
                                user
                            </nav>

                        </SheetClose>
                        footer
                    </div>


                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNavbar