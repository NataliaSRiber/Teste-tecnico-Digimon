/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
'use client'
import { ReactNode, createContext, useState } from 'react'

export const SearchContext = createContext({
  search: '',
  setSearch: (value: string) => {},
  apiCall: true,
  setApiCall: (value: boolean) => {},
  selectedLevel: '',
  setSelectedLevel: (value: string) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function SearchContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [apiCall, setApiCall] = useState(true)
  const [selectedLevel, setSelectedLevel] = useState('')

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        apiCall,
        setApiCall,
        selectedLevel,
        setSelectedLevel,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
