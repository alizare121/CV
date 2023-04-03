import { Icon, Tooltip } from '@components'
import { useState } from '@utils'
export function Slider() {
    const [activeItem, setActiveItem] = useState(1)
    const data = [
        {
            id: 1,
            title: 'Development',
            icon: 'code',
            data: [
                'JavaScript (ES6 & Beyond) ',
                'TypeScript',
                'React JS',
                'React Native',
                'Next js',
                'State Management : Redux ,Context Api , MobX , Recoil',
                'HTML/CSS',
                'Bootstrap/Material-Ui/Ant Design/StyledComponents/tailwind',
                'Test : Static Test (Flow ) , Unit Test (jest)'
            ]
        },
        {
            id: 2,
            title: 'Tools',
            icon: 'wrench',
            data: [
                'Git (Git Flow)',
                'Firbase (Push Notification , Analytics , Crashlytics)',
                'Update (CodePush)',
                'Monitoring ( Sentry )',
                'Documentation ( StoryBook )',
                'Scrum methodology'
            ]
        },
        {
            id: 3,
            title: 'Network',
            icon: 'monitor',
            data: ['MikroTik', 'MCITP', 'Linux', 'Docker']
        },
        {
            id: 4,
            title: 'Soft Skills',
            icon: 'user',
            data: [
                'Problem-solving skills and critical thinking',
                'Communication skills',
                'Leadership Skills',
                'Self-learning',
                'Accountability',
                'Adaptability',
                'Time management',
                'Emotional intelligence',
                'Mentoring'
            ]
        }
    ]

    const itemData = data.find((i) => i.id === activeItem)?.data
    return (
        <div className="ml-8 flex h-full">
            <div className="flex flex-col justify-between items-center my-8 relative">
                <div className="bg-navy h-full w-1 flex absolute right-6 z-10" />
                {
                    data.map(({ title, id, icon }) => {
                        const isActive = activeItem === id;
                        const iconColor = isActive ? 'text-navy' : 'text-lightNavy';
                        return <Tooltip key={id} title={title}>
                            <div onClick={() => setActiveItem(id)} className="w-12 h-12 z-20 shadow rounded-full bg-white items-center justify-center flex cursor-pointer hover:scale-110 hover:bg-indigo-700 duration-300">
                                <Icon iconName={icon} className={`text-2xl ${iconColor}`} />
                            </div>
                        </Tooltip>
                    })
                }
            </div>
            <div className="bg-white flex-1 my-14 ml-10 rounded-lg p-4">
                {
                    itemData?.map((item) => <li className='text-pink mb-1'><span className='text-navy'>{item}</span></li>)
                }
            </div>
        </div>
    )
}