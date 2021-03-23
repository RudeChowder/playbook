

import React from 'react'
import FilterSingle, { FilterSingleProps } from './FilterSingle'
import FilterDouble, { FilterDoubleProps } from './FilterDouble'

type FilterProps =
  | FilterSingleProps
  | (FilterDoubleProps & {
      double?: boolean,
    })

const Filter = ({ double = false, ...templateProps }: FilterProps) => {
  return (
    <Choose>
      <When condition={double}>
        <FilterDouble {...templateProps} />
      </When>
      <Otherwise>
        <FilterSingle {...templateProps} />
      </Otherwise>
    </Choose>
  )
}

export default Filter
