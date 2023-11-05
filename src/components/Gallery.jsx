export const Gallery = () => {
       
    return (
        <div className="bg-white">
            <div className="p-24 flex flex wrap">
                <div className="">
                    <h2 className="text-2xl font-medium text-center">Gallery</h2>
                    <p className="text-lg p-3">
                    OUr homemade cakes custom ordered to your liking. 
                    Disclousre: we always try to match the color to be the best of our ability,
                     but due to inventory some colors may not be exact. We ask at least a
                      week notice for ANY CUSTOM CAKE orders. Please give 48 hours for any 
                      other cake orders. Orders may  or may not be accepted due to staff schedule, 
                      availability or holidays.
                    </p>
                </div>
            </div>
            <div className="banner-image p-3 flex flex-wrap mx-3 justify-center">
                <img src={require("../assets/images/cake-banner.png")} alt="banner" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake1.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake2.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake3.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake4.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake5.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake6.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake7.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake8.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake9.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />
                <img src={require("../assets/images/cake10.png")} alt="cake" className="flex flex-wrap p-2 w-auto h-60 hover:scale-150" />


            </div>
            
        </div>
    )
}