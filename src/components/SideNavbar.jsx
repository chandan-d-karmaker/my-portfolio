import React from 'react';
const dots = Array.from({ length: 18 });


const SideNavbar = () => {
    return (
        <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:w-20 md:flex-col md:items-center md:border-r md:border-white/5 md:bg-[#252a33]">
            <div className="pt-6 text-sm font-semibold tracking-tight text-white">
                Chandan
            </div>


            <div className="mt-auto pb-12 pt-10 flex flex-col items-center gap-1">
                {dots.map((_, idx) => (
                    <span
                        key={idx}
                        className="h-1.5 w-1.5 rounded-full bg-white/10"
                    />
                ))}
            </div>
        </aside>
    );
};

export default SideNavbar;