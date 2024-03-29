import logo from '../images/content/logo.png';

function Splash() {
  return (
    <section>
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full md:w-4/12 text-center">
            <img src={logo} alt="LuxSpace | Fullfill your house with beautiful furnitur" className="mx-auto mb-8"/>
            <p className="mb-16 px-4">
              Kami menyeniadakn furnitur berkelas yang membuat ruangan terasa homey
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Splash;