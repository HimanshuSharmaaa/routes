import React from 'react'
import {useParams} from 'react-router-dom'

function Param() {
    const params = useParams();
  return (
    <div>
      i am {params.username}.
    </div>
  )
}

export default Param;