import {Icon} from '@components'
export function Slider () {
    const  data = [
        {
            id :  1,
            title : '11111',
            icon : 'a',

        },
        {
            id :  2,
            title : '11111',
            icon : 'a',

        },
        {
            id :  3,
            title : '11111',
            icon : 'a',

        },
        {
            id :  4,
            title : '11111',
            icon : 'a',

        }
    ]
    return (
       <div className="ml-8 flex h-full">
          
           <div className="flex flex-col justify-between items-center my-8 relative">
           <div className="bg-navy h-full w-1 flex absolute right-6 z-10" />
           {
               data.map(({title , id})=> {
                   return <div className="w-12 h-12 z-20 shadow rounded-full bg-pink items-center justify-center flex cursor-pointer hover:scale-110 hover:bg-indigo-700 duration-300" key={id}>
                       <i className='icon-telegram bg-navy'/>
                   </div>
               })
           }
           </div>

           <div className="bg-white flex-1 my-16 ml-10 rounded-lg">
               aaasssjhjsjsjsjjjjjdjdjddj
           </div>
          
       </div>
    )
}