

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[50vh] mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/cT844Bp/banner4.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To <span className="text-[#f86306]">Brand Tech</span>  </h1>
                        <p className="mb-5">Large Collection of Your Needs.</p>
                        <button className="btn btn-primary bg-[#f86306] font-bold border-none">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;