import chi1 from '../image/ch1.png';
import './line.css'
import chi2 from '../image/ch2.png';
import chi3 from '../image/ch3.png';
import chi4 from '../image/ch4.png';
import chi5 from '../image/logo.png';

export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32" id='ha'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={chi1}
              alt="Transistor"
              width={758}
              height={58}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={chi2}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={chi3}
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={chi4}
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={chi5}
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  