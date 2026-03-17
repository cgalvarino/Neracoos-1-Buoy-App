"use client"
import { ErddapPlatformList } from "Features/ERDDAP"
import { Region, regionList } from "Shared/regions"
import { paths } from "Shared/constants"
import { urlPartReplacer } from "Shared/urlParams"

import Link from "next/link"

export function RegionList({ region }: { region: Region }) {
  return <ErddapPlatformList boundingBox={region.bbox} />
}

export function NextRegion({ region, offset }: { region: Region; offset: Number }) {
  let regionIdx = regionList.findIndex((r) => r.slug === region.slug)
  if (regionIdx < 0) {
    return <div />
  }

  let newRegionIdx = (regionIdx + regionList.length + offset) % regionList.length
  return (
    <div>
      <Link
        href={urlPartReplacer(paths.regions.region, ":id", regionList[newRegionIdx].slug as string)}
        key={regionList[newRegionIdx].name}
      >
        {regionList[newRegionIdx].name}
      </Link>
    </div>
  )
}
