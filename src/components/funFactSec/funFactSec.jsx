import FunFactCard from './funFactCard';
import { funFactData } from '../../Data';

const FunFactSec = () => {
    return (
        <section className="bg-darkBlue bg-funFactBg bg-no-repeat bg-center bg-cover bg-blend-multiply">
            <div className="container">
                <div className="flex justify-center flex-wrap sm:flex-row flex-col">
                    {funFactData.map((data, index) => (
                        <FunFactCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FunFactSec
