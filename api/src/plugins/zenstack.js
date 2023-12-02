// turn this into an npm package: "@zenstackhq/redwood"
import { enhance } from '@zenstackhq/runtime'

import { db } from 'src/lib/db'

export function useZenStack() {
  return {
    onContextBuilding() {
      return ({ context }) => {
        console.log('Current context user:', context?.currentUser)
        context.db = enhance(db, { user: context?.currentUser })
      }
    },
  }
}
