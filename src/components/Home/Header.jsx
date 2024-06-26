import img from '../../../public/images/hero2.jpg'

const Header = () => {
  return (
    <section style={{backgroundImage: `url(${img})`}} className={`relative h-screen w-full bg-no-repeat bg-cover bg-top`}>
      <div className="bg-primary w-full h-full opacity-80 flex items-center justify-center">
        <div className="md:flex flex-col items-center justify-between md:px-10">
          <p className="p-4 text-white font-extrabold text-7xl leading-normal">Find Your <br className="md:hidden" />
          <span className="text-yellow-600">Dream </span>
          <br className="md:hidden"/>
          <span className="text-yellow-600">House</span>
          </p>
          <p className="text-white text-center text-lg md:text-lg p-4 font-medium md:leading-loose">Embark on your journey of finding your dream house with us. We specialise in helping you uncover the perfect property that meets your needs and exceeds expectations</p>
        </div>
      </div>
    </section>
  )
}

export default Header