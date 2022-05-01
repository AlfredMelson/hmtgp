import { getFromLocalStorage } from '../lib/helper'

export const isProd = process.env.NODE_ENV === 'production'

/**
 * Show command service on contents
 * @see Comment.tsx
 */
export const commentFlag = isProd

/**
 * Get content meta from the database
 * @see useContentMeta.tsx
 */
export const contentMetaFlag = isProd

/**
 * Increment content views
 * @see useContentMeta.tsx
 */
export const incrementMetaFlag = isProd && getFromLocalStorage('incrementMetaFlag') !== 'false'

/**
 * Only increase count when in specified domain meta
 * @see _app.tsx
 */
export const blockDomainMeta = isProd

