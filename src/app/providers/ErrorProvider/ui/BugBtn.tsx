import React, { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

const BugBtn = () => {

    const [error,setError] = useState(false)

    useEffect(() =>{
        if(error){

            throw new Error()
        }
    },[error])

  return (
    <Button onClick={() => setError(true)} >trow error</Button>
  )
}

export default BugBtn