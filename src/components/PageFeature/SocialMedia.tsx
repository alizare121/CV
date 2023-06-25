import { Icon } from '@components';

export function SocialMedia() {
  const socialData = [
    {
      id: 1,
      title: 'github',
      icon: 'github-circled',
      link: 'https://github.com/alizare121',
    },
    {
      id: 2,
      title: 'linkedin',
      icon: 'linkedin-circled',
      link: 'https://www.linkedin.com/in/ali-zare/',
      color: 'text-[#0c65c2]',
    },
    {
      id: 3,
      title: 'email',
      icon: 'mail-alt',
      link: 'mailto:aliiizaareee@gmail.com',
      color: 'text-[#db5649]',
    },
    {
      id: 4,
      title: 'telegram',
      icon: 'telegram',
      link: 'https://t.me/aliiizareee',
      color: 'text-[#26a0dc]',
    },
  ];
  return (
    <div className='bg-white absolute  py-2 px-4 top-40 rounded-s-2xl flex flex-row end-0'>
      {socialData.map(({ link, icon, id, color }) => {
        return (
          <a
            key={id}
            target='_blank'
            href={link}
            className='mr-1 hover:scale-110 hover:bg-indigo-500 duration-300'
          >
            <Icon iconName={icon} className={`text-3xl ${color} `} />
          </a>
        );
      })}
    </div>
  );
}
