import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from 'react-icons/go';
import { earningData, SparklineAreaData, ecomPieChartData } from "../data/stuff";
import { useStateContext } from "../contexts/ContextProvider";
import { Button} from "../components";

const Dashboard = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center bg-gradient-to-r from-sky-500 to-indigo-500'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-white text-3xl'>Welcome</p>
              <p className='text-xl font'>Peter</p>
            </div>
          </div>
          <div className='mt-4'>
            <Button 
            color='white'
            bgColor='Blue'
            text='Download'
            borderRadius='10px'/>
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key ={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
              >
              <button type='button' style={{ color: item.iconColor, backgroundColor:item.iconBg}}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                  {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
              <p>
                <span className='text-3xl font-semibold'>LMAooo</span>
                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white
                 bg-green-400 ml-3 text-xs'>haha</span>
              </p>
              <p className='text-gray-500 mt-1'>Pain</p>
              </div>
              <div className='mt-8'>
              <p>
                <span className='text-3xl font-semibold'>Ehehe</span>
              </p>
              <p className='text-gray-500 mt-1'>Suffer</p>
              </div>
            </div>
          </div>
          <div className='mt-1o'>
            <Button color="white" bgColor="blue" text="Download Report" borderRadius="10px" />
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Dashboard