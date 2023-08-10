import icon from '../../assets/icon.svg'

export const CardHeader = ({title, author}) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <div className='w-[3.125rem] h-[3.125rem] bg-[#2A2136] rounded-[0.67569rem] grid place-items-center'>
                    <img src={icon} alt="icon" />
                </div>
                <div className='leading-7'>
                    <p>{title}</p>
                    <p className='text-xs'><span className='text-white/30'>28 Jan 23 | 13:18 |</span> <span className='text-[#01C36D]'>By: {author}</span></p>
                </div>
            </div>
            <div className='px-4 py-[0.15rem] bg-[#1B3C37] rounded-[2.77325rem]'>
                <span className='text-[#01C36D] text-sm'>Live</span>
            </div>
        </div>
    )
}
