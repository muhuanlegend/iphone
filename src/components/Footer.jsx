import { footerLinks } from '../constants'
const Footer = () => {
    return (
        <footer
        className='py-5 sm:px-10 px-5'
        >
            <div
            className='screen-max-width'
            >
                <div
                className=''
                >
                    <p
                    className='font-semibold text-gray text-xs'
                    >
                        More ways to shop:{' '}
                        <span
                        className='underline text-blue'
                        >
                             find an Apple Store {' '}
                        </span>
                        or {' '}
                        <span
                        className='underline text-blue'
                        >
                             other retailers
                        </span> {' '}
                        near you.
                    </p>
                    <p
                    className='font-semibold text-gray text-xs'
                    >
                        or call +256759060525
                    </p>
                </div>
                <div
                className ='bg-neutral-700 my-5 h-[1px] w-full'
                />
                <div
                className='flex md:items-center justify-between'
                >
                    <p
                    className='font-semibold text-gray text-xs'
                    >
                        Copyright @ 2024 Apple Inc. All rights reserved by Muhuan developers
                    </p>
                    <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
