import React from 'react'

import LeftBarTitle from './LeftBarTitle'
import LeftBarForm from './LeftBarForm'

const LeftBar = () => {
  return (
    <div className="flex flex-col flex w-3/4 ">
      <LeftBarTitle />
      <LeftBarForm />
    </div>
  );
}

export default LeftBar
