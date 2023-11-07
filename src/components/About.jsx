import aboutImage from "../assets/images/about-image.png";

export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 flex">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Giancarlo's Italian Bakery and Deli. Bringing you Italian classics like your grandma used to make.
                    Whether you want a cake or cookies we have you covered. Fresh bread baked daily without any preservatives. 
                    Cookies, cakes, pastries and bread all made by hand in our store. Everything fresh everyday. Our pastries
                    will definitely be a crowd pleaser at your next party. Come in to talk to us about the cake for your next
                    birthday, wedding, anniversary or get-together.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}