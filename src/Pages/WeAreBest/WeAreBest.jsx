
const WeAreBest = () => {
    return (
        <div>
            <div className="footer p-10 bg-base-200 text-base-content mt-10 gap-8">
               
               <div>
                <p className="text-2xl">Why We are The <span className="text-orange-600">Best</span></p>
                    <p className="text-justify">
                    At Brand Tech Company, we pride ourselves on being the industry's unrivaled leader in product sales. With a commitment to excellence that sets us apart, we deliver unparalleled quality, exceptional customer service, and a wide range of innovative products that cater to your every need. Our dedicated team of experts is always at your service, ensuring your complete satisfaction. We are driven by a relentless pursuit of perfection, making us the best choice for all your product needs. Experience the difference with Brand Tech Company, where your success is our priority.
                    </p>
               </div>
        
                <form>
                    <header className="footer-title">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-orange-500 text-white border-none">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    );
};

export default WeAreBest;