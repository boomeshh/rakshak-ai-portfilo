import { describe, it } from 'vitest'
import * as fc from 'fast-check'
import problems from '../../data/problems'
import features from '../../data/features'

/**
 * Data Layer Integrity Property Tests
 * Validates: Requirements 4.2, 4.3, 5.2, 5.3
 */
describe('Data Layer Integrity', () => {
  it('Property 1: All problem objects have required fields', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 5 }), (i) => {
        const p = problems[i]
        return (
          typeof p.id === 'string' && p.id.length > 0 &&
          typeof p.title === 'string' && p.title.length > 0 &&
          typeof p.description === 'string' && p.description.length > 0 &&
          typeof p.icon === 'string' && p.icon.length > 0
        )
      })
    )
  })

  it('Property 2: All feature objects have required fields', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 7 }), (i) => {
        const f = features[i]
        return (
          typeof f.id === 'string' && f.id.length > 0 &&
          typeof f.title === 'string' && f.title.length > 0 &&
          typeof f.description === 'string' && f.description.length > 0 &&
          typeof f.icon === 'string' && f.icon.length > 0
        )
      })
    )
  })

  it('Property 3: Problems array has exactly 6 items', () => {
    fc.assert(
      fc.property(fc.constant(problems), (arr) => arr.length === 6)
    )
  })

  it('Property 4: Features array has exactly 8 items', () => {
    fc.assert(
      fc.property(fc.constant(features), (arr) => arr.length === 8)
    )
  })

  it('Property 5: All problem IDs are unique', () => {
    const ids = problems.map(p => p.id)
    const uniqueIds = new Set(ids)
    fc.assert(
      fc.property(fc.constant(ids), (arr) => arr.length === uniqueIds.size)
    )
  })

  it('Property 6: All feature IDs are unique', () => {
    const ids = features.map(f => f.id)
    const uniqueIds = new Set(ids)
    fc.assert(
      fc.property(fc.constant(ids), (arr) => arr.length === uniqueIds.size)
    )
  })
})
