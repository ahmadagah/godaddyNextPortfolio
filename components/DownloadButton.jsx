import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const DownloadButton = () => (
  <Button
    className='uppercase flex items-center gap-2'
    size='lg'
    variant='outline'
  >
    <span>Download CV</span>
    <FiDownload className='text-xl' />
  </Button>
)

export default DownloadButton
