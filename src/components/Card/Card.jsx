import buy from '../../assets/buy.svg'
import FilledBtn from '../Buttons/FilledBtn'
import OutlinedBtn from '../Buttons/OutlinedBtn'
import CardFooter from './CardFooter'
import { CardHeader } from './CardHeader'

export const Card = ({title, author, tradeName, entry, current, target, sl}) => {
    return (
        <>
            <div className='w-[25.0625rem] h-[19.125rem] bg-[linear-gradient(180deg,_#393046_0%,_#2D2537_100%)] rounded-3xl p-4 relative overflow-hidden'>
                <CardHeader
                title={title}
                author={author}
                />

                <div className='my-4 flex text-sm border border-s-0 border-e-0 py-1'>
                    <span className='grow-[4] px-4'>Trade Name</span>
                    <span className='grow-[1]'>Entry</span>
                    <span className='grow-[1]'>Current</span>
                </div>

                <div className='flex'>
                    <div className='flex grow-[2] gap-1'>
                        <img className='self-start' src={buy} alt="buy" />
                        <div>
                            <p>{tradeName}</p>
                            <p className='text-xs text-white/70'>Target: <span className='text-sm text-white'>${target}</span> | S/L: <span className='text-sm text-white'>${sl}</span></p>
                        </div>
                    </div>
                    <div className='grow-[1]'><span>${entry}</span></div>
                    <div className='grow-[1]'><span>${current}</span></div>
                </div>

                <div className='flex justify-between my-8'>
                    <OutlinedBtn>About Trade</OutlinedBtn>
                    <FilledBtn>Place Order</FilledBtn>
                </div>

                <CardFooter/>
            </div>
        </>
    )
}
