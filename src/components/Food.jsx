import React, {useState} from 'react';
import {data} from "../data/data";

const Food = () => {

    const [foods, setFoods] = useState(data)

    /**
     * Filter Through Foods
     */
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        );
    };

    /**
     * Filter by price
     */
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        );
    };

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between mt-6'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between sm:justify-start md:justify-start py-2 flex-wrap'>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => setFoods(data)}
                        >
                            All
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterType('burger')}
                        >
                            Burgers
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterType('pizza')}
                        >
                            Pizzas
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterType('chicken')}
                        >
                            Chickens
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterType('salad')}
                        >
                            Salads
                        </button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between sm:justify-start sm:justify-start md:justify-start max-w-p[390px] py-2 w-full'>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterPrice('$')}
                        >
                            $
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterPrice('$$')}
                        >
                            $$
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterPrice('$$$')}
                        >
                            $$$
                        </button>
                        <button
                            className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'
                            onClick={() => filterPrice('$$$$')}
                        >
                            $$$$
                        </button>
                    </div>
                </div>
            </div>

            {/* Display Food Images */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer' key={index}>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item}/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-600 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;