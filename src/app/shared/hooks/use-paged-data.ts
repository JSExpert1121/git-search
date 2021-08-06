import { useState, useEffect } from "react";

export type PageParam = {
	page: number;
	pageSize: number;
}
export function usePagedSource(
	page: number,
	pageSize: number,
	fetchFn: ({page, pageSize}: PageParam) => Promise<any>
) {
	const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
	const [data, setData] = useState<any>(undefined)

	useEffect(() => {
		
		const getData = async () => {
			setLoading(true)
			setError('')

			try {
        const res = await fetchFn({ page, pageSize: pageSize })
        setData(res)
      } catch (error) {
        setError(error.message ?? error.data.message)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [page, pageSize, fetchFn])

	return [data, error, loading]
}