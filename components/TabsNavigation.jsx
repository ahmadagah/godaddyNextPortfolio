import { TabsList, TabsTrigger } from '@/components/ui/tabs'

const TabsNavigation = () => {
  return (
    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
      <TabsTrigger value='experience'>Experience</TabsTrigger>
      <TabsTrigger value='education'>Education</TabsTrigger>
      <TabsTrigger value='skills'>Skills</TabsTrigger>
      <TabsTrigger value='about'>About</TabsTrigger>
    </TabsList>
  )
}

export default TabsNavigation
