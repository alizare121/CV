import { Icon, Tooltip } from '@components';
import { useState } from '@utils';
import { SkillsInterface } from '@enums';
export function Slider({ data }: { data: SkillsInterface[] }) {
  const [activeItem, setActiveItem] = useState<number>(1);
  const itemData = data.find((i: SkillsInterface) => i.id === activeItem)?.data;

  const note = data[activeItem - 1].note;
  return (
    <div className='ml-8 flex min-h-[28rem]'>
      <div className='flex flex-col justify-between items-center my-8 relative w-20'>
        <div className='bg-navy h-full w-1 flex absolute end-9 z-10 ' />
        {data.map(({ title, id, icon }: SkillsInterface) => {
          const isActive = activeItem === id;
          const iconColor = isActive ? 'text-navy' : 'text-lightNavy';
          const size = isActive ? 'w-14 h-14' : 'w-12 h-12';
          return (
            <Tooltip key={id} title={title}>
              <div
                onClick={() => setActiveItem(id)}
                className={`${size} z-20 shadow rounded-full bg-white items-center justify-center flex cursor-pointer hover:scale-110 hover:bg-indigo-300 duration-300`}
              >
                <Icon iconName={icon} className={`text-2xl ${iconColor}`} />
              </div>
            </Tooltip>
          );
        })}
      </div>
      <div className='bg-white flex-1 flex flex-col justify-between my-14 ms-10 rounded-lg p-4 shadow-md'>
        <ul className='list-disc ml-6'>
          {itemData?.map((item, i) => (
            <li key={i} className='text-pink mb-1'>
              <span className='text-navy'>{item}</span>
            </li>
          ))}
        </ul>
        <span className='text-pink text-center text-lg mb-8'>{note}</span>
      </div>
    </div>
  );
}
