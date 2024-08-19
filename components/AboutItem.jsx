const AboutItem = ({ item }) => (
    <li className='flex items-center justify-center xl:justify-start gap-4'>
      <span>{item.fieldName}</span>
      <span>{item.fieldValue}</span>
    </li>
  )
  
  export default AboutItem
  