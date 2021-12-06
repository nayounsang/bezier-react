/* External dependencies */
import { useEffect } from 'react'
import { LayoutActions } from 'Layout/redux'
import LayoutHeaderType from 'Layout/types/LayoutHeaderType'

/* Internal dependencies */
import useLayoutDispatch from './useLayoutDispatch'

export default function useHeader(type: LayoutHeaderType) {
  const dispatch = useLayoutDispatch()

  useEffect(() => {
    const action = (() => {
      if (type === LayoutHeaderType.ContentHeader) {
        return LayoutActions.setShowContentHeader
      }
      if (type === LayoutHeaderType.CoverableHeader) {
        return LayoutActions.setShowCoverableHeader
      }

      throw new Error(`Invalid Layout Header Type, got ${type}`)
    })()

    dispatch(action(true))

    return function cleanUp() {
      dispatch(action(false))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
