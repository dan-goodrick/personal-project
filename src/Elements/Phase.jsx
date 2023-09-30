import { Droppable } from 'react-beautiful-dnd'
import {styled} from '@stitches/react'
import ViewCard from './ViewCard'

const StyledColumn = styled('div', {
  padding: '24px 16px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 8,

  h2: {
    margin: 0,
    padding: '0 16px'
  }
})

const StyledList = styled('div', {
  backgroundColor: '#ddd',
  borderRadius: 8,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  marginTop: 8
})

const Phase = ({ phase }) => {
  return (
    <Droppable droppableId={phase.id}>
      {provided => (
        <StyledColumn>
          <h2>{phase.id}</h2>
          <StyledList {...provided.droppableProps} ref={provided.innerRef}>
          {console.log(phase)}
            {phase.list.map((candidate, i) => (
              <ViewCard key={i} family={candidate}/>
            ))}
            {provided.placeholder}
          </StyledList>
        </StyledColumn>
      )}
    </Droppable>
  )
}

export default Phase
