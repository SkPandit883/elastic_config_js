import client from "./connection"

/**
 *
 * @param index
 * @param id
 * @param document
 * @returns
 */

export const indexDocument = async (index: string, id: any, document: any) =>
  await client.index({
    index: index,
    id: id,
    document: document,
  })


/**
 *
 * @param index
 * @param id
 * @returns
 */
export const getDocument = async (index: string, id: any) =>
  await client.get({
    index: index,
    id: id,
  })

/**
 *
 * @param matchQuery
 * @returns
 */
export const searchDocument = async (matchQuery: any) =>
  await client.search({
    query: {
      match: matchQuery
    }
  })


/**
 *
 * @param index
 * @param id
 * @param document
 * @returns
 */
export const updateDocument = async (index: string, id: any, document: any) =>
  await client.update({
    index: index,
    id: id,
    doc: document
  })


/**
 *
 * @param index
 * @param id
 * @returns
 */
export const deleteDocument = async (index: string, id: any) =>
  await client.delete({
    index: index,
    id: id,
  })
