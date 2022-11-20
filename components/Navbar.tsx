/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const menu = [{ label: "Home", route: "/" }, { label: "Dex", route: "/dex" }]
    return (
        <div className="w-full h-fit flex flex-row justify-between gap-12 items-center bg-transparent sticky top-0 z-5 p-5 text-white">
            <div className="w-1/2 h-full flex flex-row justify-start items-center gap-12">
                <img src="./fevm-logo.svg" height={80} width={100} alt="FEVM-logo" className="pl-5 py-1" />
                {menu.map((item, index) => {
                    return (
                        <div key={index} className="text-xl font-semibold">
                            <Link href={item.route}>
                                {item.label}
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="blockie fevm-grad rounded-full px-10 py-3 text-white text-lg font-semibold">Login</div>
        </div>
    )
}

export default Navbar