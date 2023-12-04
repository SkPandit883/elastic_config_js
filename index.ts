import client from "./connection"

/**
 *
 * @param index
 * @returns
 */
export const createIndex = async (index: string) =>

  await client.indices.create({ index: index })


/**
 *
 * @param index
 * @returns
 */
export const deleteIndex = async (index: string) =>

  await client.indices.delete({ index: index })
