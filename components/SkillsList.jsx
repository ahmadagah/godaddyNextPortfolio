import SkillItem from '@/components/SkillItem'

const SkillsList = ({ skills }) => (
  <div className='flex flex-col gap-[30px]'>
    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
      <h3 className='text-4xl font-bold'>
        {skills.title}
      </h3>
      <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
        {skills.description}
      </p>
    </div>
    <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:grid-col-[30px]'>
      {skills.skillList.map((skill, index) => (
        <SkillItem
          key={index}
          icon={skill.icon}
          name={skill.name}
        />
      ))}
    </ul>
  </div>
)

export default SkillsList
