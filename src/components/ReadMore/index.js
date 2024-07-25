// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  MainContainer,
  Heading,
  Description,
  CardContainer,
  Image,
  CardDescription,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const [showMore, toggleShowMore] = useState(false)

  const handleChangeShowMore = () => {
    toggleShowMore(prev => !prev)
  }

  const {reactHooksDescription} = props
  const displayContent = showMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  return (
    <BgContainer>
      <MainContainer>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <CardContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <CardDescription>{displayContent}</CardDescription>
          <Button type="button" onClick={handleChangeShowMore}>
            {showMore ? 'Read Less' : 'Read More'}
          </Button>
        </CardContainer>
      </MainContainer>
    </BgContainer>
  )
}

export default ReadMore
