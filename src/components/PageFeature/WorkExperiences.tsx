import Image, { StaticImageData } from 'next/image';
import { PageInterface } from '@types';
import tse from '../../assets/images/tse.png';
import banimood from '../../assets/images/banimode.jpeg';
import i1st from '../../assets/images/1st.jpeg';
import iNet from '../../assets/images/inet.png';
import charisma from '../../assets/images/charisma.jpeg';

interface JobProps {
  index: number;
  icon: StaticImageData;
  jobTitle: string | string[];
  jobDate: string | string[];
  jobInfo: string | string[];
}

const JobCard: React.FC<JobProps> = ({
  icon,
  jobTitle,
  jobDate,
  jobInfo,
  index,
}) => {
  const isArrayJobInfo = Array.isArray(jobInfo);
  return (
    <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
      <div className='flex flex-row items-center'>
        <Image
          src={icon}
          alt={`${jobTitle}`}
          width={index === 1 ? 70 : 90}
          height={index === 1 ? 40 : 50}
          className='object-contain me-4'
        />
        <div className='flex flex-col gap-2'>
          <span className='text-2xl font-bold'>{jobTitle}</span>
          <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
            {jobDate}
          </span>
        </div>
      </div>
      <div className='flex flex-col ms-2 mt-4'>
        <ul className='list-disc ml-12'>
          {isArrayJobInfo ? (
            jobInfo?.map((item: string) => <li key={item}>{item}</li>)
          ) : (
            <li>{jobInfo}</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default function WorkExperiences({ messages }: PageInterface) {
  const jobData = [
    {
      icon: charisma,
      jobTitle: messages.charismaJobTitle,
      jobDate: messages.charismaJobDate,
      jobInfo: messages.charismaJobInfo,
    },
    {
      icon: tse,
      jobTitle: messages.tseJobTitle,
      jobDate: messages.tseJobDate,
      jobInfo: messages.tseJobInfo,
    },
    {
      icon: banimood,
      jobTitle: messages.baniJobTitle,
      jobDate: messages.baniJobDate,
      jobInfo: messages.baniJobInfo,
    },
    {
      icon: i1st,
      jobTitle: messages.stJobTitle,
      jobDate: messages.stJobDate,
      jobInfo: messages.stJobInfo,
    },
    {
      icon: i1st,
      jobTitle: messages.stNetJobTitle,
      jobDate: messages.stNetJobDate,
      jobInfo: messages.stNetJobInfo,
    },
    {
      icon: iNet,
      jobTitle: messages.freeJobTitle,
      jobDate: messages.freeJobDate,
      jobInfo: messages.freeJobInfo,
    },
  ];
  return (
    <div className='flex flex-col w-full mt-12 items-center justify-center'>
      <h2 className='text-4xl text-yellow font-bold'>
        {messages.workExperiences}
      </h2>
      <div className='flex flex-col items-center justify-center w-full'>
        <span className='text-white'>{messages.workSummeryInfo}</span>
      </div>
      <div className='flex flex-col w-full mt-6'>
        <div className='grid grid-cols-12 gap-4'>
          {jobData.map((job, index) => (
            <JobCard
              index={index}
              key={`${job.jobTitle}`}
              icon={job.icon}
              jobTitle={job.jobTitle}
              jobDate={job.jobDate}
              jobInfo={job.jobInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
