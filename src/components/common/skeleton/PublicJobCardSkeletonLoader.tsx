import React from 'react'
import PublicJobCardSkeleton from './publicJobSkeleton'

function PublicJobCardSkeletonLoader({ count = 5 }: { count?: number }) {
  return (
      <>
          {Array.from({ length: count }, (_, index) => (
              <PublicJobCardSkeleton key={index} />
          ))
          }
      </>
  )
}

export default PublicJobCardSkeletonLoader
