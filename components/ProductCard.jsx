function ProductCard({location, cardTitle, price, itemName, src, alt, ratings, ratingsNumber}){
    const currencyMap = {
        "UK": "€",
        "US": "$",
        "India": "₹"
    }; //this is an object having location and currency
    const currencySymbol = currencyMap[location] || "₹"; //currencymap[location] returns the currency symbol of respective location key. || or symbol is used that, if we dont find a currency symbol then "₹" will be default one. 
    return (
        <article className="rounded-xl shadow-lg w-full bg-gray-450 overflow-hidden hover:shadow-4xl transition-shadow duration-300">
            {/* Image Section with Zoom */}
            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"  
                    src={src} 
                    alt={alt} 
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <span className="text-yellow-500 text-sm">⭐</span>
                    <span className="font-semibold text-sm">{ratings}</span>
                    <span className="text-gray-500 text-xs">({ratingsNumber})</span>
                </div>
            </div>
            
            {/* Content Section */}
            <div className="p-5">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{cardTitle}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{itemName}</h3>
                
                {/* Price & Button */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-3xl font-bold text-gray-900">
                        {currencySymbol}{price}
                    </span>
                </div>
            </div>
        </article>
    )
}
export default ProductCard; 