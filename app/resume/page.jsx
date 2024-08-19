'use client'

import { motion } from 'framer-motion'
import {
  Tabs,
  TabsContent,
} from '@/components/ui/tabs'
import TabsNavigation from '@/components/TabsNavigation'
import TabContentSection from '@/components/TabContentSection'
import ExperienceItem from '@/components/ExperienceItem'
import EducationItem from '@/components/EducationItem'
import AboutItem from '@/components/AboutItem'
import SkillsList from '@/components/SkillsList'

// Import the data
import { about } from '@/data/aboutData'
import { experience } from '@/data/experienceData'
import { education } from '@/data/educationData'
import { skills } from '@/data/skillsData'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto mt-10'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsNavigation />

          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent
              value='experience'
              className='w-full'
            >
              <TabContentSection
                title={experience.title}
                description={
                  experience.description
                }
                items={experience.items}
                renderItem={(item) => (
                  <ExperienceItem item={item} />
                )}
              />
            </TabsContent>

            {/* Education */}
            <TabsContent
              value='education'
              className='w-full'
            >
              <TabContentSection
                title={education.title}
                description={
                  education.description
                }
                items={education.items}
                renderItem={(item) => (
                  <EducationItem item={item} />
                )}
              />
            </TabsContent>

            {/* Skills */}
            <TabsContent
              value='skills'
              className='w-full h-full'
            >
              <SkillsList skills={skills} />
            </TabsContent>

            {/* About */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <TabContentSection
                title={about.title}
                description={about.description}
                items={about.info}
                renderItem={(item) => (
                  <AboutItem item={item} />
                )}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
