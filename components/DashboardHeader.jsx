export default function DashboardHeader({userName, productLength}){
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-400 border-none rounded-xl shadow-2xl">
                <div className="text-center mb-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-50 mb-2">
                        Welcome, {userName}!
                    </h1>
                    <p className="text-white text-lg font-light">Your personal shopping dashboard</p>
                </div>
                        
                {/* Optional: Stats or filters could go here */}
                <div className="flex justify-center gap-4 mt-6">
                    <div className="bg-gray-400 px-6 py-3 rounded-lg shadow-md">
                        <p className="text-sm text-white font-bold">In Cart</p>
                        <p className="text-2xl font-bold text-amber-100 text-center">{productLength}</p>
                    </div>
                </div>
        </div>
    )
}