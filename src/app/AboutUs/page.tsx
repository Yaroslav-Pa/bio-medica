import MapSection from '@/components/mapSection/MapSection';
import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import { Change } from '@/variablesToChange';
const { phones, socials } = Change;
function AboutUsPage() {
  return (
    <section className='max-w-[1400px] mx-auto'>
      <section className='flex flex-col md:flex-row gap-5 justify-center items-center py-10 px-4 text-base lg:text-medium'>
        <section className='flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Телефони колл-центру:</h2>
            <div className='flex flex-col gap-1'>
              {phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Графік роботи колл-центру:</h2>
            <div className='flex flex-col gap-1'>
              <p>Понеділок-п'ятниця: 8:00 - 19:00</p>
              <p>Субота: 8:00 - 17:00</p>
              <p>Неділя: 8:00 - 15:00</p>
            </div>
          </div>
        </section>
        <section className='flex flex-col gap-2'>
          <h2 className='font-bold'>Слідкуйте за нами у соц. мережах:</h2>          
        </section>
      </section>
      <MapSection />
    </section>
  );
}

export default AboutUsPage;
