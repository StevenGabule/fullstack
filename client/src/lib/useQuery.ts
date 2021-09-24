import React from 'react'
import { server } from './api'

interface State<TData> {
  data: TData | null;
}

export const useQuery = <TData = any>(query: string) => {
  const [state, setState] = React.useState<State<TData>>({
    data: null
  })

  const fetch = React.useCallback(() => {
    const fetchApi = async () => {
      const { data } = await server.fetch<TData>({ query });
      setState({ data });
    }
    fetchApi()
  }, [query])


  React.useEffect(() => {
    fetch()
  }, [fetch])
  return { ...state, refetch: fetch };
}